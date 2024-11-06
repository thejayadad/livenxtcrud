'use server'
import connectDB from "../db"
import {z} from "zod"
import Mood from "@/model/Mood"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const MoodSchema = z.object({
    note: z.string().min(2, "Note must be 2 characters long"),
    mood: z.string().min(1, "Mood cannot be empty")
})

export const postMood = async (prevState: any, formData: FormData)=> {
    const validatedFields = MoodSchema.safeParse(
        Object.fromEntries(formData.entries())
    )
    if(!validatedFields.success){
        return {
            Error: validatedFields.error.flatten().fieldErrors,
        }
    }
    const note = formData.get('note') as string;
    const mood = formData.get('mood') as string;
    await connectDB()
    try {
        const validatedData = MoodSchema.parse({note, mood})
        const newMood = await Mood.create({
            note: validatedData.note,
            mood: validatedData.mood
        })
    } catch (error) {
        if(error  instanceof z.ZodError){
            console.error("Validation Error", error.errors)
            throw new Error("Validation failed. check the input information")
        }
        console.error("Error creating mood", error)
        throw new Error("Error creating mood. please try again")
    }
    revalidatePath("/")
    redirect("/")
    
}