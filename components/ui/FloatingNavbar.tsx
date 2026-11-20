"use client";
import React, { useEffect, useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaMoon, FaSun } from "react-icons/fa6";
import { cn } from "@/lib/utils";

type Theme = "dark" | "light";

export const FloatingNav = ({
                                navItems,
                                className,
                            }: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const { scrollYProgress } = useScroll();

    // set true for the initial state so that nav bar is visible in the hero section
    const [visible, setVisible] = useState(true);

    // Theme (dark par defaut, memorise dans localStorage, sans dependance externe)
    const [theme, setTheme] = useState<Theme>("dark");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        let saved: Theme = "dark";
        try {
            const stored = localStorage.getItem("theme");
            if (stored === "light" || stored === "dark") saved = stored;
        } catch {}
        setTheme(saved);
        document.documentElement.classList.toggle("dark", saved === "dark");
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        const next: Theme = theme === "dark" ? "light" : "dark";
        setTheme(next);
        document.documentElement.classList.toggle("dark", next === "dark");
        try {
            localStorage.setItem("theme", next);
        } catch {}
    };

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                // also set true for the initial state
                setVisible(true);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-8 py-3 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center gap-5",
                    className
                )}
                style={{
                    backdropFilter: "blur(16px) saturate(180%)",
                    backgroundColor: "rgba(17, 25, 40, 0.75)",
                    borderRadius: "12px",
                    border: "1px solid rgba(255, 255, 255, 0.125)",
                }}
            >
                {/* Logo : clic = retour en haut de la page */}
                <Link
                    href="#"
                    aria-label="Salma Imassenda - Home"
                    className="flex shrink-0 items-center"
                >
                    <Image
                        src="/brand.png"
                        alt="Salma Imassenda"
                        width={340}
                        height={280}
                        priority
                        className="h-10 w-auto sm:h-12"
                    />
                </Link>



                {/* Liens */}
                <div className="flex items-center gap-5">
                    {navItems.map((navItem: any, idx: number) => (
                        <Link
                            key={`link=${idx}`}
                            href={navItem.link}
                            className={cn(
                                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 transition-colors"
                            )}
                        >
                            <span className="block sm:hidden">{navItem.icon}</span>
                            <span className="hidden text-sm !cursor-pointer sm:block">
                {navItem.name}
              </span>
                        </Link>
                    ))}
                </div>




            </motion.div>
        </AnimatePresence>
    );
};