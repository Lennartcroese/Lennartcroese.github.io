var myArray= [
    "Those who have accomplished great things <br> in the world have been, as a rule, <br> bold, aggressive, and self-confident. <br> They dared to step out from the crowd <br> and act in an original way.",
    "I can’t give you a sure-fire formula for success,<br>but I can give you a formula for failure: <br> try to please everybody all the time.",
    "Love yourself first and everything else <br> falls into line. You really have to <br> love yourself to get anything done in this world.",
        "Challenges are what make life interesting<br>and overcoming them<br>is what makes life meaningful.",
        "Remember that the happiest people are<br>not those getting more, but those giving more.",
        "Many of life’s failures are people who did not<br>realize how close they were to success<br> when they gave up.",
        "It is impossible to escape the impression <br> that people commonly use false standards<br> of measurement that they seek power,<br> success and wealth for themselves and<br> admire them in others, and that they <br> underestimate what is of true value in life.",
        "Your time is limited, so don’t waste it<br>by living someone else’s life.<br>Don’t be trapped by dogma which is<br> living with the results of other people’s thinking.",
        "If you don’t design your own life plan, <br> chances are you’ll fall into someone else’s plan.<br> And guess what they have planned for you?<br>Not much.",
        "You miss 100 percent of the shots<br> that you never take.",
        "Curiosity about life in all of its aspects,<br> I think, is still the secret of great creative people.",
        "The journey of a thousand miles <br> begins with one step.",
        "Dear seeker, what you do speaks so loudly, <br> that I cannot hear what you say.",
        "You must be the change<br> you wish to see in the world.",
        "Dear seeker,the best way out<br> is always through.",
        "Don’t think. Thinking is the enemy of creativity.<br>It’s self-conscious, and anything self-conscious<br>is lousy.You can’t try to do things.<br>You simply must do things.",
        "Doing the best at this moment puts you in the <br> best place for the next moment.",
]



function generate_positivity() {
    var random = myArray[Math.floor(Math.random() * myArray.length)];
    document.getElementById("message").innerHTML = random;
    document.getElementById("message").classList.add("visible"); // You might want to have some way to toggle this when the user sends a new questions to fade out the old answer and fade in the new.
    setTimeout(
        function (){
            document.getElementById("message").classList.remove("visible");
        }, 7000
    )
    return random;




}
