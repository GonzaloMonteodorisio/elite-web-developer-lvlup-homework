import { useState } from 'react';

/*
  Strategy: patrón de comportamiento que se utiliza cuando existen algoritmos intercambiables.
  El cliente define cual es el algoritmo que mejor se adapta al problema.

  Interface: contrato que tiene que cumplir algo
*/

interface DiscountStrategy {
  applyDiscount(amount: number): number;
}

class NoDiscount implements DiscountStrategy {
  public applyDiscount(amount: number): number {
      return amount;
  }
}

class PercentageDiscount implements DiscountStrategy {
  private percentage: number;
  constructor(percentage: number) {
    this.percentage = percentage;
  };

  public applyDiscount(amount: number): number {
    const discount = (amount * this.percentage) / 100;
    return amount - discount;
  }
}

class FlexDiscount implements DiscountStrategy {
  private discountAmount: number;
  constructor(discountAmount: number) {
    this.discountAmount = discountAmount;
  }

  public applyDiscount(amount: number): number {
    return amount - this.discountAmount;
  }
}

class BlackFriday implements DiscountStrategy {
  public applyDiscount(amount: number): number {
    return amount / 2;
  }
}

// Marco
class PaymentProcessor {
  private discountStrategy: DiscountStrategy = new NoDiscount(); // Por default

  public setDiscountStrategy(strategy: DiscountStrategy): void {
    this.discountStrategy = strategy;
  }

  public processPayment(amount: number) {
    return this.discountStrategy.applyDiscount(amount);
  }
}

/////////////////////////////////////////////////

interface Product {
  name: string,
  price: number,
  brand: string,
  category: string,
  description: string,
}

// Filtro
// Aplicación que tiene que resolver un filtrado de productos por precio, categoría y marca

interface Filter {
  filter(products: Product[]): Product[];
}

class PriceFilter implements Filter {
  constructor(public minPrice: number, public maxPrice: number) {}

  filter(products: Product[]): Product[] {
    return products.filter(product => product.price >= this.minPrice && product.price <= this.maxPrice);
  }
}

// Tarea
// CategoryFilter
// BrandFilter

class CategoryFilter implements Filter {
  constructor(public category: string) {}

  filter(products: Product[]): Product[] {
    return products.filter(product => product.category === this.category);
  }
}

class BrandFilter implements Filter {
  constructor(public brand: string) {}

  filter(products: Product[]): Product[] {
    return products.filter(product => product.brand === this.brand);
  }
}

// Pasar a React esta lógica de negocio
export const useFilterProducts = (products: Product[], filterStrategy: Filter, minPrice?: number, maxPrice?: number) => {
  const [currentFilterStrategy, setCurrentFilterStrategy] = useState<Filter>(new PriceFilter(minPrice || 0, maxPrice || Infinity));

  const filterProducts = (products: Product[]) => {
    return currentFilterStrategy.filter(products);
  }

  const changeFilterStrategy = (strategy: Filter) => {
    return setCurrentFilterStrategy(strategy);
  }

  return {
    filterProducts,
    changeFilterStrategy,
  }
}

