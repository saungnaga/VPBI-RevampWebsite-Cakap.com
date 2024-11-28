export interface IButtonPropTypes {
    children: React.ReactNode;
    disabled?: boolean;
    variant?: "white" | "blue" | "green";
    size?: "small" | "large";
    href?: string;
}