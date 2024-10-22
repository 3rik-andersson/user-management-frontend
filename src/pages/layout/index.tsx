import "./style.scss"
import { Header } from "./header"
import { Sider } from "./sider"

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div className="layout-container">
            <div className="layout-group">
                <Sider />
                {children}
            </div>
            <Header />
        </div>
    )
}