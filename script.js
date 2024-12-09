const firstInsert = ['the perfect day', 'a great day', 'a wonderful day', 'an opportunity', 'a chance', 'the moment'];
const secondInsert = ['take a step towards your goals', 'achieve greatness', 'conquer your fears', 'destroy self-doubt', 'work relentlessly', 'become jacked'];
const thirdInsert = ['Seize it', 'May the force be with you', 'Unlock your potential', 'Get up and go', 'Don’t hesitate', 'Don’t procrastinate'];

generateRandom = arr => {
    let randomPick = Math.floor(Math.random() * arr.length);
    return arr[randomPick];
}

console.log('Today is ' + generateRandom(firstInsert) + ' for you to ' + generateRandom(secondInsert) + '. ' + generateRandom(thirdInsert) + '.');