export class Product {
  private constructor(
    public readonly id: string,
    public name: string,
    public price: number,
  ) {}

  static create(name: string, price: number): Product {
    const id = crypto.randomUUID();
    return new Product(id, name, price);
  }
}
