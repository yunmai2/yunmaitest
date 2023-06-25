import { Order } from "../order/Order";
import { Address } from "../address/Address";

export type Customer = {
  orders?: Array<Order>;
  address?: Address | null;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
};
