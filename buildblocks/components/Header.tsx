import React from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const Header = ({children, className}: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="md:flex-1">Documents</Link>
      {children}
    </div>
  )
}

export default Header