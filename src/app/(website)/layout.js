import Navigation from '@/components/website/navigation/Navigation'
import React from 'react'

const WebsiteLayout = ({ children }) => {
    return (<>

        <Navigation />

        {children}
    </>)
}

export default WebsiteLayout