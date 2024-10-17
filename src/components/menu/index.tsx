import "./style.scss"
import Logo from "../../assets/icon/lensqr.svg"
import { Search } from "../search"
import { AlarmButton } from "../alarm"
import { AvatarButton } from "../avatar"

export const Menu = () =>  {
    return (
        <div className="menu-container">
            <img src={Logo}/>
            <Search/>
            <div className="space"/>
            <a>Docs</a>
            <AlarmButton/>
            <AvatarButton/>
            <p>Adedeji</p>
        </div>
    )
}