import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function MovieCard() {
  return (
    <Link className="decoration-none" href="/movie/1">
        <figure className="h-auto aspect-[2/3] mb-1 rounded-xl relative">
            <Image className="w-full h-full rounded-xl" alt="Movie Card" src="/assets/MovieImage.jpg" width={170} height={250} />
            <div className="flex flex-col w-full">
                <span className="text-sm font-bold mb-1">Avatar</span>
                <span className="text-sm text-[#404654] opacity-70 font-light mb-1">James Cameron</span>
            </div>
        </figure>
    </Link>
  )
}

export default MovieCard