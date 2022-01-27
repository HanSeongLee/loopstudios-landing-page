import React from "react";
import styles from './style.module.scss';
import Container from "../Container";
import Logo from "../Logo";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <Logo />

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
