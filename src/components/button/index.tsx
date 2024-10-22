import React from "react";
import "./style.scss"
import { useNavigate } from "react-router-dom";

interface ButtonProps {
    type: string;
    children: React.ReactNode;
    disabled?: boolean;
    url?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
    const { children, type, disabled = false, url = null } = props;
    const navigate = useNavigate();

    return (
        <button
            className={`button-${type}-container`}
            disabled={disabled}
            onClick={() => {
                if (url != null) {
                    navigate(url);
                }
            }}
        >
            {children}
        </button>
    )
}