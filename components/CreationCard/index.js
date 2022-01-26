import React from "react";
import styles from './style.module.scss';

const CreationCard = ({ src, title }) => {
    return (
        <div className={styles.creationCard}>
            <img className={styles.image}
                 src={src}
                 alt={title}
            />
            <div className={styles.title}>
                {title}
            </div>
        </div>
    );
};

export default CreationCard;
