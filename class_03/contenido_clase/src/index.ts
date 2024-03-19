import { FreeProduct } from "./patterns/factory";
import { Product } from "./patterns/factory";
import { ClothingProduct } from "./patterns/factory";
import { ElectronicProduct } from "./patterns/factory";

// con Pick restrinjo las propiedades a las que puedo acceder
const freeProduct: Pick<Product, 'name'> = new FreeProduct().createProduct("Galletita");

console.info('freeProduct: ', freeProduct);

const remeraXL = new ClothingProduct().createProduct('remera XL', 100, 'XL');

console.info('remeraXL: ', remeraXL);

const macBookPro = new ElectronicProduct().createProduct('McBook Pro', 1000);

console.info('Macbook Pro: ', macBookPro);
