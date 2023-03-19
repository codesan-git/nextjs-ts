import React from 'react'
import useSWR from 'swr'
import Link from 'next/link'

const fetcher = (url:string) => fetch(url).then(res => res.json())

interface Props {
    query:string
}

export default function SectionResult({query}:Props) {
    const {data, error}=useSWR(`https://api.github.com/search/users?q=${query}`, fetcher)
    var loading = !data && !error
  return (
    <div style={{marginTop:"10px"}}>
        <p>Hasil Pencarian : {query}</p>
        <div>
            {loading && "Tunggu Sebentar..."}
            {data && data.items.map((user:any, index:number)=>{
                return <ul key={index}>
                    <li><Link href={`cari/${user.login}`}></Link> {user.login}</li>
                    <li><Link href={user.repos_url} target='_blank'>Repository</Link></li>
                </ul>
            })}
            {JSON.stringify(data)}
        </div>
    </div>
  )
}
