export interface Image {
    _type: String;
    asset: {
        _ref: String;
        _type: String;
    };
}

export interface Dishes {
    _createdAt: Date;
    _id: String;
    _rev: String;
    _type: String;
    _updateAt: Date;
    image: Image;
    name: String;
    price: Number;
    short_description: String;
}

export interface Restaurant {
    _createdAt: Date;
    _id: String;
    _rev: String;
    _type: String;
    _updateAt: Date;
    address: String;
    dishes: Dishes[];
    image: Image;
    restaurants: Restaurant;
    lat: Number;
    long: Number;
    rating: Number;
    name: String;
    short_description: String;
    type: {
        name: String;
    };
}

export interface RestaurantList {
    _createdAt: Date;
    _id: String;
    _rev: String;
    _type: String;
    _updateAt: Date;
    name: String;
    short_description: String;
    restaurants: Restaurant[];
}
