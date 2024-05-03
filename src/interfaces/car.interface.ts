export interface Car {
    color: string;
    gas: 'gasoline' | 'electric';
    price: number;
    descriotion?: string;
    year?: number;
}