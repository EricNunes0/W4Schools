import { TutorialSectionsMapsMarksCircle } from "./TutorialSectionsMapsMarksCircle";
import { TutorialSectionsMapsMarksCircleRadius } from "./TutorialSectionsMapsMarksCircleRadius";

export default function TutorialSectionsMapsMarks(prop) {
    const marks = prop.marks;
    let mapMarks = [];
    if(marks) {
        for(const mark of marks) {
            let circle;
            if(mark.radius) {
                circle = (
                    <>
                    <TutorialSectionsMapsMarksCircleRadius radius = {mark.radius || 0}>
                        <p>{mark.radius}°</p>
                    </TutorialSectionsMapsMarksCircleRadius>
                    </>
                );
            };

            mapMarks.push(
                <div className = "tutorial-sections-maps-marks">
                    <TutorialSectionsMapsMarksCircle x = {mark.x} y = {mark.y} color = {mark.color || null}>
                        <p>{mark.x}, {mark.y}</p>
                        {circle}
                    </TutorialSectionsMapsMarksCircle>
                </div>
            );
        };
    };

    return (
        <div className = "tutorial-sections-maps-marks-divs">
            {mapMarks}
        </div>
    );
};