import "./styles.scss"
import IconUsers from "../../assets/icon/ana-users.svg"
import IconActive from "../../assets/icon/ana-active.svg"
import IconLoans from "../../assets/icon/ana-loans.svg"
import IconSavings from "../../assets/icon/ana-savings.svg"

export const Users = () => {
    return (
        <div className="users-page-container">
            <p className="users-page-heading">Users</p>
            <div className="users-page-analytic">
                <div className="analytic"><img src={IconUsers}/><p>USERS</p><h6>2,453</h6></div>
                <div className="analytic"><img src={IconActive}/><p>ACTIVE USERS</p><h6>2,453</h6></div>
                <div className="analytic"><img src={IconLoans}/><p>USERS WITH LOANS</p><h6>12,453</h6></div>
                <div className="analytic"><img src={IconSavings}/><p>USERS WITH SAVINGS</p><h6>102,453</h6></div>
            </div>
            <table className="users-page-userlist">
                <thead>
                    <tr>
                        <th>ORGANIZATION</th>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                        <th>PHONE NUMBER</th>
                        <th>DATE JOINED</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Lendsqr</td>
                        <td>Adedeji</td>
                        <td>adedeji@lendsqr.com</td>
                        <td>08078903721</td>
                        <td>May 15, 2020 10:10 AM</td>
                        <td>Inactive</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}