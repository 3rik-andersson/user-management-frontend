import "./style.scss"
import Logo from "../../assets/icon/lensqr.svg"
import { Search } from "../search"
import { AlarmButton } from "../alarm"
import { Avatar } from "../avatar"
import { Link } from "../link"
import IconDown from "../../assets/icon/down.svg"
import { Button } from "../button"

export const Header = () => {
    return (
        <div className="header-container">
            <img src={Logo} />
            <Search />
            <Link type="base">
                Docs
            </Link>
            <AlarmButton />
            <Avatar />
            <p>Adedeji</p>
            <Button type="icon">
                <img src={IconDown} />
            </Button>
        </div>
    )
}