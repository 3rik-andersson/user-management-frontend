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
import IconFeesPricing from "../../../assets/icon/fees-pricing.svg"
import IconTransactions from "../../../assets/icon/transactions.svg"
import IconFeesChanges from "../../../assets/icon/fees-changes.svg"
import IconAuditLogs from "../../../assets/icon/audit-logs.svg"
import IconPerformances from "../../../assets/icon/performances.svg"
import IconReports from "../../../assets/icon/reports.svg"
import IconSettlement from "../../../assets/icon/settlement.svg"
import IconServiceAcount from "../../../assets/icon/service-acount.svg"
import IconServices from "../../../assets/icon/services.svg"
import IconSavingsProducts from "../../../assets/icon/savings-products.svg"
import IconOrganization from "../../../assets/icon/organization.svg"

import "./style.scss"

export const Sider = () => {
    return (
        <div className="sider-container">
            <Button type="menu-item"> <img src={IconDashboard} /> Dashboard </Button>
            <p className="sider-subheader">CUSTOMERS</p>
            <Button type="menu-item" disabled={true}>                <img src={IconUsers} /> Users </Button>
            <Button type="menu-item"> <img src={IconGuarantors} /> Guarantors </Button>
            <Button type="menu-item"> <img src={IconLoans} /> Loans </Button>
            <Button type="menu-item"> <img src={IconDecision} /> Decision Models </Button>
            <Button type="menu-item"> <img src={IconSavings} /> Savings </Button>
            <Button type="menu-item"> <img src={IconLoanRequests} /> Loan Requests </Button>
            <Button type="menu-item"> <img src={IconWhitelist} /> Whitelist </Button>
            <Button type="menu-item"> <img src={IconKarma} /> Karma </Button>
            <p className="sider-subheader">BUSINESSES</p>
            <Button type="menu-item"> <img src={IconOrganization}/> Organization </Button>
            <Button type="menu-item"> <img src={IconLoanRequests} /> Loan Products </Button>
            <Button type="menu-item"> <img src={IconSavingsProducts}/> Savings Products </Button>
            <Button type="menu-item"> <img src={IconFeesChanges}/> Fees and Changes </Button>
            <Button type="menu-item"> <img src={IconTransactions}/> Transactions </Button>
            <Button type="menu-item"> <img src={IconServices}/> Services </Button>
            <Button type="menu-item"> <img src={IconServiceAcount}/> Service Acount </Button>
            <Button type="menu-item"> <img src={IconSettlement}/> Settlements </Button>
            <Button type="menu-item"> <img src={IconReports}/> Reports </Button>
            <p className="sider-subheader">SETTINGS</p>
            <Button type="menu-item"> <img src={IconPerformances}/> Performances </Button>
            <Button type="menu-item"> <img src={IconFeesPricing}/> Fees and Pricing </Button>
            <Button type="menu-item"> <img src={IconAuditLogs}/> AuditLogs </Button>
        </div>
    )
}