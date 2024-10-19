import IconLogo from "../../assets/icon/lensqr.svg"
import "./styles.scss"

interface LogoProps {
    type: string;
}

export const Logo: React.FC<LogoProps> = (props) => {
    const {type} = props

    return (
        <img
            className={`logo-${type}-container`}
            src={IconLogo}
        />
    )
}