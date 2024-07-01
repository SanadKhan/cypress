import React from 'react'

type AuthTemplateProps = {
    children: React.ReactNode
}

const AuthTemplate: React.FC<AuthTemplateProps> = ({
    children
}) => {
  return (
    <div className='h-screen flex justify-center p-6 '>{children}</div>
  )
}

export default AuthTemplate