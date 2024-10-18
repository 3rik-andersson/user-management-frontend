import { Button } from "../../../components/button"
import IconDashboard from "../../../assets/icon/dashboard.svg"
import IconUsers from "../../../assets/icon/users.svg"
import IconGuarantors from "../../../assets/icon/guarantors.svg"
import IconLoans from "../../../assets/icon/loans.svg"
import IconDecision from "../../../assets/icon/decision.svg"
import IconSavings from "../../../assets/icon/savings.svg"
import IconLoanRequests from "../../../assets/icon/loan-request.svg"
import IconWhitelist from "../../../assets/icon/whitelist.svg"
import IconKarma from "../../../assets/icon/karma.svg"

import "./style.scss"

export const Sider = () => {
    return (
        <div className="sider-container">
            <Button type="menu-item">
                <img src={IconDashboard} /> Dashboard </Button>
            <p className="sider-subheader">CUSTOMERS</p>
            <Button type="menu-item" disabled={true}>
                <img src={IconUsers} /> Users </Button>
            <Button type="menu-item">
                <img src={IconGuarantors} /> Guarantors </Button>
            <Button type="menu-item">
                <img src={IconLoans} /> Loans </Button>
            <Button type="menu-item">
                <img src={IconDecision} /> Decision Models </Button>
            <Button type="menu-item">
                <img src={IconSavings} /> Savings </Button>
            <Button type="menu-item">
                <img src={IconLoanRequests} /> Loan Requests </Button>
            <Button type="menu-item">
                <img src={IconWhitelist} /> Whitelist </Button>
            <Button type="menu-item">
                <img src={IconKarma} /> Karma </Button>
        </div>
    )
}