import { HomeBackgroundStar } from "./HomeBackgroundStar";

function HomeBackgroundStarTag(top, left, animationduration, animationdelay, gold) {
    return (
        <HomeBackgroundStar width = "20" height = "20" top = {top} left = {left} animationduration = {animationduration} animationdelay = {animationdelay} data-gold = {gold} key = {Math.floor(Math.random() * (1000 * 1000))}></HomeBackgroundStar>
    );
};

export default function HomeBackgroundStars(props) {
    let stars = [];
    for(let i = 0; i <= props.count - 1; i++) {
        let top = Math.floor(Math.random() * 98);
        let left = Math.floor(Math.random() * 98);
        let animationduration = Math.floor(Math.random() * 3) + 1;
        let animationdelay = Math.floor(Math.random() * 5);
        let gold = Math.floor(Math.random() * 3) === 0 ? true : false;
        stars.push(HomeBackgroundStarTag(top, left, animationduration, animationdelay, gold));
    };
    return (
        <div id = "home-background-stars-div">
            {stars}
        </div>
    );
};