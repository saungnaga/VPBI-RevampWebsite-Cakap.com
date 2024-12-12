export interface IDropdownPropTypes {
	firstOption: string | number;
	options: { value: string | number; label: string | number }[];
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	default_value: string | number;
	disabled?: boolean;
	className?: string;
}
