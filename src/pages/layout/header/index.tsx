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
            <Logo type="small" />
            <Search />
            <Link type="base">
                Docs
            </Link>
            <AlarmButton />
            <div className="header-group">
                <Avatar />
                <Link type="name">Adedeji</Link>
                <Button type="icon" url="/">
                    <img src={IconDown} />
                </Button>
            </div>
        </div>
    )
}