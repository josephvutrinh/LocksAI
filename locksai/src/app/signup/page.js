import Link from "next/link";

export default function SignUp() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-center text-white text-4xl font-bold">LocksAI</h1>
            <nav className="flex gap-4 justify-center p-4">
                <div className="relative">
                    <Link href="/login" className="hover:opacity-75 p-5 mr-10 font-bold text-xl">Login</Link>
                    <Link href="/signup" className="hover:opacity-75 p-5 ml-10 font-bold text-xl">Sign Up</Link>
                    <div className="w-1/2 h-0.5 bg-white"></div>
                </div>
            </nav>
            <div>
                <div>
                    <input type="text" placeholder="Username" className="rounded-2xl p-5 m-2 w-96 h-10 bg-gray" />
                </div>
                <div>
                    <input type="email" placeholder="Email" className="rounded-2xl p-5 m-2 w-96 h-10 bg-gray" />
                </div>
                <div>
                    <input type="password" placeholder="Password" className="rounded-2xl p-5 m-2 w-96 h-10 bg-gray"/>
                </div>
                <div>
                    <input type="password" placeholder="Confirm Password" className="rounded-2xl p-5 m-2 w-96 h-10 bg-gray"/>
                </div>
            </div>
            <button className="bg-green text-white rounded-xl m-5 w-56 h-10">Login</button>
        </div>
    )
}