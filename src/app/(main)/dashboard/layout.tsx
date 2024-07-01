import React from 'react'

interface LayoutProps {
    children: React.ReactNode,
    params: any;
}

const Layout: React.FC<LayoutProps> = ({
    children,
    params
}) => {
  return (
    <main className='h-screen flex over-hidden'>{children}</main>
  )
}

export default Layout