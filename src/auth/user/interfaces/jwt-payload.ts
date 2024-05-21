import { ListProducts } from "../../../products/list-products/list-products.entity";

export interface JwtPayload {
    id: number;
    name: string;
    email: string;
    lists: ListProducts[];
}