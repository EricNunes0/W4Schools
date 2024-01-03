import { HomeBackgroundStar } from "./HomeBackgroundStar";

function HomeBackgroundStarTag(top, left, animationDelay, gold) {
    return (
        <HomeBackgroundStar width = "20" height = "20" top = {top} left = {left} animationDelay = {animationDelay} data-gold = {gold}></HomeBackgroundStar>
    );
};

export default function HomeBackgroundStars(props) {
    let stars = [];
    for(let i = 0; i <= props.count - 1; i++) {
        let top = Math.floor(Math.random() * 98);
        let left = Math.floor(Math.random() * 98);
        let animationDelay = Math.floor(Math.random() * 5);
        let gold = Math.floor(Math.random() * 3) === 0 ? true : false;
        stars.push(HomeBackgroundStarTag(top, left, animationDelay, gold));
    };
    return (
        <div id = "home-background-stars-div">
            {stars}
        </div>
    );
};