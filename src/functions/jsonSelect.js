import HTMLJSON from "../pages/json/html.json";
import CSSJSON from "../pages/json/css.json";
import JSJSON from "../pages/json/js.json";

export default function jsonSelect(lang) {
    let jsonSelected = null;
    let jsons = {
        html: {
            json: HTMLJSON
        },
        css: {
            json: CSSJSON
        },
        js: {
            json: JSJSON
        }
    };

    if(jsons[lang]) {
        jsonSelected = jsons[lang].json;
    };
    return jsonSelected;
};