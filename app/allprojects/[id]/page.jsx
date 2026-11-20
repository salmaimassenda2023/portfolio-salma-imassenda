"use client"

// app/allprojects/[id]/page.jsx
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { FiGithub } from "react-icons/fi"
import { IoIosArrowBack } from "react-icons/io"
import { FaCubes, FaPlay, FaXmark, FaRegClock } from "react-icons/fa6"
import { projects } from "../../../data/index"
import { getCategoryStyle } from "../../../data/categoryStyles"

const POSITION = { top: "object-top", center: "object-center", bottom: "object-bottom" }

/* ---------- Modal (vidéo + "demo coming soon") ---------- */
function Modal({ title, onClose, wide = false, children }) {
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && onClose()
        window.addEventListener("keydown", onKey)
        const previous = document.body.style.overflow
        document.body.style.overflow = "hidden"
        return () => {
            window.removeEventListener("keydown", onKey)
            document.body.style.overflow = previous
        }
    }, [onClose])

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={title}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`w-full ${wide ? "max-w-4xl" : "max-w-md"} rounded-2xl border border-[#2A3B34] bg-[#101B17] p-5 shadow-2xl`}
            >
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-[#ECF3EF]">{title}</h3>
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="rounded-full p-2 text-[#93A69C] transition hover:bg-[#1B2723] hover:text-[#ECF3EF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#CBACF9]"
                    >
                        <FaXmark />
                    </button>
                </div>
                {children}
            </div>
        </div>
    )
}

/* Carte avec halo violet statique en haut à gauche (même esprit que le Button
   de MovingBorders, mais sans animation — plus reposant visuellement). */
function GlowCard({ borderRadius = "1.5rem", containerClassName = "", className = "", children }) {
    return (
        <div className={`relative flex overflow-hidden ${containerClassName}`} style={{ borderRadius }}>
            <div
                className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 opacity-70"
                style={{ background: "radial-gradient(circle, #CBACF9 0%, transparent 70%)" }}
                aria-hidden="true"
            />
            <div
                className={`relative w-full border border-slate-800 bg-slate-900/40 text-white backdrop-blur-xl ${className}`}
                style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
            >
                {children}
            </div>
        </div>
    )
}

/* ---------- Petits blocs réutilisables ---------- */
function Section({ title, accent, children }) {
    return (
        <GlowCard containerClassName="w-full" className="flex flex-col items-start justify-start p-6 text-left">
            <h3 className="mb-5 text-start text-xl md:text-2xl font-bold">
                {title} {accent && <span className="text-[#CBACF9]">{accent}</span>}
            </h3>
            {children}
        </GlowCard>
    )
}

function ItemGrid({ items }) {
    return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900/40 p-4 backdrop-blur-sm transition-colors hover:border-[#CBACF9]/40"
                >
                    <span className="mt-0.5 text-lg text-blue-400" aria-hidden="true">
                        {item.icon}
                    </span>
                    <div>
                        <p className="font-medium text-[#ECF3EF]">{item.name.trim()}</p>
                        <p className="mt-1 text-sm leading-[1.6] text-white-200 font-normal">{item.desc.trim()}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

/* ---------- Page ---------- */
export default function ProjectDetails({ params }) {
    const [modal, setModal] = useState(null) // null | "video" | "demo"
    const [tab, setTab] = useState("")

    // Next.js 14 : params est un objet simple (avec Next.js 15+, il faudrait utiliser use(params))
    const project = projects.find((p) => p.id === parseInt(params.id))

    if (!project) {
        return (
            <main className="relative overflow-hidden bg-black-100">
                <div className="mx-auto max-w-6xl px-5 pt-28 text-[#ECF3EF]">
                    <p className="mb-4">Project not found.</p>
                    <Link href="/#portfolio" className="text-[#CBACF9] hover:underline">
                        Back to portfolio
                    </Link>
                </div>
            </main>
        )
    }

    const { icon: CategoryIcon, color } = getCategoryStyle(project.category)
    const hasVideo = project.demo && project.videoPath

    // Onglets affichés uniquement si le projet contient ces données
    const tabs = [
        { key: "architecture", label: "Architecture", items: project.architecturePatterns },
        { key: "testing", label: "Testing & QA", items: project.testingStrategies },
        { key: "devops", label: "DevOps", items: project.devOpsFeatures },
    ].filter((t) => t.items?.length)
    const activeTab = tabs.find((t) => t.key === tab) ?? tabs[0]

    return (
        <main className="relative overflow-hidden bg-black-100">
            <div className="mx-auto max-w-6xl px-5 pb-16 pt-28 text-[#ECF3EF]">
                {modal === "video" && (
                    <Modal title="Project demo" wide onClose={() => setModal(null)}>
                        <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
                            <video controls autoPlay className="h-full w-full">
                                <source src={project.videoPath} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </Modal>
                )}
                {modal === "demo" && (
                    <Modal title="Demo coming soon" onClose={() => setModal(null)}>
                        <p className="mb-5 text-sm leading-relaxed text-[#93A69C]">
                            A live demo of this project isn&apos;t available yet. In the meantime, you can explore the
                            source code on GitHub.
                        </p>
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setModal(null)}
                                className="rounded-full border border-[#2A3B34] px-5 py-2 text-sm text-[#ECF3EF] transition hover:border-[#CBACF9]"
                            >
                                Close
                            </button>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-[#CBACF9] px-5 py-2 text-sm font-semibold text-[#1a1030] transition hover:bg-[#d9c2fb]"
                            >
                                View source code
                            </a>
                        </div>
                    </Modal>
                )}

                {/* ---------- Header ---------- */}
                <header className="mb-8">
                    <Link
                        href="/#portfolio"
                        className="mb-6 inline-flex items-center gap-1 text-sm text-[#93A69C] transition-colors hover:text-[#CBACF9]"
                    >
                        <IoIosArrowBack /> Back to portfolio
                    </Link>

                    <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="flex items-center gap-1.5 rounded-full border border-[#2A3B34] bg-[#0B1210] px-3 py-1 text-xs font-medium">
                        <CategoryIcon size={12} style={{ color }} aria-hidden="true" />
                        {project.category}
                    </span>
                        {project.highlight && (
                            <span className="flex items-center gap-1.5 rounded-full border border-[#CBACF9]/40 bg-[#CBACF9]/15 px-3 py-1 text-xs font-medium text-[#E4D5FC]">
                            <FaCubes size={12} aria-hidden="true" />
                                {project.highlight}
                        </span>
                        )}
                    </div>

                    <h1 className="text-3xl font-bold leading-tight md:text-4xl">{project.title}</h1>
                    {project.tagline && <p className="mt-3 max-w-2xl text-lg text-[#93A69C]">{project.tagline}</p>}

                    <div className="mt-6 flex flex-wrap gap-3">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-[#CBACF9] px-5 py-2.5 text-sm font-semibold text-[#1a1030] transition hover:bg-[#d9c2fb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CBACF9]"
                        >
                            <FiGithub /> Source code
                        </a>
                        <button
                            onClick={() => setModal(hasVideo ? "video" : "demo")}
                            className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CBACF9] ${
                                hasVideo
                                    ? "border-[#CBACF9] text-[#CBACF9] hover:bg-[#CBACF9]/10"
                                    : "border-[#2A3B34] text-[#93A69C] hover:border-[#93A69C]"
                            }`}
                        >
                            {hasVideo ? <FaPlay size={11} /> : <FaRegClock size={13} />}
                            {hasVideo ? "Watch demo" : "Demo coming soon"}
                        </button>
                    </div>
                </header>

                {/* ---------- Image principale ----------
                Champs optionnels dans les données :
                  heroImg: image dédiée pour cette page détail (ex: mockup laptop).
                           Si absente, on retombe sur "img" (celle utilisée aussi dans les vignettes Portfolio).
                  imgFit: "cover" (défaut) | "contain"        → "contain" pour un schéma d'architecture
                  imgPosition: "top" (défaut) | "center" | "bottom"
                             ou un nombre 0-100 pour un réglage précis
                             (0 = tout en haut, 100 = tout en bas, ex: 75 pour juste un peu de bas)
            */}
                <div className="relative mb-10 h-64 overflow-hidden rounded-2xl border border-[#1B2723] bg-[#0B1210] sm:h-80 md:h-[440px]">
                    <Image
                        src={project.heroImg || project.img}
                        alt={project.title}
                        fill
                        priority
                        unoptimized={(project.heroImg || project.img).endsWith(".gif")}
                        sizes="(min-width: 1152px) 1152px, 100vw"
                        style={
                            typeof project.imgPosition === "number"
                                ? { objectPosition: `center ${project.imgPosition}%` }
                                : undefined
                        }
                        className={
                            project.imgFit === "contain"
                                ? "bg-white object-contain p-4"
                                : `object-cover ${
                                    typeof project.imgPosition === "number"
                                        ? ""
                                        : POSITION[project.imgPosition] || POSITION.top
                                }`
                        }
                    />
                </div>

                <div className="flex flex-col gap-6">
                    {/* ---------- Overview + Tech stack, côte à côte ---------- */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
                        <GlowCard
                            containerClassName="w-full md:col-span-1"
                            className="flex flex-col items-start justify-start p-6 text-left"
                        >
                            <h3 className="mb-3 text-start text-xl md:text-2xl font-bold">Overview</h3>
                            <p className="whitespace-pre-line text-sm leading-[1.6] text-white-200 font-medium">
                                {project.overview.trim()}
                            </p>
                        </GlowCard>

                        <GlowCard
                            containerClassName="w-full md:col-span-1"
                            className="flex flex-col items-start justify-start p-6 text-left"
                        >
                            <h3 className="mb-4 text-start text-xl md:text-2xl font-bold">
                                Tech Stack <span className="text-[#CBACF9]">& Tools</span>
                            </h3>
                            <ul className="flex flex-wrap gap-3">
                                {project.technologies.map((tech) => (
                                    <li
                                        key={tech.name}
                                        className="flex items-center gap-2.5 rounded-full border border-[#2A3B34] bg-[#0B1210] py-1.5 pl-1.5 pr-4 text-sm"
                                    >
                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#101B17]">
                                        <Image src={tech.icon} alt="" width={18} height={18} />
                                    </span>
                                        {tech.name.trim()}
                                    </li>
                                ))}
                            </ul>
                        </GlowCard>
                    </div>

                    {/* ---------- Key features ---------- */}
                    {project.features?.length > 0 && (
                        <Section  title="Key Features" accent="& Highlights">
                            <ItemGrid items={project.features} />
                        </Section>
                    )}

                    {/* ---------- Architecture / Testing / DevOps ---------- */}
                    {activeTab && (
                        <Section
                            title={tabs.length === 1 ? activeTab.label : "Engineering"}
                            accent={tabs.length === 1 ? "" : "& Quality"}
                        >
                            {tabs.length > 1 && (
                                <div role="tablist" aria-label="Engineering details" className="mb-5 flex flex-wrap gap-2">
                                    {tabs.map((t) => {
                                        const selected = t.key === activeTab.key
                                        return (
                                            <button
                                                key={t.key}
                                                role="tab"
                                                aria-selected={selected}
                                                onClick={() => setTab(t.key)}
                                                className={`rounded-full border px-4 py-1.5 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#CBACF9] ${
                                                    selected
                                                        ? "border-[#CBACF9] bg-[#CBACF9]/15 text-[#E4D5FC]"
                                                        : "border-slate-700 text-[#93A69C] hover:border-slate-500 hover:text-[#ECF3EF]"
                                                }`}
                                            >
                                                {t.label}
                                            </button>
                                        )
                                    })}
                                </div>
                            )}
                            <div role="tabpanel">
                                <ItemGrid items={activeTab.items} />
                            </div>
                        </Section>
                    )}
                </div>
            </div>
        </main>
    )
}