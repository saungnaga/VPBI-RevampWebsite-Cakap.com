export interface IDropdownPropTypes {
	firstOption: string;
	options: { value: string; label: string }[];
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	default_value: string;
	disabled?: boolean;
	className?: string;
}
