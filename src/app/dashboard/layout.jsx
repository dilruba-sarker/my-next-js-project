import React from 'react';

const DashboardlLayout = ({children}) => {
    return (
        <div>
           <div className='flex h-screen flex-col md:flex-row'>
             <h1 className='md:w-64 w-full flex-none'>sidebar</h1>
            <div className='flex-grow border-2 p-6 md:p-12'>{children}</div>
            </div>
        </div>
    );
};

export default DashboardlLayout;