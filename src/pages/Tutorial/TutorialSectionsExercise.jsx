import { TutorialExerciseDescription } from "./TutorialExerciseDescription";
import { TutorialExerciseMessage } from "./TutorialExerciseMessage";
import { TutorialExerciseSubmitButton } from "./TutorialExerciseSubmitButton";
import { TutorialExerciseTitle } from "./TutorialExerciseTitle";
import TutorialManagePages from "./TutorialManagePages";

export default function TutorialSectionsExercise(content) {
    content = content.content;
    let id = `tutorial-exercise-article-${Math.floor(Math.random() * (10000 * 10000))}`;

    let lines = []
    for(const line of content.lines) {
        lines.push(new TutorialManagePages().convertLine(line));
    };
    
    const idNumber = Math.floor(Math.random() * (10000 * 10000));
    const answer = content.answer || content.answers;
    const wrongAnimationDuration = 1;

    return (
        <form className = "tutorials-sections-exercises" id = {`tutorial-section-exercise-${idNumber}`}>
            <main className = "tutorials-exercises-mains">
                <header className = "tutorials-exercises-headers">
                    <TutorialExerciseTitle>{content.title}</TutorialExerciseTitle>
                    <TutorialExerciseDescription>{content.description}</TutorialExerciseDescription>
                </header>
                <article className = "tutorials-exercises-articles" id = {id}>
                    {lines}
                </article>
                <footer className = "tutorials-exercises-footers">
                    <TutorialExerciseSubmitButton id = {`tutorial-exercise-button-${idNumber}`} wrongduration = {wrongAnimationDuration} data-right = "false" data-wrong = "false"
                        type = "button"
                        onClick = {
                            function() {
                                function validateAnswers(answers, userAnswers) {
                                    console.log(answers)
                                    for(let i = 0; i <= answers.length - 1; i++) {
                                        console.log(answers[i], userAnswers[i])
                                        if(typeof answers[i] === "object") {
                                            if(!answers[i].includes(userAnswers[i])) {
                                                    return false;
                                            };
                                        } else if(typeof answers[i] === "string") {
                                            if(answers[i] !== userAnswers[i]) {
                                                return false;
                                            };
                                        };
                                    };
                                    return true;
                                };


                                function buttonAnimation(alert) {
                                    const exerciseButton = document.querySelector(`#tutorial-exercise-button-${idNumber}`);
                                    exerciseButton.dataset[alert] = "true";
                                    setTimeout(function() {
                                        exerciseButton.dataset[alert] = "false";
                                    }, wrongAnimationDuration * 1000);
                                };
                                const form = document.querySelector(`#tutorial-section-exercise-${idNumber}`);
                                const inputs = form.querySelectorAll("input");

                                let userAnswer = [];
                                inputs.forEach((input) => {userAnswer.push(input.value)});
                                const message = document.querySelector(`#tutorial-exercise-message-${idNumber}`);
                                if(validateAnswers(answer, userAnswer) === true) {
                                    message.innerHTML = "Resposta correta!";
                                    message.dataset.color = "green";
                                    buttonAnimation("right");
                                } else {
                                    message.innerHTML = "Resposta errada!";
                                    message.dataset.color = "red";
                                    buttonAnimation("wrong");
                                };
                            }
                        }
                    >Corrigir</TutorialExerciseSubmitButton>
                    <TutorialExerciseMessage id = {`tutorial-exercise-message-${idNumber}`} data-color = "white"></TutorialExerciseMessage>
                </footer>
            </main>
        </form>
    )
};