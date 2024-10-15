export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger={
    name: 'jorge',
}

const passenger2: Passenger={
    name: 'Fernando',
    children: ['Natalia','Elizabet'],
}

const printChildren = (passenger: Passenger)=>{
    // const howManyChildren = passenger.children?.length|| 0 ;
    const howManyChildren = passenger.children?.length;


    console.log( passenger.name, howManyChildren);
}

printChildren(passenger2);

