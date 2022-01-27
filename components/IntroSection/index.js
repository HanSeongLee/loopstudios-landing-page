import React from 'react';
import styles from './style.module.scss';
import Container from "../Container";

const IntroSection = () => {
    return (
        <section className={styles.introSection}>
            <Container className={styles.container}>
                <picture>
                    <source srcSet={'/img/image-interactive.jpg'}
                            media={'(min-width: 768px)'}
                    />
                    <img className={styles.image}
                         src={'/img/mobile/image-interactive.jpg'}
                         alt={'interactive'}
                    />
                </picture>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        The leader in interactive VR
                    </h2>
                    <p className={styles.description}>
                        Founded in 2011, Loopstudios has been producing world-class virtual reality projects for
                        some of
                        the
                        best companies around the globe. Our award-winning creations have transformed businesses
                        through
                        digital experiences that bind to their brand.
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default IntroSection;
