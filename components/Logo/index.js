import React from "react";
import styles from './style.module.scss';
import Link from "next/link";

const Logo = () => {
    return (
        <Link href={'/'}>
            <a>
                <h1>
                    <img className={styles.logo}
                         src={'/logo.svg'}
                         alt={'loopstudios'}
                    />
                </h1>
            </a>
        </Link>
    );
};

export default Logo;
