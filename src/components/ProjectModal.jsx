import { useState } from "react"
import { Link } from "react-router-dom"
export default function ProjectModal({imageUrl, title, content, name}) {
    const [linkTo] = useState(`/Projects/${name}`)
    return (
        <Link to={linkTo} className="h-full">
            <div className="h-full grid grid-rows-auto-1 shadow-md shadow-gray-500 rounded-xl">
                <div className="flex justify-center items-center">
                    <img className="rounded-t-xl w-full h-full object-cover" src={imageUrl} alt="Image" />
                </div>
                <div className="flex flex-col text-black bg-white p-2 rounded-b-xl">
                    <div className="font-bold text-3xl">{title}</div>
                    <div className="w-full h-0.5"></div>
                    <div>{content}</div>
                </div>
            </div>
        </Link>

    )

}