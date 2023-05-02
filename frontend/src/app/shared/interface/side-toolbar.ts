interface ILink{
    link:string[]|string;
    name:string;
    icon:string;
}
export interface ISideToolbar {
    type:string|undefined;
    logoIcon:string|null;
    title:string;
    links:ILink[];
}
