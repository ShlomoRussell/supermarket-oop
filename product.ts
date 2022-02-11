class Product{
    productName: string;
    price: number;
    comp: string;
    desc: string;
    constructor(price: number,productName: string,comp:string,desc:string) {
        this.price = price;
        this.productName = productName;
        this.comp = comp;
        this.desc = desc;
    }
}

export {Product}
