import { MainWrapper } from '@/components/common/DashboardLayout'
import Sidebar from '@/components/Navbar/Sidebar'
import React from 'react'

const Dashboard = ({ children }) => {
    return (<>
        <MainWrapper>
            <Sidebar />
            <div className="main-content">
                {children}
            </div>
        </MainWrapper>
    </>
    )
}

export default Dashboard