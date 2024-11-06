'use server'
import Mood from "@/model/Mood"
import connectDB from "../db"
import { revalidatePath } from "next/cache"

const deleteMood = async(prevState: any, formData: FormData) => {
    try {
        await connectDB()
        const id = formData.get('id') as string
        if(!id){
            throw new Error("Id is required to delete the mood")
        }
        const result = await Mood.findByIdAndDelete(id)
        if(!result){
            throw new Error("Mood not found")
        }
    } catch (error) {
        console.log("Error " + error)
    }
    revalidatePath("/")
}

export default deleteMood