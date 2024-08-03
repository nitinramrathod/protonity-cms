import { auth } from '@/auth';
import Navigation from '@/components/website/navigation/Navigation'
import { SessionProvider } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react'

const WebsiteLayout = async ({ children, session }) => {

    return (

        <SessionProvider session={session}>
            <Navigation />
            {children}
        </SessionProvider>
    )
}

export default WebsiteLayout