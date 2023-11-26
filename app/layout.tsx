import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import {Inter,Space,Grotes} from 'next/font'

export const metadata = {
  title:"DevFlow",
  description:"DevFlow is a platform for developers to share their knowledge and connect with other developers.",
  icons:{
    icon:'/assets/images/site-logo.svg',
  }
}


export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
