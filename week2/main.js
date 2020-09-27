const quiz = [
    ["Who founded America's first natinal bank?","Alexander Hamilton"],
    ["Who was the first catholic president?","John F Kennedy"],
    ["Who was the first vice president?","John Adams"],
    ["What crop did George Washington grow?","Tobacco"]
];

let score = 0 

function playQuiz(){
    //const question = "What is Superman's real name?"
    //const answer = prompt(question);
    //alert(`You answered ${answer}`);
    for(const [question,answer] of quiz){
        const response = prompt(question);
        if(response === answer){
            alert('Correct!');
            score++;
        } else {
            alert(`Wrong! The correct answer was ${answer}`);
        }
    }
    alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
}