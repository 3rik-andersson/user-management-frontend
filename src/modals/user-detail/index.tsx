import React, { useRef } from "react"
import "./styles.css"
import IconViewDetail from "../../assets/icon/icon-view-detail.svg"
import IconBlacklistUser from "../../assets/icon/icon-blacklist-user.png"
import IconActivateUser from "../../assets/icon/icon-activate-user.png"
import { useOutsideAlerter } from "../../hooks/use-outside-alerter"

interface UserDetailProps {
    position: {
        x: number,
        y: number
    }
    onClose: () => void;
    onViewDetail: () => void;
}

export const UserDetail: React.FC<UserDetailProps> = (props) => {
    const { position, onClose, onViewDetail } = props;
    const containerRef = useRef(null);
    useOutsideAlerter(containerRef, onClose);

    const handleViewDetailClick = () => {
        onViewDetail();
        onClose();
    }

    const handleBacklistUserClick = () => {
        onClose();
    }

    const handleActivateUserClick = () => {
        onClose();
    }

    return (
        <div className="modal-user-detail" style={{ left: position.x, top: position.y }} ref={containerRef}>
            <button className="button" onClick={handleViewDetailClick}>
                <img src={IconViewDetail} />View Details
            </button>
            <button className="button" onClick={handleBacklistUserClick}>
                <img src={IconBlacklistUser} style={{ width: 14, height: 14 }} />Blacklist User
            </button>
            <button className="button" onClick={handleActivateUserClick}>
                <img src={IconActivateUser} style={{ width: 14, height: 14 }} />Activate User
            </button>
        </div>
    )
}