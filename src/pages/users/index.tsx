import "./styles.scss"
import IconUsers from "../../assets/icon/ana-users.svg"
import IconActive from "../../assets/icon/ana-active.svg"
import IconLoans from "../../assets/icon/ana-loans.svg"
import IconSavings from "../../assets/icon/ana-savings.svg"
import IconDetail from "../../assets/icon/detail.svg"
import IconFilter from "../../assets/icon/filter.svg"
import { Status } from "../../components/status"
import { Button } from "../../components/button"
import { useState } from "react"
import { UserDetail as UserDetailModal } from "../../modals/user-detail"
import { useNavigate } from "react-router-dom"

export const Users = () => {

    const arr: Array<{ org: string, name: string, email: string, phone: string, date: string, status: string }> = [
        { org: "Lendsqr", name: "Adedeji", email: "adedeji@lendsqr.com", phone: "08078903721", date: "May 15, 2020 10:00 AM", status: "Inactive" },
        { org: "Irorun", name: "Debby Ogana", email: "debby2@irorun.com", phone: "08160780928", date: "Apr 30, 2020 10:00 AM", status: "Pending" },
        { org: "Lendstar", name: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", date: "Apr 30, 2020 10:00 AM", status: "Blacklisted" },
        { org: "Lendsqr", name: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "07003309226", date: "Apr 10, 2020 10:00 AM", status: "Pending" },
        { org: "Lendstar", name: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", date: "Apr 30, 2020 10:00 AM", status: "Active" },
        { org: "Lendsqr", name: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "08060780900", date: "Apr 10, 2020 10:00 AM", status: "Active" },
        { org: "Lendstar", name: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", date: "Apr 30, 2020 10:00 AM", status: "Blacklisted" },
        { org: "Lendsqr", name: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "08060780900", date: "Apr 10, 2020 10:00 AM", status: "Inactive" },
        { org: "Lendstar", name: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", date: "Apr 30, 2020 10:00 AM", status: "Inactive" },
    ]

    const [userDetailVisible, setUserDetailVisible] = useState(false);
    const [userDetailPosition, setUserDetailPosition] = useState({ x: 0, y: 0 });
    const [userDetailTarget, setUserDetailTarget] = useState(0);
    const naviagte = useNavigate();

    return (
        <div className="users-page-container">
            {userDetailVisible && (
                <UserDetailModal
                    position={userDetailPosition}
                    onClose={() => { setUserDetailVisible(false) }}
                    onViewDetail={() => { naviagte(`/users/${userDetailTarget}`) }}
                >
                </UserDetailModal>
            )}
            <p className="users-page-heading">Users</p>
            <div className="users-page-analytic">
                <div className="analytic"><img src={IconUsers} /><p>USERS</p><h6>2,453</h6></div>
                <div className="analytic"><img src={IconActive} /><p>ACTIVE USERS</p><h6>2,453</h6></div>
                <div className="analytic"><img src={IconLoans} /><p>USERS WITH LOANS</p><h6>12,453</h6></div>
                <div className="analytic"><img src={IconSavings} /><p>USERS WITH SAVINGS</p><h6>102,453</h6></div>
            </div>
            <table className="users-page-userlist">
                <thead>
                    <tr>
                        <th><div><p>ORGANIZATION</p><Button type="filter"><img src={IconFilter} /></Button></div></th>
                        <th><div><p>USERNAME</p><Button type="filter"><img src={IconFilter} /></Button></div></th>
                        <th><div><p>EMAIL</p><Button type="filter"><img src={IconFilter} /></Button></div></th>
                        <th><div><p>PHONE NUMBER</p><Button type="filter"><img src={IconFilter} /></Button></div></th>
                        <th><div><p>DATE JOINED</p><Button type="filter"><img src={IconFilter} /></Button></div></th>
                        <th><div><p>STATUS</p><Button type="filter"><img src={IconFilter} /></Button></div></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.map((item, index) => {
                            return (
                                <tr>
                                    <td className={index == 0 ? "first-row" : ""}>{item.org}</td>
                                    <td className={index == 0 ? "first-row" : ""}>{item.name}</td>
                                    <td className={index == 0 ? "first-row" : ""}>{item.email}</td>
                                    <td className={index == 0 ? "first-row" : ""}>{item.phone}</td>
                                    <td className={index == 0 ? "first-row" : ""}>{item.date}</td>
                                    <td className={index == 0 ? "first-row" : ""}><Status data={item.status} /></td>
                                    <td className={index == 0 ? "first-row" : ""}>
                                        <Button
                                            type="icon"
                                            onClick={(event) => {
                                                let cx = event.pageX - 90, cy = event.pageY - 40;
                                                if (cx > window.innerWidth - 230)
                                                    cx = window.innerWidth - 230;
                                                if (cy > window.innerHeight - 160)
                                                    cy = window.innerHeight - 160;
                                                if (cy < 130)
                                                    cy = 130
                                                setUserDetailPosition({ x: cx, y: cy });
                                                setUserDetailVisible(true);
                                                setUserDetailTarget(index);
                                            }}
                                        ><img src={IconDetail} /></Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div >
    )
}