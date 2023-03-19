"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function RooyLayout({children}:{children: React.ReactNode}) {

    const router=useRouter()
    const onClickUrl=(url:string)=> {
        router.push(url)
    }
  return (
    <html>
        <head />
        <body>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/dashboard">Dashboard</Link></li>
                <li onClick={()=>onClickUrl('/settings')}>Settings</li>
                <li><Link href="/calculator">Calculator</Link></li>
                <li><Link href="/cari">Cari Orang</Link></li>
            </ul>
            {children}
        </body>
    </html>
  )
}
