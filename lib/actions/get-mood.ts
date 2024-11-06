'use server'
import Mood from "@/model/Mood"
import connectDB from "../db"

export const getMoods = async ()=> {
    try {
        await connectDB()
        const moods = await Mood.find({})
        return JSON.parse(JSON.stringify(moods))
    } catch (error) {
        console.log("Error getting moods " + error)
        return []
    }
}