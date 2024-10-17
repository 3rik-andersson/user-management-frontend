import React from "react";
import "./style.scss"

interface LinkProps {
    type: string;
    children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = (props) => {
    const { children, type } = props;

    return (
        <button className={`link-${type}-container`} role="">
            {children}
        </button>
    )
}