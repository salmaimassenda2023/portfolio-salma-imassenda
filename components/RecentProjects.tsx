"use client"
import { useRef, useState } from "react"
import type { MouseEvent, CSSProperties } from "react"
import Link from "next/link"
import { FaLocationArrow, FaRegStar, FaCubes } from "react-icons/fa6"
import { projects } from "@/data"
import { getCategoryStyle } from "@/data/categoryStyles"

type Technology = {
    name: string
    icon: string
}

type Project = {
    id: string | number
    title: string
    tagline: string
    img: string
    category: string
    highlight?: string
    technologies?: Technology[]
}

function CategoryBadge({
                           category,
                           highlight,
                       }: {
    category: string
    highlight?: string
}) {
    const { icon: Icon, color } = getCategoryStyle(category)
    return (
        <div className="absolute left-3 top-3 z-10 flex flex-wrap items-center gap-1.5">
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-[#0B1210]/75 px-2.5 py-1 text-xs font-medium text-[#ECF3EF] backdrop-blur-md">
                <Icon size={11} style={{ color }} aria-hidden="true" />
                {category}
            </span>
            {highlight && (
                <span className="flex items-center gap-1.5 rounded-full border border-[#CBACF9]/40 bg-[#CBACF9]/15 px-2.5 py-1 text-xs font-medium text-[#E4D5FC] backdrop-blur-md">
                    <FaCubes size={11} aria-hidden="true" />
                    {highlight}
                </span>
            )}
        </div>
    )
}

function ProjectPin({ item }: { item: Project }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const [style, setStyle] = useState<CSSProperties>({})

    const handleMove = (e: MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current
        if (!card) return
        const rect = card.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        setStyle({
            transform: `perspective(900px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`,
        })
    }

    const handleLeave = () =>
        setStyle({ transform: "perspective(900px) rotateX(0) rotateY(0)" })

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={style}
            className="group relative flex flex-col rounded-2xl border border-[#1B2723] bg-[#101B17] p-5 transition-transform duration-300 ease-out hover:border-[#2A3B34]"
        >
            <div className="relative mb-5 h-48 overflow-hidden rounded-xl border border-[#1B2723] bg-[#0B1210]">
                <CategoryBadge category={item.category} highlight={item.highlight} />
                <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
            </div>

            <h3 className="mb-1 line-clamp-1 text-lg font-semibold text-[#ECF3EF]">{item.title}</h3>
            <p className="mb-6 line-clamp-2 text-sm text-[#93A69C]">{item.tagline}</p>

            <div className="mt-auto flex items-center justify-between gap-3">
                <div className="flex items-center">
                    {(item.technologies || []).map((tech, index) => (
                        <div
                            key={tech.name}
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#2A3B34] bg-[#0B1210]"
                            style={{ transform: `translateX(-${5 * index}px)` }}
                        >
                            <img src={tech.icon} alt={tech.name} className="h-4 w-4" />
                        </div>
                    ))}
                </div>

                <div className="flex shrink-0 items-center justify-center text-purple-400">
                    <Link
                        href={`/allprojects/${item.id}`}
                        className="flex whitespace-nowrap text-sm text-purple transition-colors duration-300 hover:text-purple-300 lg:text-sm md:text-xs"
                    >
                        View Project
                    </Link>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
            </div>
        </div>
    )
}

export default function Portfolio() {
    return (
        <div className="m-5" id="projects">
            <button className="mb-7 flex items-center gap-2 rounded-full border border-[#2A3B34] px-4 py-1.5 font-mono text-sm text-[#93A69C] transition hover:border-[#F2A93B] hover:text-[#F2A93B]">
                <FaRegStar size={14} className="text-[#F2A93B]" />
                Portfolio
            </button>

            <h1 className="heading mb-3">
                Featured
                <span className="text-purple"> Projects</span>
            </h1>

            <div className="mt-5 grid grid-cols-1 gap-8 pt-5 sm:grid-cols-2 lg:grid-cols-3">
                {(projects as Project[]).map((item) => (
                    <ProjectPin key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}