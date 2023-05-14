export interface IProfile {
    first_name: string;
    last_name: string;
    image: string|null;
    email: string;
    url: string;
    password: string;
    id: number|string;
    specialty: string[]
}
