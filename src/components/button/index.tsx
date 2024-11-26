import React from "react";
import "./style.scss"
import { useNavigate } from "react-router-dom";

interface ButtonProps {
    type: string;
    children: React.ReactNode;
    disabled?: boolean;
    url?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>)=>void;
}

export const Button: React.FC<ButtonProps> = (props) => {
    const { children, type, disabled = false, url = null, onClick = null } = props;
    const navigate = useNavigate();

    return (
        <button
            className={`button-${type}-container`}
            disabled={disabled}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                if (url != null) {
                    navigate(url);
                }
                if (onClick != null) {
                    onClick(event);
                }
            }}
        >
            {children}
        </button>
    )
}