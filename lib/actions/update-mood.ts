'use server'
import Mood from "@/model/Mood"
import connectDB from "../db"
import {z} from "zod"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const MoodSchema = z.object({
    note: z.string().min(2, "Note must be 2 characters long"),
    mood: z.string().min(1, "Mood cannot be empty")
})

export const updateMood = async (prevState: any, formData: FormData) => {
    const validatedFields = MoodSchema.safeParse(
        Object.fromEntries(formData.entries())
    )
    if(!validatedFields.success){
        return {
            Error: validatedFields.error.flatten().fieldErrors,
        }
    }
    await connectDB()
    try {
        const note = formData.get('note') as string;
        const mood = formData.get('mood') as string;
        const id = formData.get('_id') as string;
        await Mood.updateOne({_id: id}, {note, mood})
    } catch (error) {
        console.log("Error " + error)
    }
    revalidatePath("/")
    redirect("/")
}