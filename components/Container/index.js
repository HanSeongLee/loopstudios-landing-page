import React from "react";
import styles from './style.module.scss';
import cn from 'classnames';

const Container = ({ children, className, ...props }) => {
    return (
        <div {...props}
             className={cn(styles.container, className)}
        >
            {children}
        </div>
    );
};

export default Container;
