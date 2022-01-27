import React from "react";
import Link from "next/link";

const LinkItem = ({ name, href, children, external=false }) => {
    return (
        <li>
            {!external ? (
                <Link href={href}>
                    <a aria-label={name}>
                        {children}
                    </a>
                </Link>
            ): (
                <a href={href}
                   target={'_blank'}
                   aria-label={name}
                >
                    {children}
                </a>
            )}
        </li>
    );
};

export default LinkItem;
