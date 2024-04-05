import Navbar from "../components/Navbar"
import ProjectModal from "../components/ProjectModal"
import { SFMLProjects, DynaCV, UFCompass } from "../static/ProjectModalText"
export default function Projects() {
    return(
        <>
            <Navbar/>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 p-10 gap-5">
                <ProjectModal imageUrl={SFMLProjects.imageUrl} title={SFMLProjects.title} content={SFMLProjects.content} name={SFMLProjects.name}/>
                <ProjectModal imageUrl={DynaCV.imageUrl} title={DynaCV.title} content={DynaCV.content} name={DynaCV.name}/>
                <ProjectModal imageUrl={UFCompass.imageUrl} title={UFCompass.title} content={UFCompass.content} name={UFCompass.name}/>
            </div>
        </>
    )
}