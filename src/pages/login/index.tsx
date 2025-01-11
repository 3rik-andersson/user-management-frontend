import "./style.scss";
import { Input } from "../../components/input";
import { Link } from "../../components/link";
import { Button } from "../../components/button";
import LoginImage from "../../assets/image/pablo-sign-in.png";
import LogoIcon from "../../assets/icon/lensqr.svg";

export const Login = () => {
  return (
    <div className="login-container">
      <img className="login-logo" src={LogoIcon} />
      <div className="login-leftside">
        <img className="login-back" src={LoginImage} />
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
          <Button type="big" url="/users">
            LOG IN
          </Button>
        </div>
      </div>
    </div>
  );
};
