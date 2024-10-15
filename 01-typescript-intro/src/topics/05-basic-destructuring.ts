interface AudioPlayer{
    audioVolume: number;
    soundDuration: number;
    song: string;
    details: Details;


}

interface Details{
    author: string;
    year: number;

}

const audioPlayer : AudioPlayer= {
    audioVolume: 90,
    soundDuration: 36,
    song: "Mees",
    details: {
        author:'ed sheeran',
        year:2015
    }
} 

const { song: anotherSong }= audioPlayer;

const { song:anotherShong, soundDuration:duration, details}= audioPlayer;
const{ author  } = details;

//console.log('song:', anotherSong);
//console.log('Duration:', duration);
//console.log('author:',audioPlayer.details.author);
//console.log('author: ', author);

const dbz: string[] =['Goku','Vegeta','trunk'];

console.log('personaje 3:', dbz[2]);


export{}

