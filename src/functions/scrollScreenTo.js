export default function scrollScreenTo(element) {
    if(element) {
        element.scrollIntoView({behavior: 'smooth', block: 'start'});
    };
};