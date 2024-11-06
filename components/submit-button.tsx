'use client'
import { useFormStatus } from "react-dom"
import clsx from "clsx"

export const SubmitButton = ({label}: {label: string}) => {
    const {pending} = useFormStatus()
    const className = clsx(
        "text-white bg-gray-800 font-medium hover:bg-gray-900 rounded-sm w-full px-55 py-3 text-center",
        {
            "opacity-50 cursor-progress": pending,
        }
    )
    return (
        <button
        type="submit"
        className={className}
        disabled={pending}
        >
            {
                label === "Add Mood" ? (
                    <span>{pending ? "Saving one moment..." : "Save"}</span>
                ) : (
                    <span>{pending ? "Updating one moment..." : "Update"}</span>

                )
            }
        </button>
    )
}