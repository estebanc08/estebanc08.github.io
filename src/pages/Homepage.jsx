import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

export default function Homepage() {
    return (
        <div className="h-screen">
        <Navbar />
        <div className="w-full h-full px-10">
            <div className="w-full h-full flex justify-center items-center mb-10">
                <div className="w-10/12">
                    <div className="text-white text-7xl font-bold">
                        Esteban Calvo
                        <div className="h-1 w-full bg-gray-600 my-4"></div>
                    </div>
                    <div className="text-white text-4xl font-semibold">
                        Computer Science Student at University of Florida
                    </div>
                </div>
            </div>
            <div>
                <div className="w-full text-3xl text-center">
                    About Me
                </div>
                <div className="mt-5">
                    My name is Esteban Calvo and I am a senior studying Computer Science at the University of Florida. I am very passionate about coding and have really enjoyed branching out and learning new things in my last years of college. 
                    Most of my college experience, I have spent my time getting good at using languages like C++ and Java to make fun projects that push me to grow. Recently, I have started to push myself to learn web development and have practiced 
                    by creating sites like this. In my free time, I enjoy playing disc golf, traveling, and coding fun projects.
                </div>
                <div className="text-center text-xl my-5">Travels</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <img src="/images/trip1.jpg"></img>
                <img src="/images/trip2.jpg"></img>
                <img src="/images/trip3.jpg"></img>
                </div>
            </div>
            </div>
        </div>
    )
}