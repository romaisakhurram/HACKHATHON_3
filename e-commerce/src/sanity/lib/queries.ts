
import groq from 'groq';

export const ProductFour = groq `*[_type == 'product'] [23..26]`; //Feature product
export const ProductSix = groq `*[_type == 'product'] [2..7]`; // leatest product
export const Product3 = groq `*[_type == 'product'] [8..11]`; // trending product
export const Product4 = groq `*[_type == 'product'] [15..17]`; //exclusive product
export const Product5 = groq `*[_type == 'product'] [26..29]`; //top categories product
export const allProduct = groq `*[_type == 'product'] [18..29]`; //shop grid product
export const Product7 = groq `*[_type == 'product'] [0..6]`;//shop product