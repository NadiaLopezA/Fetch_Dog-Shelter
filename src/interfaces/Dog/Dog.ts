import { Location } from '..';

export interface Dog {
    img: string
    name: string
    age: number
    breed: string
    zip_code: string
    id: string
    location?: Location | null
}