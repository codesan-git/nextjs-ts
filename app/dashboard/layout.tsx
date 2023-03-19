import React from 'react'

export default function Layout({children}:{children:React.ReactNode}) {
  return (
    <div>
        <p>ini layout dashboard</p>
        {children}
    </div>
  )
}
