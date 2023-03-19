"use client"
import React, { useEffect } from 'react'

export default function Error(
    {error, reset}:{error:Error,reset:()=>void}
    ) {

    useEffect(() => {
        console.error(`ini error ${error}`);
    }, [error]);

  return (
    <div>
        <p>disini ada error</p>
        <button onClick={()=>reset()}>Coba Ulang</button> 
    </div>
  )
}
