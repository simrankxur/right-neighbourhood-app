import { Crime } from "./crime";
import { Price } from "./price";
import { Rent } from "./rent";
import { Restaurant } from "./restaurant";

export interface PostcodeData {
    crime: Crime[];
    restaurants: Restaurant[];
    rents: Rent[];
    prices: Price[];
}
