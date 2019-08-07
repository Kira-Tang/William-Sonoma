

export interface ProductData{
    id:string;
    name: string;
    categoryType: string;
    groups:Group;
}

export interface Group{
    id:string;
    name:string;
    link:string;
    priceRange:Prices;
}
export interface Prices{
    selling:Price;
}
export interface Price{
    high:number;
    low:number;
}
