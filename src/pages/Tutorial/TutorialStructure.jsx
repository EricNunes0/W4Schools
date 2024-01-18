export default function TutorialStructure(div) {
    let mains = [];
    if(div.divs) {
        for(let i = 0; i <= div.divs.length - 1; i++) {
            const subDiv = div.divs[i];
            let subDivs = [];
            if(subDiv.divs) {
                for(let j = 0; j <= subDiv.divs.length - 1; j++) {
                    const miniDiv = subDiv.divs[j];
                    subDivs.push(
                        <div className = "tutorial-structures-subdivs">
                            <header className = "tutorial-structures-headers">{miniDiv.header}</header>
                            <p className = "tutorial-structures-paragraphs">{miniDiv.text}</p>
                            <footer className = "tutorial-structures-footers">{miniDiv.footer}</footer>
                        </div>
                    );
                }
            };
            mains.push(
                <main className = "tutorial-structures-mains">
                    <header className = "tutorial-structures-headers">{subDiv.header}</header>
                    {subDivs}
                    <footer className = "tutorial-structures-footers">{subDiv.footer}</footer>
                </main>
            );
        };
    };

    return (
        <div className = "tutorial-structures">
            <header className = "tutorial-structures-headers">{div.header}</header>
            {mains}
            <footer className = "tutorial-structures-footers">{div.footer}</footer>
        </div>
    )
};