import React from "react";
import styles from './style.module.scss';
import Container from "../Container";
import CreationContainer from "../../containers/CreationContainer";

const OurCreationsSection = () => {
    return (
        <section className={styles.ourCreationsSection}>
            <Container className={styles.container}>
                <h2 className={styles.title}>
                    Our Creations
                </h2>

                <div className={styles.creationContainer}>
                    <CreationContainer/>
                </div>

                <div className={styles.seeAllButtonWrapper}>
                    <button className={styles.seeAllButton}>
                        See All
                    </button>
                </div>
            </Container>
        </section>
    );
};

export default OurCreationsSection;
