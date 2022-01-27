import React from "react";
import styles from './style.module.scss';
import Logo from "../Logo";
import FacebookIcon from '/public/icons/icon-facebook.svg';
import TwitterIcon from '/public/icons/icon-twitter.svg';
import PinterestIcon from '/public/icons/icon-pinterest.svg';
import InstagramIcon from '/public/icons/icon-instagram.svg';
import Container from "../Container";
import LinkItem from "../LinkItem";

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

const socialLinks = [
    {
        name: 'Facebook',
        href: '#',
        icon: (<FacebookIcon />),
    },
    {
        name: 'Twitter',
        href: '#',
        icon: (<TwitterIcon />),
    },
    {
        name: 'Pinterest',
        href: '#',
        icon: (<PinterestIcon />),
    },
    {
        name: 'Instagram',
        href: '#',
        icon: (<InstagramIcon />),
    },
];

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container className={styles.container}>
                <div className={styles.logoWrapper}>
                    <Logo/>
                </div>

                <ul className={styles.sitemapList}>
                    {sitemap?.map(({name, ...link}, index) => (
                        <LinkItem {...link}
                                  key={index}
                        >
                            {name}
                        </LinkItem>
                    ))}
                </ul>

                <div className={styles.socialListWrapper}>
                    <ul className={styles.socialList}>
                        {socialLinks?.map(({icon, socialLink}, index) => (
                            <LinkItem {...socialLink}
                                      key={index}
                                      external
                            >
                                {icon}
                            </LinkItem>
                        ))}
                    </ul>
                </div>

                <p className={styles.copyright}>
                    © 2021 Loopstudios. All rights reserved.
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
