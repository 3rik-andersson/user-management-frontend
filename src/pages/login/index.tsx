import "./style.scss"
import { Input } from "../../components/input"
import { Link } from "../../components/link"
import { Button } from "../../components/button"
import { Logo } from "../../components/logo"

export const Login = () => {
    return (
        <div className="login-container">
            <div className="login-leftside">
                <div className="login-logo" ><Logo type="big" /></div>
                <div className="login-back" />
            </div>
            <div className="login-rightside">
                <div className="login-form">
                    <h1 className="login-heading">Welcome!</h1>
                    <p className="login-text">Enter details to login.</p>
                    <Input placeholder="Email" type="big" />
                    <div className="login-password">
                        <Input placeholder="Password" type="big-broken" />
                        <Link type="broken">SHOW</Link>
                    </div>
                    <Link type="normal">FORGOT PASSWORD?</Link>
                    <Button type="big" url="/users">LOG IN</Button>
                </div>
            </div>
        </div>
    )
}