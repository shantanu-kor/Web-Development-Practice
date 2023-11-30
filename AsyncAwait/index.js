console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async() => {
    const promiseWifeBringingTics = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));

    const addButter = new Promise((resolve, reject) => resolve('butter'));
    
    // const getCandy = new Promise((resolve, reject) => resolve('candy'));
    const getColdDrinks = new Promise((resolve, reject) => resolve('cold drinks'));

    let ticket;
    try{
        ticket = await promiseWifeBringingTics;
    }
    catch(e){
        ticket = 'sad face';
    }
    
    console.log('wife: i have the tics');
    console.log('husband: we should go in');
    console.log('wife: no I an hungry');

    // let popcorn = await getPopcorn;

    let [popcorn, coldDrinks] = await Promise.all([getPopcorn, getColdDrinks]);

    console.log(`husband: I got some ${popcorn}, ${coldDrinks}`);
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');

    let butter = await addButter;

    console.log(`husband: i got some ${butter}`);
    console.log('husband: anything else darling?');
    console.log('wife: lets go we are getting late');
    console.log('husband: thank you for the reminder *grins*');

    return ticket;
}

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');