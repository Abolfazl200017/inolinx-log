export interface IFilter {
    name:string;
    completed:boolean;
    subFilter:IFilter[];
}
