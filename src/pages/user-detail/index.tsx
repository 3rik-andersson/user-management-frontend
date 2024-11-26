import "./styles.scss"
import { Button } from "../../components/button"
import IconBack from "../../assets/icon/icon-back.svg"

export const UserDetail = () => {

    const user = {
        fullName: "Grace Effiom", phoneNumber: "07060780922", emailAddress: "grace@gmail.com", bvn: "07060780922", gender: "Female", maritalStatus: "Single", children: "None", typeOfResidence: "Parent's Apartment",
        levelOfEducation: "B.Sc", employmentStatus: "Employed", sectorOfEmployment: "FinTech", durationOfEmployment: "2 years", officeEmail: "grace@lendsqr.com", monthlyIncome: "₦200,000.00 - ₦400,000.00", loanRepayment: "40,000",
        twitter: "@grace_effiom", facebook: "Grace Effiom", instagram: "@grace_effiom",
        guarantors: [
            { fullName: "Debby Ogana", phoneNumber: "07060780922", emailAddress: "debby@gmail.com", relationship: "Sister" },
            { fullName: " Debby Ogana", phoneNumber: "07060780922", emailAddress: "debby@gmail.com", relationship: "Sister" }
        ],
    }

    return (
        <div className="page-userdetail">
            <Button type="text"><img src={IconBack}/>Back to Users</Button>
        </div >
    )
}