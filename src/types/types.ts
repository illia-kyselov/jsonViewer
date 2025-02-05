export type JsonData =
    | string
    | number
    | boolean
    | { [key: string]: JsonData };
