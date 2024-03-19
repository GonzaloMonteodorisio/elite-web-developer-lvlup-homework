export interface Product {
  name: string;
  price: number;
  description: string;
}

// La clase puede implementar una interface
class BaseProduct implements Product {
  constructor(public name: string, public price: number, public description: string) {}
}

export class ProductFactory {
  protected createProduct(
    name: string, 
    price: number, 
    description: string
  ) {
    return new BaseProduct(name, price, description);
  };
}

export class ElectronicProduct extends ProductFactory {
  constructor() {
    super(); // instancia a la clase que se extiende
  }

  public createProduct(
    name: string, 
    price: number
  ): BaseProduct {
    const description = "El producto electrónico de la tienda X";
    return super.createProduct(name, price, description);
  }
}

export class ClothingProduct extends ProductFactory {
  constructor() {
    super();
  }

  public createProduct(
    name: string, 
    price: number, 
    size: string
  ): BaseProduct {
    const description = `Size: ${size}`;
    if (description.length === 0) throw new Error("");
    return super.createProduct(name, price, description);
  }
}

export class FreeProduct extends ProductFactory {
  constructor() {
    super();
  }

  public createProduct(
    name: string, 
  ): BaseProduct {
      return super.createProduct(name, 0, "");
  }
}