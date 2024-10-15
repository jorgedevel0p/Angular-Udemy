const skills : string[] = ['Bash', 'Counter', 'healing'];

interface character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const Strider: character ={
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],

}

Strider.hometown = 'rivendell';
console.table(Strider);
export{};