import React, {useCallback, useState} from "react";
import styles from './style.module.scss';
import Container from "../Container";
import Logo from "../Logo";
import LinkItem from "../LinkItem";
import cn from 'classnames';

const sitemap = [
    {
        name: 'About',
        href: '#',
    },
    {
        name: 'Career',
        href: '#',
    },
    {
        name: 'Events',
        href: '#',
    },
    {
        name: 'Products',
        href: '#',
    },
    {
        name: 'Support',
        href: '#',
    },
];

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const onMenuToggle = useCallback(() => {
        setOpenMenu(!openMenu);
    }, [openMenu]);

    return (
        <header className={cn(styles.header, {
            [styles.open]: openMenu,
        })}>
            <Container className={styles.container}>
                <div className={styles.logoWrapper}>
                    <Logo/>
                </div>

                <ul className={styles.menu}>
                    {sitemap?.map(({name, ...link}, index) => (
                        <LinkItem {...link}
                                  key={index}
                        >
                            {name}
                        </LinkItem>
                    ))}
                </ul>
                <button className={styles.menuButton}
                        onClick={onMenuToggle}
                >
                    {!openMenu ? (
                        <img src={'/icons/icon-hamburger.svg'}
                             alt={'menu'}
                        />
                    ) : (
                        <img src={'/icons/icon-close.svg'}
                             alt={'close'}
                        />
                    )}
                </button>
            </Container>
        </header>
    );
};

export default Header;
