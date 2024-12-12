export interface ICircleButtonPropTypes {
    variant: "blue" | "black";
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
};