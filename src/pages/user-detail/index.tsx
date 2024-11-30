import "./styles.scss"
import { Button } from "../../components/button"
import IconBack from "../../assets/icon/icon-back.svg"
import IconUnknownAvatar from "../../assets/icon/avatar.svg"
import IconFullStar from "../../assets/icon/full-star.svg"
import IconEmptyStar from "../../assets/icon/empty-star.svg"
import { useState } from "react"

export const UserDetail = () => {

    const user = {
        id: "LSQFf587g90", rate: 1, currency: "₦", price: 200000.0, bankInfo: "9912345678/Providus Bank",
        fullName: "Grace Effiom", phoneNumber: "07060780922", emailAddress: "grace@gmail.com", bvn: "07060780922", gender: "Female", maritalStatus: "Single", children: "None", typeOfResidence: "Parent's Apartment",
        levelOfEducation: "B.Sc", employmentStatus: "Employed", sectorOfEmployment: "FinTech", durationOfEmployment: "2 years", officeEmail: "grace@lendsqr.com", monthlyIncome: "₦200,000.00 - ₦400,000.00", loanRepayment: "40,000",
        twitter: "@grace_effiom", facebook: "Grace Effiom", instagram: "@grace_effiom",
        guarantors: [
            { fullName: "Debby Ogana", phoneNumber: "07060780922", emailAddress: "debby@gmail.com", relationship: "Sister" },
            { fullName: " Grace Effiom", phoneNumber: "07060780922", emailAddress: "grace.effiom@gmail.com", relationship: "Self" }
        ],
    }

    const [tabIndex, setTabIndex] = useState(0)

    return (
        <div className="page-userdetail">
            <Button type="text" url="/users"><img src={IconBack} />Back to Users</Button>
            <div className="header">
                <h1>User Detail</h1>
                <Button type="red-line">BLACKLIST USER</Button>
                <Button type="blue-line">ACTIVATE USER</Button>
            </div>
            <div className="group">
                <div className="main">
                    <img src={IconUnknownAvatar} />
                    <div className="pair">
                        <h2>{user.fullName}</h2>
                        <h4>{user.id}</h4>
                    </div>
                    <hr />
                    <div className="pair">
                        <h3>User's Tier</h3>
                        <div className="stars">
                            {Array.from({ length: 3 }, (_, index) => (
                                <img src={index < user.rate ? IconFullStar : IconEmptyStar} />
                            ))}
                        </div>
                    </div>
                    <hr />
                    <div className="pair">
                        <h2>{`${user.currency}${user.price}`}</h2>
                        <p>{user.bankInfo}</p>
                    </div>
                </div>
                <div className="tab">
                    <Button type="tab-item" disabled={tabIndex == 0} onClick={() => { setTabIndex(0) }}>General Details</Button>
                    <Button type="tab-item" disabled={tabIndex == 1} onClick={() => { setTabIndex(1) }}>Documents</Button>
                    <Button type="tab-item" disabled={tabIndex == 2} onClick={() => { setTabIndex(2) }}>Bank Details</Button>
                    <Button type="tab-item" disabled={tabIndex == 3} onClick={() => { setTabIndex(3) }}>Loans</Button>
                    <Button type="tab-item" disabled={tabIndex == 4} onClick={() => { setTabIndex(4) }}>Savings</Button>
                    <Button type="tab-item" disabled={tabIndex == 5} onClick={() => { setTabIndex(5) }}>App and System</Button>
                </div>
            </div>
            <div className="group">
                <h5>Personal Information</h5>
                <div className="info">
                    <div className="pair">
                        <p>FULL NAME</p>
                        <h6>{user.fullName}</h6>
                    </div>
                    <div className="pair">
                        <p>PHONE NUMBER</p>
                        <h6>{user.phoneNumber}</h6>
                    </div>
                    <div className="pair">
                        <p>EMAIL ADDRESS</p>
                        <h6>{user.emailAddress}</h6>
                    </div>
                    <div className="pair">
                        <p>BVN</p>
                        <h6>{user.bvn}</h6>
                    </div>
                    <div className="pair">
                        <p>GENDER</p>
                        <h6>{user.gender}</h6>
                    </div>
                    <div className="pair">
                        <p>MARITAL STATUS</p>
                        <h6>{user.maritalStatus}</h6>
                    </div>
                    <div className="pair">
                        <p>CHILDREN</p>
                        <h6>{user.children}</h6>
                    </div>
                    <div className="pair">
                        <p>TYPE OF RESIDENCE</p>
                        <h6>{user.typeOfResidence}</h6>
                    </div>
                </div>
                <hr />
                <h5>Education and Employment</h5>
                <div className="statuses">
                    <div className="pair">
                        <p>LEVEL OF EDUCATION</p>
                        <h6>{user.levelOfEducation}</h6>
                    </div>
                    <div className="pair">
                        <p>EMPLOYMENT STATUS</p>
                        <h6>{user.employmentStatus}</h6>
                    </div>
                    <div className="pair">
                        <p>SECTOR OF EMPLOYMENT</p>
                        <h6>{user.sectorOfEmployment}</h6>
                    </div>
                    <div className="pair">
                        <p>DURATION OF EMPLOYMENT</p>
                        <h6>{user.durationOfEmployment}</h6>
                    </div>
                    <div className="pair">
                        <p>OFFICE EMAIL</p>
                        <h6>{user.officeEmail}</h6>
                    </div>
                    <div className="pair">
                        <p>MONTHLY INCOME</p>
                        <h6>{user.monthlyIncome}</h6>
                    </div>
                    <div className="pair">
                        <p>LOAN REPAYMENT</p>
                        <h6>{user.loanRepayment}</h6>
                    </div>
                </div>
                <hr />
                <div className="guarantors">
                    <h5>Socials</h5>
                    <div className="pair">
                        <p>TWITTER</p>
                        <h6>{user.twitter}</h6>
                    </div>
                    <div className="pair">
                        <p>FACEBOOK</p>
                        <h6>{user.facebook}</h6>
                    </div>
                    <div className="pair">
                        <p>INSTAGRAM</p>
                        <h6>{user.instagram}</h6>
                    </div>
                    <hr />
                    <h5>Guarantor</h5>
                    {user.guarantors.map((gurantor, index) => {
                        return (
                            <>
                                {index != 0 && (<hr />)}
                                <div className="pair">
                                    <p>FULL NAME</p>
                                    <h6>{gurantor.fullName}</h6>
                                </div>
                                <div className="pair">
                                    <p>PHONE NUMBER</p>
                                    <h6>{gurantor.phoneNumber}</h6>
                                </div>
                                <div className="pair">
                                    <p>EMAIL ADDRESS</p>
                                    <h6>{gurantor.emailAddress}</h6>
                                </div>
                                <div className="pair">
                                    <p>RELATIONSHIP</p>
                                    <h6>{gurantor.relationship}</h6>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}