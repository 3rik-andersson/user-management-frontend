import "./style.scss"
import Logo from "../../assets/icon/lensqr.svg"

export const Login = () =>  {
    return (
        <div className="container">
            <div className="left">
                <img src={Logo} className="logo"/>
                <div className="signin"/>
            </div>
            <div className="right">
                <div className="form">
                    <h1>Welcome!</h1>
                    <p>Enter details to login.</p>
                    <div>
                        <input placeholder="Email"/>
                    </div>
                    <div>
                       <input placeholder="Password"/>
                       <a>SHOW</a>
                    </div>
                    <a>FORGOT PASSWORD?</a>
                    <button>LOG IN</button>
                </div>
            </div>
        </div>
    )
}