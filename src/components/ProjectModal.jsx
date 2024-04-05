import { useState } from "react"
import { Link } from "react-router-dom"
export default function ProjectModal({imageUrl, title, content, name}) {
    const [linkTo] = useState(`/Projects/${name}`)
    return (
        <Link to={linkTo}>
            <div className="h-full w-full shadow-md shadow-gray-500 rounded-xl">
                <div className="w-full h-4/6 flex justify-center items-center">
                    <img className="rounded-t-xl w-full h-full object-cover" src={imageUrl} />
                </div>
                <div className="h-2/6 text-black bg-white p-2 rounded-b-xl">
                    <div className="font-bold text-3xl">
                        {title}
                    </div>
                    <div className="w-full h-0.5"></div>
                    <div>
                        {content}
                    </div>
                </div>
            </div>
        </Link>
    )

}