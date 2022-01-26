import React from 'react';
import styles from './style.module.scss';
import Container from "../Container";

const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <Container className={styles.container}>
                <h2 className={styles.title}>
                    Immersive experiences that deliver
                </h2>
            </Container>
        </section>
    );
};

export default HeroSection;
