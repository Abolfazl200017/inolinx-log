interface ILink{
    link:string[]|string;
    name:string;
}
export interface ISideToolbar {
    type:string;
    logoImage:string|null;
    title:string;
    links:ILink[];
}
