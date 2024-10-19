import React from "react";
import "./style.scss"

interface ButtonProps {
    type: string;
    children: React.ReactNode;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
    const { children, type, disabled = false } = props;

    return (
        <button className={`button-${type}-container`} disabled={disabled}>
            {children}
        </button>
    )
}