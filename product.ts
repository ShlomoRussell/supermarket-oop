class Product{
    productName: string; 
    price: number;
    brand: string;
    barcode: string;
    constructor(price: number,productName: string,comp:string,desc:string) {
        this.price = price;
        this.productName = productName;
        this.brand = comp;
        this.barcode = desc;
    }
}

export {Product}
