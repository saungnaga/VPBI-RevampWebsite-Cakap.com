export interface IAccordionItemTypes {
    id?: string;
    title?: string;
    content?: string;
}

export interface IAccordionPropTypes {
    items: IAccordionItemTypes[];
    allowMultipleOpen?: boolean;
}