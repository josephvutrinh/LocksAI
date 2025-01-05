import Profile from "./components/Profile";
import NewChat from "./components/NewChat";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="absolute top-0 right-0 p-4">
        <Link href="/settings" className="block mb-2 hover:opacity-75"><Profile/></Link>
      </div>
      <div className="absolute top-0 left-0 p-4">
        <Link href="/chat" className="block mb-2 hover:opacity-75"><NewChat/></Link>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold p-5">LocksAI</h1>
        <input type="text" placeholder="Message LocksAI" className="w-1/2 p-2 rounded-2xl h-12 p-5 bg-gray"/>
      </div>
      <footer className="text-center text-white opacity-50 text-xs p-2">LocksAI can make mistakes</footer>
    </div>
  );
}