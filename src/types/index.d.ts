export type IProduct = {
    id: number;
    img: string;
    date: string;
    description: string;
    href: string;
    merchant: string;
    title: string;
    price: string;
    featured: boolean;
};

export type IProducts = IProduct[];
