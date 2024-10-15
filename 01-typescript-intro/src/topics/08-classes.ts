import { Person } from './08-classes';
export class Person{
    //public name: string;
    //public addres: string;

    constructor(
        public firstName :String,
        public lastName :String,
        private addres :string='No Address'
    ){

        //this.name= 'jorge';
        //this.addres= 'santiago';
    }

}

// export class Hero extends Person{
//     constructor(
//         public aterEgo:string,
//         public age: number,
//         public realName: string,
//     ){
//         super(realName,'new york')
//     }

// }


export class Hero{


    constructor(
        public aterEgo:string,
        public age: number,
        public realName: string,
        public person:Person,
    ){
        //this.person = new Person(realName);
    }

}

const tony = new Person('Tony' ,'Stark','new york');

const ironman = new Hero('Ironman',45,'tony',tony);

console.log(ironman)  