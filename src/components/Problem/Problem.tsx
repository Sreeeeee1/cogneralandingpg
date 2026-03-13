"use client";

import React from 'react';
import styles from './Problem.module.css';
import { ArrowRightLeft, EyeOff, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Problem() {
    const problems = [
        {
            id: 1,
            icon: <ArrowRightLeft size={28} />,
            title: "Complex User Journeys",
            description: "Frequent Stay – Switch – Return (SSR) behavior across applications is difficult to understand with standard tools."
        },
        {
            id: 2,
            icon: <EyeOff size={28} />,
            title: "Missing Context",
            description: "Organizations lack visibility into real digital behavior outside their own ecosystems. You only see half the story."
        },
        {
            id: 3,
            icon: <BarChart2 size={28} />,
            title: "Limited Analytics",
            description: "Most analytics tools only track in-app activity, completely missing the crucial cross-application transition points."
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" } as any
        }
    };

    return (
        <section className={styles.problemSection} id="problem">
            <div className={styles.blob} />
            <div className={styles.container}>
                <motion.div 
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.title}>The Analytics Blindspot</h2>
                    <p className={styles.subtitle}>
                        Traditional tools only tell half the story. The rest happens where you aren't looking. Cognera bridges the gap.
                    </p>
                </motion.div>

                <motion.div 
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {problems.map((problem) => (
                        <motion.div 
                            key={problem.id} 
                            className={styles.card}
                            variants={itemVariants}
                            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                        >
                            <div className={styles.iconWrapper}>
                                {problem.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{problem.title}</h3>
                            <p className={styles.cardDesc}>{problem.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
