import "./style.scss"
import IconLogo from "../../assets/icon/lensqr.svg"
import { Input } from "../../components/input"
import { Link } from "../../components/link"
import { Button } from "../../components/button"

export const Login = () => {
    return (
        <div className="container">
            <div className="left">
                <img src={IconLogo} className="logo" />
                <div className="signin"/>
            </div>
            <div className="right">
                <div className="form">
                    <h1>Welcome!</h1>
                    <p>Enter details to login.</p>
                    <Input placeholder="Email" type="big" />
                    <div>
                        <Input placeholder="Password" type="big-broken" />
                        <Link type="broken">SHOW</Link>
                    </div>
                    <Link type="normal">FORGOT PASSWORD?</Link>
                    <Button type="big">LOG IN</Button>
                </div>
            </div>
        </div>
    )
}