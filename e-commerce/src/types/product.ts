export interface Product {
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