export interface ProductCardProps {
   
    courseId: string;
    courseName: string;
    basicPrice: string;
    discount: string;
    price: Prices;
    promoText: string;
    nextAction: string;
    categoriesName: string;
    reviews: Reviews;
    icon: Icon;
}

interface Prices {
    old: string;
    new: string;
}

interface Reviews {
    rating: string;
    total: string;
}

interface Icon {
    thumbnail: string;
}