import Header from '@/components/landing-page/header'
import React from 'react'

interface HomePageLayoutProps {
  children: React.ReactNode
}

const HomePageLayout: React.FC<HomePageLayoutProps> = ({ children }) => {
  return (
    <main>
      <Header />
      { children }
    </main>
  )
}

export default HomePageLayout