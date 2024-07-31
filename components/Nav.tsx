import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'

function Nav() {

    const navLinks = [
        {
            link: "#",
            text: "About",
        },
        {
            link: "#",
            text: "Features",
        },
        {
            link: "#",
            text: "How it works",
        },
        {
            link: "#",
            text: "Privacy policy",
        },
        
    ]

  return (
    <nav className="py-[18px] px-[30px] flex justify-between items-center sticky top-0 z-[999] bg-white shadow-sm">
        <Link href="#">
            <Image src={"/assets/logo-dark.png"} className="h-10" width={140} height={40} alt="Logo" />
        </Link>
        <div className="hidden lg:flex gap-4">
            {navLinks.map((link, index) => <NavLink key={index} link={link.link} text={link.text} />)}
        </div>
        <button className="h-10 text-[15px] font-semibold py-2.5 px-4 border-none rounded-lg bg-[#00000019] hover:text-white hover:bg-black hover:scale-110 transition">Sign In</button>
    </nav>
  )
}

export default Nav