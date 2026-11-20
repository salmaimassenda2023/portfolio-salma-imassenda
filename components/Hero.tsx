"use client"
import Image from "next/image"
import { FaDownload, FaLocationArrow } from "react-icons/fa6"
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa"

import MagicButton from "./MagicButton"
import { Spotlight } from "./ui/Spotlight"

const SOCIALS = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/salma-imassenda/", icon: FaLinkedinIn },
    { name: "GitHub", href: "https://github.com/salmaimassenda2023", icon: FaGithub },
    { name: "Email", href: "mailto:salmaimassenda2023@gmail.com", icon: FaEnvelope },
]

const STACK = [
    { name: "Spring Boot", icon: "/spring-boot.svg" },
    { name: "Angular", icon: "/icons8-angular-24.png" },
    { name: "React", icon: "/reactjs.svg" },
    { name: "Next.js", icon: "/next-white.png" },
    { name: "Keycloak", icon: "/keyclock.png" },
]

const Hero = () => {
    return (
        <div className="pb-20 pt-40">
            {/* UI: Spotlights */}
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>

            {/* UI: grid */}
            <div
                className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
                absolute top-0 left-0 flex items-center justify-center"
            >
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
                    bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>

            {/* Une seule colonne, tout le contenu est centre */}
            <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center mt-10 px-6 text-center">
                <p className="text-base font-medium text-purple">Hello, I&apos;m</p>

                <h4 className="mt-1 text-4xl font-bold text-white md:text-5xl">
                    Salma IMASSENDA<span aria-hidden="true">👋</span>
                </h4>

                {/*<h3 className="mt-3 text-2xl font-normal leading-snug text-white md:text-3xl lg:text-4xl">*/}
                {/*    I build <span className="text-purple">digital products</span> that inspire and solve problems.*/}
                {/*</h3>*/}
                {/*<h3 className="text-2xl font-normal leading-snug text-white md:text-3xl lg:text-4xl">*/}
                {/*    that inspire and solve problems.*/}
                {/*</h3>*/}

                <h6 className="mt-3 text-xl font-normal leading-snug text-white md:text-3xl lg:text-4xl">
                    I&apos;m a <span className="text-purple">Full-Stack Java Engineer </span> building secure, scalable web applications.
                </h6>


                <div className="mt-1 flex flex-wrap items-center justify-center gap-4">
                    <a href="#projects">
                        <MagicButton
                            title="View my work"
                            icon={<FaLocationArrow />}
                            position="right"
                            otherClasses="!bg-gradient-to-r from-[#4338ca] to-[#7c3aed] border-[#7c3aed]"
                        />
                    </a>
                    <a href="/resume.pdf" download="Salma_IMASSENDA_Resume.pdf">
                        <MagicButton
                            title="Download Resume"
                            icon={<FaDownload />}
                            position="right"
                            otherClasses="px-4 py-2 text-xs"
                        />
                    </a>
                </div>

                {/* Tech stack */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                    {STACK.map((tech) => (
                        <div
                            key={tech.name}
                            className="flex items-center gap-2  bg-white/[0.04]
                px-3.5 py-1.5 transition duration-200
                hover:-translate-y-0.5  hover:bg-purple/10"
                        >
                            <Image src={tech.icon} alt={tech.name} width={18} height={18} />
                            <span className="text-sm text-white/90">{tech.name}</span>
                        </div>
                    ))}
                </div>

                {/* Separateur */}
                <div className="mt-6 h-px w-full max-w-xs bg-white/[0.08]" />

                {/* Reseaux */}
                <div className="mt-6 flex items-center justify-center gap-3">
                    {SOCIALS.map(({ name, href, icon: Icon }) => (
                        <a
                            key={name}
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                            aria-label={name}
                            title={name}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.15]
                                bg-white/[0.03] text-white/70 transition duration-200
                                hover:-translate-y-0.5 hover:border-purple/60 hover:bg-purple/10 hover:text-white"
                        >
                            <Icon className="text-base" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hero