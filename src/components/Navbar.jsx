import { Link } from "react-router-dom"
export default function Navbar() {
    return(
        <div className="w-full text-center py-5 flex justify-center">
            <div className="w-3/4 flex justify-center">
                <Link className="font-bold link-item w-full flex justify-center" to="/">Home</Link>
                <Link className="font-bold link-item w-full flex justify-center" to="/Projects">Projects</Link>
                <Link className="font-bold link-item w-full flex justify-center" to="/Resume">Resume</Link>
                <Link className="font-bold link-item w-full flex justify-center" to="/Contact">Contact</Link>
            </div>
        </div>
    )
}