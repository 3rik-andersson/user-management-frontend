import React from "react";
import "./style.scss"
import { useNavigate } from "react-router-dom";

interface LinkProps {
    type: string;
    children: React.ReactNode;
    url?: string;
}

export const Link: React.FC<LinkProps> = (props) => {
    const { children, type, url = null } = props;
    const navigate = useNavigate()

    return (
        <button
            className={`link-${type}-container`}
            role=""
            onClick={() => {
                if (url != null)
                    navigate(url)
            }}
        >
            {children}
        </button>
    )
}