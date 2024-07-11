import useUi from '../Hooks/UseUi'
import React from 'react'

export default function Container({ children }: { children: React.ReactNode }) {
    const { minimizeSidebar } = useUi()
    return (
        <main className={`${minimizeSidebar ? 'lg:ml-20' : 'lg:ml-60'}`}>
            {children}
        </main>
    )
}
