"use client"
import React, { useState } from "react"
import { FaRegStar, FaLocationArrow } from "react-icons/fa6"
import { FaEnvelope, FaPhone, FaLinkedinIn, FaGithub } from "react-icons/fa"

const EMAIL = "salmaimassenda2023@gmail.com"

// Optionnel : colle ici l'URL de ton formulaire Formspree (https://formspree.io/f/xxxx)
// pour recevoir les messages directement. Si vide, le bouton ouvre l'app mail de la personne.
const FORM_ENDPOINT = ""

const CONTACTS = [
    {
        label: "Email",
        value: EMAIL,
        href: `mailto:${EMAIL}`,
        icon: FaEnvelope,
    },
    {
        label: "Phone",
        value: "+212 636 257 191",
        href: "tel:+212636257191",
        icon: FaPhone,
    },
    {
        label: "LinkedIn",
        value: "salma-imassenda",
        href: "https://www.linkedin.com/in/salma-imassenda/",
        icon: FaLinkedinIn,
    },
    {
        label: "GitHub",
        value: "salmaimassenda2023",
        href: "https://github.com/salmaimassenda2023",
        icon: FaGithub,
    },
]

const fieldClass =
    "w-full rounded-2xl border border-white/[0.1] bg-white/[0.04] px-5 py-4 text-sm text-white placeholder:text-white/40 outline-none transition duration-200 focus:border-purple/60 focus:bg-purple/[0.06]"

const Footer = () => {
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const data = new FormData(form)
        const email = String(data.get("email") ?? "")
        const message = String(data.get("message") ?? "")

        // Sans endpoint : on ouvre l'app mail avec le message pré-rempli
        if (!FORM_ENDPOINT) {
            const subject = encodeURIComponent("Portfolio contact")
            const body = encodeURIComponent(`${message}\n\nFrom: ${email}`)
            window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
            return
        }

        try {
            setStatus("sending")
            const res = await fetch(FORM_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({ email, message }),
            })
            if (!res.ok) throw new Error("Request failed")
            setStatus("sent")
            form.reset()
        } catch {
            setStatus("error")
        }
    }

    return (
        <footer className="w-full pt-20 pb-10" id="contact">
            {/* background grid */}
            <div className="absolute -bottom-72 left-0 min-h-96 w-full">
                <img src="/footer-grid.svg" alt="" className="h-full w-full opacity-50" />
            </div>

            {/* Badge : même style que Experience et Skills */}
            <button className="relative z-10 mb-7 flex items-center gap-2 rounded-full border border-[#2A3B34] px-4 py-1.5 font-mono text-sm text-[#93A69C] transition hover:border-[#F2A93B] hover:text-[#F2A93B]">
                <FaRegStar size={14} className="text-[#F2A93B]" />
                Contact
            </button>

            <div className="relative z-10 flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Let&apos;s build something <span className="text-purple">together</span>
                </h1>
                <p className="my-5 max-w-xl text-center text-sm text-white/60 md:mt-6 md:text-base">
                    Have a project, an internship or an opportunity in mind? Send me a message and I&apos;ll get
                    back to you soon.
                </p>
            </div>

            {/* Carte contact : même traitement que le panneau Tech Stack */}
            <div
                className="relative z-10 mx-auto mt-10 w-full max-w-5xl overflow-hidden rounded-3xl border border-white/[0.1] p-5 md:p-8"
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

                <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[340px_1fr] lg:gap-10">
                    {/* Coordonnées */}
                    <div className="flex flex-col gap-3">
                        {CONTACTS.map(({ label, value, href, icon: Icon }) => {
                            const external = href.startsWith("http")
                            return (
                                <a
                                    key={label}
                                    href={href}
                                    target={external ? "_blank" : undefined}
                                    rel={external ? "noopener noreferrer" : undefined}
                                    className="group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3 transition duration-200 hover:-translate-y-0.5 hover:border-purple/50 hover:bg-purple/[0.07]"
                                >
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple/30 bg-purple/10 text-[#CBACF9]">
                                        <Icon className="text-base" />
                                    </span>
                                    <span className="min-w-0">
                                        <span className="block font-mono text-xs text-[#6B7B75]">{label}</span>
                                        <span className="block truncate text-sm font-medium text-white/80 transition-colors group-hover:text-white">
                                            {value}
                                        </span>
                                    </span>
                                </a>
                            )
                        })}
                    </div>

                    {/* Formulaire */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Your email"
                            aria-label="Your email"
                            className={fieldClass}
                        />
                        <textarea
                            name="message"
                            required
                            rows={7}
                            placeholder="Your message"
                            aria-label="Your message"
                            className={`${fieldClass} resize-none`}
                        />

                        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
                            <p
                                role="status"
                                className={`text-sm ${status === "error" ? "text-red-400" : "text-green-400"}`}
                            >
                                {status === "sent" && "Message sent. Thank you!"}
                                {status === "error" && "Something went wrong. Please try again or email me directly."}
                            </p>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="flex items-center gap-2 rounded-full border border-[#582baf] bg-[#6d28d9] px-7 py-3 text-sm font-medium text-white shadow-[0_0_20px_-4px_rgba(147,51,234,0.7)] transition duration-200 hover:bg-[#7c3aed] disabled:opacity-60"
                            >
                                {status === "sending" ? "Sending..." : "Send message"}
                                <FaLocationArrow className="text-xs" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="relative z-10 mt-16 flex flex-col items-center justify-center">
                <p className="text-sm font-light md:text-base md:font-normal">
                    Copyright © 2026 Salma Imassenda
                </p>
            </div>
        </footer>
    )
}

export default Footer