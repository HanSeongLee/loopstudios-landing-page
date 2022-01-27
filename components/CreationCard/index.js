import React from "react";
import styles from './style.module.scss';

const CreationCard = ({ src, srcMobile, title }) => {
    return (
        <div className={styles.creationCard}>
            <picture>
                <source srcSet={src}
                        media={'(min-width: 768px)'}
                />
                <img className={styles.image}
                     src={srcMobile}
                     alt={title}
                />
            </picture>
            <div className={styles.title}>
                {title}
            </div>
        </div>
    );
};

export default CreationCard;
