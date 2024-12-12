export interface ProductCardProps {
    courseId: string;
    courseName: string;
    basicPrice: string;
    discount?: string;
    price?: Prices;
    promoText?: string;
    categoriesName?: string;
    partner: Partner;
    reviews?: Reviews;
    icon: Icon;
    nextAction: deeplink;
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

interface Partner {
    partnerName: string;
}

interface deeplink {
    deeplink: string;
}