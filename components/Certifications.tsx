"use client"
import React from "react"

import { certifications } from "@/data"
import { FaRegStar } from "react-icons/fa6"

const Certifications = () => {
    return (
        <div className="w-full py-20" id="certifications">
            <button className="mb-7 flex items-center gap-2 rounded-full border border-[#2A3B34] px-4 py-1.5 font-mono text-sm text-[#93A69C] transition hover:border-[#F2A93B] hover:text-[#F2A93B]">
                <FaRegStar size={14} className="text-[#F2A93B]" />
                Certifications
            </button>

            <h1 className="heading">
                Verified skills <span className="text-purple">& certifications</span>
            </h1>

            <div className="mt-12 grid w-full grid-cols-1 justify-items-center gap-8 xl:grid-cols-2">
                {certifications.map((cert) => (
                    <div
                        key={cert.id}
                        className="w-full max-w-xl overflow-hidden rounded-[1.75rem] border border-slate-800 bg-[rgb(4,7,29)] transition-colors duration-300 hover:border-slate-600"
                    >
                        {/* Certificat en haut : ratio identique sur toutes les cartes */}
                        <div
                            className="relative w-full overflow-hidden"
                            style={{ aspectRatio: cert.imageRatio }}
                        >
                            <img
                                src={cert.certificateImage}
                                alt={`${cert.title} certificate`}
                                className="block h-full w-full object-cover"
                            />
                        </div>

                        {/* Bas de carte : logo + nom a gauche, date a droite */}
                        <div className="flex h-16 items-center justify-between gap-3 border-t border-slate-800 px-5 md:h-[4.5rem] md:px-8">
                            <div className="flex items-center gap-3">
                                <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full border border-[#2A3B34] bg-white md:h-10 md:w-10">
                                    <img
                                        src={cert.logo}
                                        alt={cert.provider}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <span className="text-base font-medium tracking-tight text-white">
                                    {cert.provider}
                                </span>
                            </div>

                            <p className="font-mono text-xs text-[#93A69C]">
                                Issued {cert.date}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Certifications