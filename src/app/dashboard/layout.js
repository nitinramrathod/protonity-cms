import { MainWrapper } from '@/components/common/DashboardLayout'
import Sidebar from '@/components/Navbar/Sidebar'
import TopBar from '@/components/Navbar/TopBar'
import React from 'react'

const Dashboard = ({ children }) => {
    return (<>

        <MainWrapper>
        <TopBar />
            <div className="sidebar-main-wrapper">

            <Sidebar className='sidebar' />
            <div className="main-content">
                {children}
            </div>
            </div>
        </MainWrapper>
    </>
    )
}

export default Dashboard