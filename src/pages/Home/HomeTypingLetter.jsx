import { HomeTitle } from "./HomeTitle";


export default function HomeTypingLetter(letter, animationduration, stepduration) {
    let id = `home-typing-letter-${Math.floor(Math.random() * (100000 * 100000))}`;
    return (
        <HomeTitle className = "home-typing-letters" id = {id} data-closed = "true" animationduration = {animationduration} stepduration = {stepduration} onLoad = {
            setTimeout(function() {
                document.querySelector(`#${id}`).dataset.closed = false;
            }, stepduration * 1000)
        }>{letter}</HomeTitle>
    )
};