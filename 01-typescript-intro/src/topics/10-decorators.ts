function classDecorator(
    constructor : any
){
    return class extends constructor{
        newPropert= 'New Property';
        hello ='override';
    }
    
}

@classDecorator
export class SuperClass{

    public myProperty: string = 'abc123';
    
    print(){
        console.log('Hola Mundo')
    }

}

console.log (SuperClass);

const myClass = new SuperClass();
console.log(myClass);