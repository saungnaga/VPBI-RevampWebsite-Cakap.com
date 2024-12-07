export interface IDropdownPropTypes {
	label: string;
	options: string[];
	defaultValue: string;
	onChange?: (value: string) => void;
}
