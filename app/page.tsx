import Header from "@/components/header";
import ActionBar from "@/components/action-bar";
import MoodList from "@/components/mood-list"
import { Suspense } from "react";
export default function Home() {
  return (
  <div>
   <div className="mx-auto max-w-screen-md w-full pp-4">
      <Header />
      <ActionBar />
      <div>
       <Suspense fallback="one moment...">
       <MoodList />
       </Suspense>
      </div>
   </div>
  </div>
  );
}
