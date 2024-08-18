"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconType } from 'react-icons';
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function FooterLinks() {

    const links = [
        {
            href: "#",
            Icon: FaInstagram,
            title: "Instagram",
        },
        {
            href: "#",
            Icon: FaTwitter,
            title: "Twitter",
        },
        {
            href: "#",
            Icon: FaFacebook,
            title: "Facebook",
        },
        {
            href: "#",
            Icon: FaTiktok,
            title: "Tiktok",
        },
    ]

  return (
    <section className="w-full border-t-[1px] border-b-[1px] border-t-[#ffffff1f] border-b-[#ffffff1f]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-5">
        <Image
          src="/assets/logo-light.png"
          width={132}
          height={0}
          alt="Hollywood AI Logo"
          className="width-[132px]"
        />
        <div className="flex gap-[30px]">
          {links.map((link, index) => (
            <FooterLink
              key={index}
              href={link.href}
              Icon={link.Icon}
              title={link.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FooterLinks;

interface FooterLinkProps {
    href: string;
    Icon: IconType;
    title: string;
}

function FooterLink({ href, Icon, title}: FooterLinkProps) {
    return (
        <Link href={href} className="text-white text-sm flex items-center cursor-not-allowed">
            <Icon className="w-[14px] mr-3" />
            <span>
                {title}
            </span>
        </Link>
    )
}