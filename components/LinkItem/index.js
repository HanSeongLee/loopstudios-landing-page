import React from "react";
import Link from "next/link";

const LinkItem = ({ href, children, external=false }) => {
    return (
        <li>
            {!external ? (
                <Link href={href}>
                    <a>
                        {children}
                    </a>
                </Link>
            ): (
                <a href={href}
                   target={'_blank'}
                >
                    {children}
                </a>
            )}
        </li>
    );
};

export default LinkItem;
