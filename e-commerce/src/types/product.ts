export interface Product {
    map(arg0: (product: any) => import("react").JSX.Element): import("react").ReactNode | Iterable<import("react").ReactNode>;
    _id: string;
    _type: 'product';
    name: string;
    image?: {
        asset: {
            _ref: string;
            _type: 'image';
        };
    };
    price : number;
    description : string;
    discountPercentage : number;
    isFeaturedProduct : boolean;
    category : {
        _ref : string,
        _type : 'category'
    };
    slug: {
        _type : 'slug',
        current : string
    };
    stockLevel : number;
}