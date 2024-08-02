import { auth } from '@/auth';
import Navigation from '@/components/website/navigation/Navigation'
import { redirect } from 'next/navigation';
import React from 'react'

const WebsiteLayout = async ({ children }) => {

    return (<>

        <Navigation />

        {children}
    </>)
}

export default WebsiteLayout