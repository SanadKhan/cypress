import React from 'react'

interface HomePageLayoutProps {
  children: React.ReactNode
}

const HomePageLayout: React.FC<HomePageLayoutProps> = ({ children }) => {
  return (
    <main>
      { children }
    </main>
  )
}

export default HomePageLayout