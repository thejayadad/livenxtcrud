'use client'
import React,  {useState} from "react"
import {FiEdit} from "react-icons/fi"
import SideDrawer from "./side-drawer"
import { MoodForm } from "./mood-form"


interface UpdateBtnProps {
    mood: {_id: string; note: string; mood: string }
}

const UpdateBtn: React.FC<UpdateBtnProps> = ({mood}) => {
    const [isDrawerOpen, setDrawerOpen] = useState(false)

    const toggleDrawer = () => {
        setDrawerOpen((prev) => !prev)
    }
    const closeDrawer = () => {
        setDrawerOpen(false)
    }
    return (
        <div>
            <button
            onClick={toggleDrawer}
            >
                <FiEdit className="h-4 w-4 text-purple-500 hover:text-purple-700" />
            </button>
            <SideDrawer
            isOpen={isDrawerOpen}
            onClose={closeDrawer}
            >
                <MoodForm mood={mood} isEdit={true} />
            </SideDrawer>
        </div>
    )
}

export default UpdateBtn