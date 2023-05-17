import { IProfile } from "./profile";

interface ILink{
    link:string[]|string;
    name:string;
    icon:string;
    needRoot: boolean;
    needOwner: boolean;
}
export interface ISideToolbar {
    type:string|undefined;
    logoIcon:string|null;
    title:string;
    links:ILink[];
    isOwner:boolean;
    profile:null|undefined|(()=>IProfile)
}
