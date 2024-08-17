import Link from 'next/link'
import React from 'react'

interface NavLinkProps {
    link: string;
    text: string;
}

function NavLink({ link, text }: NavLinkProps) {
  return (
    <Link href={link} className="nav__link">
        {text}
    </Link>
  )
}

export default NavLink