import HTMLJSON from "../pages/json/html.json";
import CSSJSON from "../pages/json/css.json";

export default function jsonSelect(lang) {
    let jsonSelected = null;
    let jsons = {
        html: {
            json: HTMLJSON
        },
        css: {
            json: CSSJSON
        }
    };

    if(jsons[lang]) {
        jsonSelected = jsons[lang].json;
    };
    return jsonSelected;
};