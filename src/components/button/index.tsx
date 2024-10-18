import React from "react";
import "./style.scss"

interface Button {
    type: string;
    children: React.ReactNode;
    disabled?: boolean;
}

export const Button: React.FC<Button> = (props) => {
    const { children, type, disabled = false } = props;

    return (
        <button className={`button-${type}-container`} disabled={disabled}>
            {children}
        </button>
    )
}