import React from "react";
import "./style.scss"

interface Button {
    type: string;
    children: React.ReactNode;
}

export const Button: React.FC<Button> = (props) => {
    const { children, type } = props;

    return (
        <button className={`button-${type}-container`}>
            {children}
        </button>
    )
}