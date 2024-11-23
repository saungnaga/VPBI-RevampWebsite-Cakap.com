export interface IButtonPropTypes {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    variant?: "white" | "blue" | "green";
    size?: "small" | "large";
}