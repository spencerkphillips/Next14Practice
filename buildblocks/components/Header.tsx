import React from 'react'
import Link from 'next/link'

const Header = ({children}: HeaderProps) => {
  return (
    <div className="header">
      <Link href="/" className="md:flex-1">Documents</Link>
      {children}
    </div>
  )
}

export default Header