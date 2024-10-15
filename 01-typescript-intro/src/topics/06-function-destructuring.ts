export interface Product {
    description: String;
    price: number;

}
const phone: Product={
    description: 'nokia A1',
    price: 150.0
}
const tablet: Product={
    description:'iPad Air',
    price: 250.0
}

export interface TaxCalculationOptions{
    tax:number;
    products:Product[];
}

//function taxCalculation(options: TaxCalculationOptions): number[]{
//function taxCalculation(options: TaxCalculationOptions): number[]{

export function taxCalculation(options: TaxCalculationOptions): number[]{
    const{tax, products}= options;

    let total=0;
    
    products.forEach(({ price}) =>{
        total +=price;
    })
    return[total, total *tax];
}


const shoppingCart= [phone, tablet];
const tax = 0.15;

//desestructuracion aplicada
const [total, taxTotal] = taxCalculation({
    products :shoppingCart,
    tax: tax,

});
//

// console.log('Total:', total);
// console.log('Total:', taxTotal);



