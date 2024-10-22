import "./style.scss"

interface StatusProps {
    data: string;
}

export const Status: React.FC<StatusProps> = (props) => {
    const { data } = props;

    return (
        <div className={`status-${data.charAt(0).toLowerCase() + data.slice(1)}-container`}>
            {data}
        </div>
    )
}