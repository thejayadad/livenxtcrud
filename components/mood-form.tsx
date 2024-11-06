import { useActionState } from "react";
import { postMood } from "@/lib/actions/post-mood";
import { SubmitButton } from "./submit-button";
import { updateMood } from "@/lib/actions/update-mood";

interface MoodFormProps {
    mood?: {_id: string, note: string, mood: string};
    isEdit?: boolean
}
export function MoodForm({mood, isEdit = false}: MoodFormProps){
    const [state, formAction] = useActionState(isEdit ? updateMood : postMood, null)
    return (
        <div>
            <form
            action={formAction}
            >
                <input type="hidden" name="_id" value={isEdit ? mood?._id: ''} />
                <label htmlFor="note" className="block text-sm font-medium text-gray-900">
                    Add Note
                </label>
                <input 
                    type="text"
                    name="note"
                    id="note"
                    defaultValue={isEdit ? mood?.note : ""}
                    className="bg-gray-50 border-black text-gray-900 text-sm rounded-sm w-full p-2"
                />
                <div id="note-error" aria-label="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.Error?.note}</p>
                </div>
                <label htmlFor="mood" className="block text-sm font-medium text-gray-900">
                    Select Mood
                </label>
                <select
                name="mood"
                id="mood"
                defaultValue={isEdit ? mood?.mood: "happy"}
                className="bg-gray-50 border-black text-sm rounded-sm w-full p-2"
                >
                    <option value="happy">Happy 😊</option>
                    <option value="sad">Sad 😢</option>
                    <option value="angry">Angry 😠</option>
                    <option value="indifferent">Indifferent 😐</option>
                    <option value="scared">Scared 😱</option>
                </select>
                <div id="mood-error" aria-label="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.Error?.mood}</p>
                </div>
                <SubmitButton label={isEdit ? "Update Mood": "Add Mood"} />
            </form>
        </div>
    )
}