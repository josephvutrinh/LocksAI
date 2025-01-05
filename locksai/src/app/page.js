import Profile from "./components/Profile";

export default function Home() {
  return (
    <div>
      <div className="absolute top-0 right-0">
        <Profile/>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold p-5">LocksAI</h1>
        <input type="text" placeholder="Message LocksAI" className="w-1/2 p-2 rounded-2xl h-12 p-5 bg-gray"/>
      </div>
    </div>
  );
}

