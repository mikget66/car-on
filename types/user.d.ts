import { Car } from "./car";

export type User ={
    id :string;
    name: string;

    id         : string;   
    name       : string;
    phone      : string;
    whatsapp   : string;
    email      : string;   
    password   : string;
    image?      : string;
    location?   : string;
    type: " Individual" | "Dealership";  
    cars? :       Car[]
}