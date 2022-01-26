import React from "react";

const Container = ({ children, ...props }) => {
    return (
        <div style={{
            padding: '0 24px',
        }}
             {...props}
        >
            {children}
        </div>
    );
};

export default Container;
