
import Link from 'next/link'
import React from 'react'
export function Navbar() {
  return (
    <>
      <nav class="flex items-center justify-center flex-wrap bg-[#616161] p-4">
        <div class="flex items-center flex-shrink-0 text-white mr-6">

          <Link href='/'>
           
            <span class="font-semibold text-xl tracking-tight">Pokemon App</span>
          </Link>
        </div>
      </nav>
    </>
  )
}

