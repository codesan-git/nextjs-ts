"use client"
import React, { useState } from 'react'
import SectionResult from './[slug]/sectionResult'

export default function Cari() {

    const [query, setQuery] = useState('')

    const onSearch=(e:any)=> {
        e.preventDefault()
        const inputQuery = e.target[0].value;
        setQuery(inputQuery)
    }
  return (
    <div>
        <form onSubmit={onSearch}>
            <input placeholder='Cari User Github' />
            <button>Cari</button>    
        </form>
        {query && <SectionResult query={query} />}
    </div>
  )
}
