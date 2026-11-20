"use client"
import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FaRegStar } from "react-icons/fa6"

import { skillsData } from "@/data"

const TechStack = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const active = skillsData[activeIndex]

    return (
        <div className="w-full py-20" id="skills">
            {/* Badge : même style que la section Experience */}
            <button className="mb-7 flex items-center gap-2 rounded-full border border-[#2A3B34] px-4 py-1.5 font-mono text-sm text-[#93A69C] transition hover:border-[#F2A93B] hover:text-[#F2A93B]">
                <FaRegStar size={14} className="text-[#F2A93B]" />
                Skills
            </button>

            <h1 className="heading">
                My <span className="text-purple">tech stack</span>
            </h1>

            {/* Filtres en haut */}
            <div className="mt-10 flex justify-center">
                <div
                    role="tablist"
                    aria-label="Skill categories"
                    className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-white/[0.1] bg-white/[0.03] p-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {skillsData.map((category, index) => {
                        const isActive = index === activeIndex

                        return (
                            <button
                                key={category.title}
                                role="tab"
                                aria-selected={isActive}
                                onClick={() => setActiveIndex(index)}
                                className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 md:px-5 ${
                                    isActive ? "text-white" : "text-white/50 hover:text-white/80"
                                }`}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="tech-active-tab"
                                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                                        className="absolute inset-0 rounded-full border border-purple/40 bg-purple/15 shadow-[0_0_24px_-6px_rgba(168,85,247,0.6)]"
                                    />
                                )}
                                <span className="relative z-10">{category.title}</span>
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Panneau des skills */}
            <div
                className="relative mx-auto mt-8 w-full max-w-5xl overflow-hidden rounded-3xl border border-white/[0.1] p-5 md:p-8"
                style={{
                    background: "linear-gradient(135deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                }}
            >
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl"
                    style={{
                        background: "radial-gradient(circle, rgba(147,51,234,0.25) 0%, transparent 70%)",
                    }}
                />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={active.title}
                        role="tabpanel"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="relative"
                    >
                        <h2 className="text-lg font-bold text-white md:text-xl">{active.title}</h2>
                        <p className="mt-1 font-mono text-xs text-[#6B7B75]">
                            {active.skills.length} {active.skills.length > 1 ? "technologies" : "technology"}
                        </p>

                        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                            {active.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3 transition duration-200 hover:-translate-y-0.5 hover:border-purple/50 hover:bg-purple/[0.07]"
                                >
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/90 p-2">
                                        <img
                                            src={skill.image}
                                            alt=""
                                            loading="lazy"
                                            className="h-full w-full object-contain"
                                        />
                                    </div>
                                    <span className="text-sm font-medium leading-tight text-white/80 transition-colors group-hover:text-white">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default TechStack