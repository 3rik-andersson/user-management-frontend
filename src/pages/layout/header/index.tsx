import "./style.scss"
import { Search } from "../../../components/search"
import { AlarmButton } from "../../../components/alarm"
import { Avatar } from "../../../components/avatar"
import { Link } from "../../../components/link"
import IconDown from "../../../assets/icon/down.svg"
import { Button } from "../../../components/button"
import { Logo } from "../../../components/logo"

export const Header = () => {
    return (
        <div className="header-container">
            <Logo/>
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