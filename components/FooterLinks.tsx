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
    <section id="links">
      <div className="links__container">
        <Image
          src="/assets/logo-light.png"
          width={0}
          height={0}
          sizes="100vw"
          alt="Hollywood AI Logo"
          className="links__logo"
        />
        <div className="links__list">
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

export function FooterLink({ href, Icon, title}: FooterLinkProps) {
    return (
        <Link href={href} className="links__link">
            <Icon className="links__link__icon" />
            <span className="links__link__text">
                {title}
            </span>
        </Link>
    )
}