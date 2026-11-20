import Image from 'next/image'
import Link from 'next/link'
import { FaLocationArrow } from "react-icons/fa";

export default function ProjectCard({ title, imageUrl, technologies, id }) {
    return (
        <div className="project-card bg-black rounded-lg overflow-hidden shadow-lg mb-0 pb-0 group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:-translate-y-2">
            {/* Image Container */}
            <div className="relative h-59 w-full">
                <Image
                    src={imageUrl || "/images/project-placeholder.jpg"}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="p-4 text-white">
                {/* Titre avec animation */}
                <h3 className="text-xl font-medium mb-3">
                    {title}
                </h3>

                <div className="flex items-center justify-between mt-7 mb-3 mr-3 ml-3">
                    {/* Technologies avec animation de rebond */}
                    <div className="flex items-center mb-4">
                        {technologies && technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center transition-all duration-300 hover:scale-125 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/50"
                                style={{
                                    transform: `translateX(-${5 * index + 2}px)`,
                                    transitionDelay: `${index * 50}ms`
                                }}
                            >
                                <Image
                                    src={tech.icon}
                                    alt="icon5"
                                    width={200}
                                    height={200}
                                    className="p-2 transition-transform duration-300 group-hover:rotate-12"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Bouton sans animation de flèche */}
                    <div className="flex justify-center items-center text-purple-400">
                        <Link
                            href={`/allprojects/${id}`}
                            className="flex lg:text-sm md:text-xs text-sm text-purple transition-colors duration-300 hover:text-purple-300"
                        >
                            View Project
                        </Link>
                        <FaLocationArrow
                            className="ms-3"
                            color="#CBACF9"
                        />
                    </div>
                </div>
            </div>

            {/* Barre lumineuse en bas au survol */}
            <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>
    )
}