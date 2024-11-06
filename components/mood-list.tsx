import React from "react";
import { getMoods } from "@/lib/actions/get-mood";
import UpdateBtn from "./update-btn";
import DeleteButton from "./delete-button";

const moodEmojis: Record<string, string> = {
    happy: '😊',
    sad: '😢',
    angry: '😠',
    indifferent: '😐',
    scared: '😱',
};
const MoodList = async ()=> {
    const moods = await getMoods()
    return(
        <div>
            {moods?.map((mood: {_id: any; mood: any; note: any}) => {
                return (
                    <div key={mood._id}
                    className="flex justify-between items-center w-full bg-white border rounded p-4 mb-4 transition-transform duration-200 hover:shadow-xl hover:bg-gray-100"
                    >
                    <div className="flex items-center">
                        <span>{moodEmojis[mood.mood] || '😊'}</span>
                        <span>{mood.note}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <UpdateBtn mood={mood} />
                        <DeleteButton id={mood._id} />
                    </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MoodList