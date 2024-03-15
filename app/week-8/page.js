"use client"

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
 
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

if (user==null){
    return (
        <main className=" bg-black text-4xl h-screen">
            <h1 className=" text-white ml-4
            pt-4">Shopping List App</h1>
            <div className="flex ml-16">        
            <button className='m-4 p-3  focus:bg-blue-300 bg-white font-extrabold text-xl rounded' onClick={gitHubSignIn}>Sign In To GitHub</button>
            </div>

        </main>
            );   
}
        else {
            return (
                <main className=" bg-black text-white h-screen">
                <h1 className=" text-4xl ml-4">Shopping List App</h1> 
                    <div className=" ml-4 pt-4">
                    <p className="text-lg ">Welcome, {user.displayName} ({user.email})</p>
                    <Link href="week-8/shopping-list">Click Here To See Shopping List</Link>
                    </div>

                    <div className="flex ml-12">
                        <button className='m-4 p-3 focus:bg-blue-300 bg-white font-extrabold text-xl text-black rounded' onClick={firebaseSignOut}>Sign Out of GitHub</button>     
                    </div>
                </main>
            );
        }
}
