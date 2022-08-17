let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes =[
    {
        quote : ' " Im selfish, impatient and insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you dont deserve my best " ',
        person : '~Marilyn Monroe '
    },

    {
        quote : ' " Two things are infinite: the universe and human stupidity; and Im not sure about the universe." ',
        person : ' ~Abert Einstein '
    },

    {
        quote : ' " Youve gotta dance like theres nobody watchingLove like youll never be hurt,Sing like theres nobody listening,And live like its heaven on earth. " ',
        person : ' ― William W. Purkey '
    },

    {
        quote : ' " You know youre in love when you cant fall asleep because reality is finally better than your dreams. " ',
        person : ' ― Dr. Seuss '
    },
    {
        quote : ' " Don’t walk in front of me… I may not follow Don’t walk behind me… I may not leadWalk beside me… just be my friend" ',
        person : ' ― Albert Camus '
    },

    {
        quote : ' " Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . ." ',
        person : ' ― C.S. Lewis, The Four Loves '
    },

    {
        quote : ' " Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel " ',
        person : ' Maya Angelou  '
    },
];

btn.addEventListener("click" ,function(){
    let random =  Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})