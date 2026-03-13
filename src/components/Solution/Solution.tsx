"use client";

import React from 'react';
import styles from './Solution.module.css';
import { ShieldCheck, Network, Zap, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Solution() {
    const features = [
        {
            id: 1,
            icon: <ShieldCheck size={32} />,
            title: "Privacy First by Design",
            description: "We analyze behavior without compromising user privacy. No personal identifiable information (PII) is ever tracked or stored.",
            bullets: ["GDPR & CCPA Compliant", "Zero PII Storage", "Anonymized Data Processing"]
        },
        {
            id: 2,
            icon: <Network size={32} />,
            title: "Cross-App Visibility",
            description: "Understand the full user journey. See where users come from and where they go when they leave your ecosystem.",
            bullets: ["Journey Mapping", "Exit Intent Tracking", "Ecosystem Analysis"]
        },
        {
            id: 3,
            icon: <Zap size={32} />,
            title: "Actionable Intelligence",
            description: "Transform raw behavioral data into clear, predictive insights. Make informed decisions to improve retention.",
            bullets: ["Predictive Scoring", "Retention Optimization", "Real-time Dashboards"]
        }
    ];

    return (
        <section className={styles.solutionSection} id="solution">
            <div className={styles.container}>
                <motion.div 
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.badge}>The Solution</div>
                    <h2 className={styles.title}>See the Unseen Context</h2>
                    <p className={styles.subtitle}>
                        Gain deep insights into digital behavior with our privacy-preserving intelligence engine.
                    </p>
                </motion.div>

                <div className={styles.features}>
                    {features.map((feature, index) => (
                        <div 
                            key={feature.id} 
                            className={`${styles.featureCard} ${index % 2 !== 0 ? styles.reversed : ''}`}
                        >
                            <motion.div 
                                className={styles.visualContainer}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className={styles.abstractVisual}>
                                    <div className={styles.visualCircles}>
                                        <motion.div 
                                            className={styles.circle1}
                                            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                                            transition={{ duration: 4, repeat: Infinity }}
                                        />
                                        <motion.div 
                                            className={styles.circle2}
                                            animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
                                            transition={{ duration: 5, repeat: Infinity }}
                                        />
                                    </div>
                                    <div className={styles.iconLarge}>
                                        {feature.icon}
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                className={styles.textContent}
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureDesc}>{feature.description}</p>
                                <ul className={styles.bullets}>
                                    {feature.bullets.map((bullet, bIndex) => (
                                        <motion.li 
                                            key={bIndex}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.6 + (bIndex * 0.1) }}
                                        >
                                            <CheckCircle2 size={18} className={styles.checkIcon} />
                                            {bullet}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
