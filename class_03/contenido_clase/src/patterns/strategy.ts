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


