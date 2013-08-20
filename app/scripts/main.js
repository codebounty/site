'use strict';

var quotes = [
    {
        msg: "Code Bounty is a brilliant initiative to help fuel open-source development.",
        author: "Marak"
    }
];

var cowboyQuotes = [
    "never approach a bull from the front, a horse from the rear, or a fool from any direction.",
    "don't squat with your spurs on.",
    "don't judge people by their relatives.",
    "behind every successful rancher is a wife who works in town.",
    "when you lose, don't lose the lesson.",
    "talk slowly, think quickly.",
    "silence is sometimes the best answer.",
    "live a good, honorable life. Then when you get older and think back, you'll enjoy it a second time.",
    "don't interfere with something that ain't botherin' you none.",
    "timing has a lot to do with the outcome of a rain dance.",
    "it's better to be a has-been that a never-was.",
    "the easiest way to eat crow is while it's still warm. The colder it gets, the harder it is to swaller.",
    "if you find yourself in a hole, the first thing to do is stop diggin'.",
    "if it don't seem like it's worth the effort, it probably ain't.",
    "it don't take a genius to spot a goat in a flock of sheep.",
    "sometimes you get and sometimes you get got.",
    "the biggest troublemaker you'll probably ever have to deal with watches you shave his face in the mirror every morning.",
    "never ask a barber if you need a haircut.",
    "if you get to thinkin' you're a person of some influence, try orderin' somebody else's dog around.",
    "don't worry about bitin' off more'n you can chew; your mouth is probably a whole lot bigger'n you think.",
    "always drink upstream from the herd.",
    "generally, you ain't learnin' nothing when your mouth's a-jawin'.",
    "tellin' a man to git lost and makin' himdo it are two entirely different propositions.",
    "if you're ridin' ahead of the herd, take a look back every now and then to make sure it's still there with ya.",
    "good judgment comes from experience, and a lotta that comes from bad judgment.",
    "when you give a personal lesson in meanness to a critter or to a person, don't be surprised if they learn their lesson.",
    "when you're throwin' your weight around, be ready to have it thrown around by somebody else.",
    "lettin' the cat outta the bag is a whole lot easier than puttin' it back.",
    "always take a good look at what you're about to eat. It's not so important to know what it is, but it's sure crucial to know what it was.",
    "the quickest way to double your money is to fold it over and put it back into your pocket.",
    "you can't tell how good a man or a watermelon is 'til they get thumped.(Character shows up best when tested.)",
    "never miss a good chance to shut up.",
    "there never was a horse that couldn't be rode; Never was a cowboy who couldn't be throwed.",
    "talk low, talk slow, and don't say too much.",
    "courage is being scared to death - and saddling up anyway."
];

window.onload = function () {
    var htmlQuote = document.getElementById('quote');
    var quote = document.createElement('blockquote');
    var i = Math.round(Math.random() * (quotes.length - 1));
    quote.innerHTML = '<p>"' + quotes[i].msg + '"<\/p>\n<small>' + quotes[i].author + '<\/small>';
    htmlQuote.parentNode.replaceChild(quote, htmlQuote);

    var htmlCowboyQuote = document.getElementById('cowboyQuote');
    i = Math.round(Math.random() * (cowboyQuotes.length - 1));
    htmlCowboyQuote.innerHTML = '<p>And remember, ' + cowboyQuotes[i] + '<\/p>';
};