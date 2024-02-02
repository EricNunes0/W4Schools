import TutorialSectionsMapsMarks from "./TutorialSectionsMapsMarks";
import { TutorialSectionsMapsTouch } from "./TutorialSectionsMapsTouch";

export default function TutorialSectionsMaps(prop) {
    const content = prop.content;
    let src = content.src || null;
    let usemap = content.usemap || null;
    let marks = content.marks || null;
    let mapAreas = [];
    if(content.areas) {
        for(const area of content.areas) {
            const areaShape = area.shape || null;
            const areaCoords = area.coords || null;
            const areaAlt = area.alt || null;
            const areaTitle = area.title || null;
            const areaHref = area.href || null;
            const areaTarget = area.target || null;
            mapAreas.push(
                <area shape={areaShape} coords={areaCoords} alt={areaAlt} title={areaTitle} href={areaHref} target={areaTarget}></area>
            );
        };
    };
    let id = Math.floor(Math.random() * (1000 * 1000));
    let mapDivId = `tutorial-sections-map-div-${id}`;
    let mapId = `tutorial-sections-map-${id}`;
    let mapImageId = `tutorial-sections-map-image-${id}`;
    let mapTouchIconId = `tutorial-sections-map-touch-icon-${id}`;

    function mapResize() {
        const mapDiv = document.querySelector(`#${mapDivId}`);
        const map = document.querySelector(`#${mapId}`);
        const mapImage = document.querySelector(`#${mapImageId}`);
        window.addEventListener("resize", () => {
            const mapDivWidth = mapDiv.getBoundingClientRect().width;
            const mapImageWidth = mapImage.getBoundingClientRect().width;
            console.log(mapDivWidth, mapImageWidth)
            if(mapDivWidth < mapImageWidth) {
                mapDiv.dataset.mouse = true;
            } else {
                mapDiv.dataset.mouse = false;
            };
        });
    };

    return (
        <div className = "tutorial-sections-maps-divs" id = {mapDivId} key = {mapDivId} onLoad={() => {mapResize()}} data-mouse = "false">
            <img className = "tutorial-sections-maps-images" id = {mapImageId} key = {mapImageId}  src = {src} useMap = {`#${usemap}`} style={{borderRadius: "10px"}}></img>
            <map className = "tutorial-sections-maps" id = {mapId} key = {mapId}  name = {usemap}>
                {mapAreas}
            </map>
            <TutorialSectionsMapsMarks marks = {marks}></TutorialSectionsMapsMarks>
            <TutorialSectionsMapsTouch className = "tutorial-sections-maps-touch-icons" id = {mapTouchIconId}></TutorialSectionsMapsTouch>
        </div>
    );
};