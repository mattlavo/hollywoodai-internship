"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { IconType } from "react-icons";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { MdLogin, MdLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import StoreProvider from "@/redux/StoreProvider";
import { signOutUser } from "@/redux/slices/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase";
import { openLoginModal } from "@/redux/slices/modalSlice";

const SidebarLinks = [
  {
    href: "/dashboard",
    Icon: LuLayoutDashboard,
    text: "Dashboard",
    disabled: false,
  },
  {
    href: "/favorites",
    Icon: FaRegBookmark,
    text: "Favorites",
    disabled: false,
  },
  {
    href: "#",
    Icon: IoIosSearch,
    text: "Search",
    disabled: true,
  },
  {
    href: "#",
    Icon: FaArrowTrendUp,
    text: "Trending",
    disabled: false,
  },
  {
    href: "#",
    Icon: IoMdHelpCircleOutline,
    text: "Help & Support",
    disabled: true,
  },
  {
    href: "/settings",
    Icon: IoMdSettings,
    text: "Settings",
    disabled: false,
  },
  {
    href: "/logout",
    Icon: MdLogin,
    text: "Log In",
    disabled: false,
  },
];

// const defaultUser = null

// interface DashboardProps {
//   user?: null|{}
// }

function DashboardSidebar() {

  return (
    <>
      <div className="sidebar--overlay sidebar--overlay--hidden "></div>
      <div className="sidebar">
        <Image
          src={"/assets/logo-dark.png"}
          alt="Sidebar logo"
          width={140}
          height={40}
          className="sidebar__logo"
        />
        <div className="sidebar__links">
          <span className="sidebar__links__title">Links</span>
          {SidebarLinks.slice(0, 4).map((link, index) => (
            <DashboardSidebarLink
              key={index}
              href={link.href}
              Icon={link.Icon}
              text={link.text}
              disabled={link.disabled}
            />
          ))}
        </div>
        <div className="sidebar__links">
          <span className="sidebar__links__title">Extras</span>
          {SidebarLinks.slice(4, 6).map((link, index) => (
            <DashboardSidebarLink
              key={index}
              href={link.href}
              Icon={link.Icon}
              text={link.text}
              disabled={link.disabled}
            />
          ))}
          <DashboardLogoutLink />
        </div>
      </div>
    </>
  );
}

export default DashboardSidebar;

interface DashboardSidebarLink {
  href: string;
  Icon: IconType;
  text: string;
  disabled: boolean;
}

function DashboardSidebarLink({
  href,
  Icon,
  text,
  disabled,
}: DashboardSidebarLink) {
  return (
    <Link href={href} className={`sidebar__link ${disabled && "disabled"}`}>
      <Icon className="sidebar__link__icon" />
      <span className="sidebar__link__text">{text}</span>
    </Link>
  );
}

function DashboardLogoutLink() {

  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  async function handleSignOut() {
    await signOut(auth);
    dispatch(signOutUser());
  }

  return (
    <>
      { !user.email ? (
        <Link href={""} className={'sidebar__link'} onClick={() => dispatch(openLoginModal())}>
          <MdLogin className="sidebar__link__icon" />
          <span className="sidebar__link__text">Log In</span>
        </Link>
      ) : (
        <Link href={""} className={'sidebar__link'} onClick={() => handleSignOut()}>
        <MdLogout className="sidebar__link__icon" />
        <span className="sidebar__link__text">Log Out</span>
        </Link>
      )}
    </>
  );
}
