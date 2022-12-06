export interface INews {
    id: number;
    title: string;
    description: string;
    date: Date;
    isPremium: boolean;
    image: string;
}

export interface INormalizedNews {
    id: number;
    title: string;
    description: string;
    date: number | string;
    isPremium: boolean;
    image: string;
    shortDescription?: string;
}
