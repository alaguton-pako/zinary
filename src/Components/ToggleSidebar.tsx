import React from 'react'
import Button from './Button'
import useUi from '../Hooks/UseUi'
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai"


export default function ToggleSidebar() {
    const { toggleSidebar, showSidebar } = useUi()
    return (
        <Button className="lg:hidden" onClick={() => toggleSidebar()} variant={'light'}>
            {showSidebar ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
        </Button>
    )
}
