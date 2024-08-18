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
    <nav>
        <Link href="#">
            <Image src={"/assets/logo-dark.png"} className="h-10" width={140} height={40} alt="Logo" />
        </Link>
        <div className="nav__links">
            {navLinks.map((link, index) => <NavLink key={index} link={link.link} text={link.text} />)}
        </div>
        <button className="nav__button">Sign In</button>
    </nav>
  )
}

export default Nav