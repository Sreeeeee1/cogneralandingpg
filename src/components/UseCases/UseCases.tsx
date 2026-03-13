"use client";

import React, { useState } from 'react';
import styles from './UseCases.module.css';
import { Target, TrendingUp, Users, ChevronLeft, ChevronRight, Briefcase, GraduationCap, HeartPulse, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function UseCases() {
    const [activeIndex, setActiveIndex] = useState(0);

    const useCases = [
        {
            id: 'enterprise',
            role: "Enterprise",
            icon: <Briefcase size={24} />,
            benefits: [
                "Understand cross-app user journeys",
                "Identify drop-off points outside your ecosystem",
                "Prioritize roadmap based on holistic behavior"
            ]
        },
        {
            id: 'edtech',
            role: "EdTech",
            icon: <GraduationCap size={24} />,
            benefits: [
                "Track student engagement across platforms",
                "Optimize learning paths with behavioral data",
                "Identify friction in educational workflows"
            ]
        },
        {
            id: 'healthcare',
            role: "Healthcare",
            icon: <HeartPulse size={24} />,
            benefits: [
                "Securely analyze patient digital interactions",
                "Improve telemedicine adoption rates",
                "Streamline healthcare portal navigation"
            ]
        },
        {
            id: 'platforms',
            role: "Digital Platforms",
            icon: <Globe size={24} />,
            benefits: [
                "Analyze creator-to-consumer flows",
                "Understand marketplace bridge behaviors",
                "Optimize global ecosystem interactions"
            ]
        }
    ];

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % useCases.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + useCases.length) % useCases.length);
    };

    return (
        <section className={styles.useCasesSection} id="use-cases">
            <div className={styles.blob} />
            <div className={styles.container}>
                <motion.div 
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.title}>Who Uses Cognera?</h2>
                    <p className={styles.subtitle}>
                        Empowering digital teams across industries with unprecedented visibility.
                    </p>
                </motion.div>

                <div className={styles.carouselContainer}>
                    <button className={styles.navBtn} onClick={prevSlide} aria-label="Previous slide">
                        <ChevronLeft size={24} />
                    </button>

                    <div className={styles.carouselTrack}>
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={activeIndex}
                                className={styles.card}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                whileHover={{ y: -5 }}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconWrapper}>
                                        {useCases[activeIndex].icon}
                                    </div>
                                    <h3 className={styles.roleTitle}>{useCases[activeIndex].role}</h3>
                                </div>
                                <ul className={styles.benefitList}>
                                    {useCases[activeIndex].benefits.map((benefit, index) => (
                                        <li key={index} className={styles.benefitItem}>
                                            <span className={styles.checkMark}>✓</span>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button className={styles.navBtn} onClick={nextSlide} aria-label="Next slide">
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className={styles.indicators}>
                    {useCases.map((_, index) => (
                        <div 
                            key={index} 
                            className={`${styles.indicator} ${index === activeIndex ? styles.activeIndicator : ''}`}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
