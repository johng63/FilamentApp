export interface Filament {
    id?: string; // optional for new ones
    name: string;
    description: string;
    amountUsed: number;
    amountNew: number;
    endTemp: number;
    bedTemp: number;
    manufacturer: string;
}
