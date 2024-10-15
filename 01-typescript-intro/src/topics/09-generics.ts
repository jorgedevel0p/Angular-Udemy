


export function whatsMyType<T>( argument :T ):T{
    return argument;
}

const amIString = whatsMyType<string>('hola mundo');
const amInumber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split(' ') );
console.log(amInumber.toFixed() );
console.log(amIArray.join('-') );