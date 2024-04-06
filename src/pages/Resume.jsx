
import Navbar from "../components/Navbar"
export default function Resume() {
    return(
        <div className="w-full">
        <Navbar />
            <iframe src="/images/resume.pdf" type="application/pdf" className="w-full h-screen" />
        </div>
    )
}