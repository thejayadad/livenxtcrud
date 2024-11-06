'use client'
import { FiTrash } from "react-icons/fi"
import { useActionState } from "react"
import deleteMood from "@/lib/actions/delete-moods"

interface DeleteButtonProp{
    id: string
}
const DeleteButton: React.FC<DeleteButtonProp> =({id}) => {
    const [state, formAction] = useActionState(deleteMood, null)
    return (
        <form action={formAction}>
            <input id="id" name="id" defaultValue={id} hidden />
            <button
            type="submit"
            >
                <FiTrash className="h-4 w- text-red-500" />
            </button>
        </form>
    )
}

export default DeleteButton