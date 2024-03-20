import { FreeProduct } from "./patterns/factory";
import { Product } from "./patterns/factory";
import { ClothingProduct } from "./patterns/factory";
import { ElectronicProduct } from "./patterns/factory";
import { PersonBuilder } from "./patterns/builder";
import { newPersonBuilder } from "./patterns/builder";
import { Person } from "./patterns/builder";
import { getData } from "./patterns/builder";

// con Pick restrinjo las propiedades a las que puedo acceder
const freeProduct: Pick<Product, 'name'> = new FreeProduct().createProduct("Galletita");

console.info('freeProduct: ', freeProduct);

const remeraXL = new ClothingProduct().createProduct('remera XL', 100, 'XL');

console.info('remeraXL: ', remeraXL);

const macBookPro = new ElectronicProduct().createProduct('McBook Pro', 1000);

console.info('Macbook Pro: ', macBookPro);

const myPerson = newPersonBuilder().withName('Pepe');
console.info('myPerson: ', myPerson);

const builder = new PersonBuilder();
const gonza = builder.withName('Gonzalo').withAge(41).withEmail('gonzalomonteodorisio@gmail.com').withAddress('BA 2970').build();

console.info('gonza: ', gonza);
console.info('gonza.name: ', gonza.name);

/*
  Imaginemos que queremos crear una función a la cual le pasamos un objeto persona y un array de keys
  ['name', 'age'] -> {name: 'Gonzalo', age: 41}
  Que me devuelva sólo los atributos que están en el vector
*/

const person: Person = {
  name: 'Gonzalo',
  age: 41,
  address: 'Av. Siempreviva 123',
}
const basicData = getData(person, ['name', 'age']);

console.info('basicData: ', basicData);

