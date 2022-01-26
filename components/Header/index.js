import React from "react";
import styles from './style.module.scss';
import Link from 'next/link';
import Container from "../Container";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
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

                <button className={styles.menuButton}>
                    <img src={'/icons/icon-hamburger.svg'}
                         alt={'menu'}
                    />
                </button>
            </Container>
        </header>
    );
};

export default Header;
