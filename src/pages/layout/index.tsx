import "./style.scss"
import { Header } from "./header"
import { Sider } from "./sider"

export const Layout = () => {
    return (
        <div className="layout-container">
            <Header />
            <div className="layout-group">
                <Sider />
            </div>
        </div>
    )
}