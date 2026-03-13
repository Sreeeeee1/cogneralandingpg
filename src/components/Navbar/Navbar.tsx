"use client";

import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Problem", href: "#problem" },
        { name: "Solution", href: "#solution" },
        { name: "Use Cases", href: "#use-cases" },
    ];

    return (
        <motion.header 
            className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Cognera<span>.</span>
                </Link>

                <nav className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className={styles.link}>
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className={styles.actions}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="#login" className={styles.login}>
                            Login
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <a href="#request-pilot" className={styles.cta}>
                            Get Started
                        </a>
                    </motion.div>
                </div>
            </div>
        </motion.header>
    );
}
