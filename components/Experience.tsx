"use client"
import React, { useState } from "react"

import { workExperience } from "@/data"
import { Button } from "./ui/MovingBorders"
import { FaRegStar, FaAward } from "react-icons/fa6"
import { FiChevronDown } from "react-icons/fi"

const Experience = () => {
    // Garde en mémoire quelle(s) carte(s) sont ouvertes, par id
    const [expandedIds, setExpandedIds] = useState({})

    const toggleCard = (id) => {
        setExpandedIds((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }

    return (
        <div className="w-full py-20">
            <button className="mb-7 flex items-center gap-2 rounded-full border border-[#2A3B34] px-4 py-1.5 font-mono text-sm text-[#93A69C] transition hover:border-[#F2A93B] hover:text-[#F2A93B]">
                <FaRegStar size={14} className="text-[#F2A93B]" />
                Experience
            </button>

            <h1 className="heading">
                My <span className="text-purple">work experience</span>
            </h1>

            <div className="mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-2">
                {workExperience.map((card) => {
                    const isOpen = !!expandedIds[card.id]

                    return (
                        <Button
                            key={card.id}
                            as="div"
                            duration={Math.floor(Math.random() * 10000) + 10000}
                            borderRadius="1.75rem"
                            containerClassName="md:col-span-1"
                            style={{
                                background: "rgb(4,7,29)",
                                backgroundColor:
                                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                                borderRadius: `calc(1.75rem * 0.96)`,
                            }}
                            className="flex-1 items-start justify-start border-neutral-200 text-black dark:border-slate-800 dark:text-white"
                        >
                            <div className="flex w-full flex-col gap-4 p-5 text-left md:p-8">
                                {/* En-tête : logo + rôle + entreprise + dates + lieu */}
                                <div className="flex items-start gap-4">
                                    <img
                                        src={card.thumbnail}
                                        alt={card.company}
                                        className="h-12 w-12 shrink-0 rounded-lg object-cover md:h-14 md:w-14"
                                    />
                                    <div>
                                        <h1 className="text-lg font-bold md:text-xl">{card.role}</h1>
                                        <p className="text-sm text-[#93A69C]">
                                            {card.company}
                                            {card.type && ` · ${card.type}`}
                                        </p>
                                        {card.period && (
                                            <p className="mt-1 font-mono text-xs text-[#6B7B75]">{card.period}</p>
                                        )}
                                        {card.location && (
                                            <p className="font-mono text-xs text-[#6B7B75]">{card.location}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Résumé — toujours visible */}
                                {card.summary && (
                                    <p className="text-sm font-semibold leading-relaxed">{card.summary}</p>
                                )}

                                {/* Aperçu des skills — visible uniquement quand la carte est fermée */}
                                {!isOpen && card.skills?.length > 0 && (
                                    <div className="flex items-center gap-2 text-sm">
                                        <FaAward className="shrink-0 text-[#CBACF9]" aria-hidden="true" />
                                        <span className="text-[#93A69C]">
                                            {card.skills.slice(0, 2).join(", ")}
                                            {card.skills.length > 2 && ` and +${card.skills.length - 2} skills`}
                                        </span>
                                    </div>
                                )}

                                {/* Contenu détaillé — animé, replié par défaut */}
                                <div
                                    className="grid overflow-hidden transition-all duration-500 ease-in-out"
                                    style={{
                                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                                        opacity: isOpen ? 1 : 0,
                                    }}
                                >
                                    <div className="min-h-0">
                                        {card.bullets?.length > 0 && (
                                            <ul className="mt-1 space-y-1.5 pb-1">
                                                {card.bullets.map((point, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex gap-2 text-sm leading-relaxed text-[#B4C4BB]"
                                                    >
                                                        <span className="text-[#CBACF9]">•</span>
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {card.skills?.length > 0 && (
                                            <div className="flex items-center gap-2 border-t border-slate-800 pt-4 text-sm">
                                                <FaAward className="shrink-0 text-[#CBACF9]" aria-hidden="true" />
                                                <span className="text-[#93A69C]">
                                                    {card.skills.join(", ")}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Bouton toggle — discret, cohérent avec le design */}
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        toggleCard(card.id)
                                    }}
                                    aria-expanded={isOpen}
                                    className="group mt-1 flex w-fit items-center gap-1.5 rounded-full border border-[#2A3B34] px-3 py-1 font-mono text-xs text-[#93A69C] transition hover:border-[#CBACF9] hover:text-[#CBACF9]"
                                >
                                    {isOpen ? "Show less" : "Show more"}
                                    <FiChevronDown
                                        size={14}
                                        className={`transition-transform duration-300 ${
                                            isOpen ? "rotate-180" : "rotate-0"
                                        }`}
                                    />
                                </button>
                            </div>
                        </Button>
                    )
                })}
            </div>
        </div>
    )
}

export default Experience