import Link from 'next/link'
import React from 'react'

interface NavLinkProps {
    link: string;
    text: string;
}

function NavLink({ link, text }: NavLinkProps) {
  return (
    <Link href={link} className="text-sm py-[7px] px-3.5 text-[#070707] font-semibold rounded-lg transition cursor-not-allowed hover:bg-[#0000000f]">
        {text}
    </Link>
  )
}

export default NavLink