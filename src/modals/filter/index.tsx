import React, { useRef } from "react"
import "./styles.css"
import { useOutsideAlerter } from "../../hooks/use-outside-alerter"
import { Input } from "../../components/input"
import { Button } from "../../components/button"

interface FilterProps {
    position: {
        x: number,
        y: number
    }
    onClose: () => void;
}                                                                                                                                                                                                                                                                                                                      

export const Filter: React.FC<FilterProps> = (props) => {
    const { position, onClose } = props;
    const containerRef = useRef(null);
    useOutsideAlerter(containerRef, onClose);

    return (
        <div className="modal-filter" style={{ left: position.x, top: position.y }} ref={containerRef}>
            <div className="pair">
                <h6>Organization</h6>
                <Input type="small" placeholder="Select"></Input>
            </div>
            <div className="pair">
                <h6>Username</h6>
                <Input type="small" placeholder="User"></Input>
            </div>
            <div className="pair">
                <h6>Email</h6>
                <Input type="small" placeholder="Email"></Input>
            </div>
            <div className="pair">
                <h6>Date</h6>
                <Input type="small" placeholder="Date"></Input>
            </div>
            <div className="pair">
                <h6>Phone Number</h6>
                <Input type="small" placeholder="Phone Number"></Input>
            </div>
            <div className="pair">
                <h6>Status</h6>
                <Input type="small" placeholder="Status"></Input>
            </div>
            <div className="group">
                <Button type="small">Reset</Button>
                <Button type="small">Filter</Button>
            </div>
        </div>
    )
}