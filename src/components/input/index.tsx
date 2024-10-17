import "./style.scss"

interface InputProps {
    placeholder: string;
    type: string;
}

export const Input: React.FC<InputProps> = (props) => {
    const { placeholder, type } = props;

    return (
        <input
            className={`input-${type}-container`}
            placeholder={placeholder}
        />
    )
}