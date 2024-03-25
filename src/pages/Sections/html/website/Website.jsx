import WebsiteStyle from "./WebsiteStyle.css";

export default function Website() {
    return (
        <section id="html-website-section">
            <div id="html-website-section-first">
                <div id="html-website-section-first-content">
                    <div id="html-website-section-first-content-top">
                        <a href="" title="O que é o AI?"><img id="ai-ribbon" src="https://www.w3schools.com/spaces/kai_ribbon.png"></img></a>
                        <h1 id="html-website-section-first-content-top-title">Crie seu próprio site com HTML</h1>
                        <h4 id="html-website-section-first-content-top-details-description">Hospede sites com <span style={{color: "#FFC0C7"}}>W3Schools Spaces</span></h4>
                        <div id="html-website-section-first-content-top-spaces-button-div">
                            <a id="html-website-section-first-content-top-spaces-button" href="">Inicie gratuitamente</a>
                        </div>
                    </div>
                </div>
                <div id="html-website-section-first-row">
                    <div className="html-website-section-first-columns">
                        <div>
                            <img className="html-website-section-first-columns-img" src="https://www.w3schools.com/spaces/puzzle.svg"></img>
                            <div className="html-website-section-first-columns-divs">
                                <h4 className="html-website-section-first-columns-h4">Pratique</h4>
                                <p className="html-website-section-first-columns-p">Programação</p>
                            </div>
                        </div>
                    </div>
                    <div className="html-website-section-first-columns">
                        <div>
                            <img className="html-website-section-first-columns-img" src="https://www.w3schools.com/spaces/puzzle.svg"></img>
                            <div className="html-website-section-first-columns-divs">
                                <h4 className="html-website-section-first-columns-h4">AI</h4>
                                <p className="html-website-section-first-columns-p">Inteligência artifical</p>
                            </div>
                        </div>
                    </div>
                    <div className="html-website-section-first-columns">
                        <div>
                            <img className="html-website-section-first-columns-img" src="https://www.w3schools.com/spaces/boxes.svg"></img>
                            <div className="html-website-section-first-columns-divs">
                                <h4 className="html-website-section-first-columns-h4">Construa</h4>
                                <p className="html-website-section-first-columns-p">Projetos</p>
                            </div>
                        </div>
                    </div>
                    <div className="html-website-section-first-columns">
                        <div>
                            <img className="html-website-section-first-columns-img" src="https://www.w3schools.com/spaces/globe.svg"></img>
                            <div className="html-website-section-first-columns-divs">
                                <h4 className="html-website-section-first-columns-h4">Hospede</h4>
                                <p className="html-website-section-first-columns-p">De forma segura</p>
                            </div>
                        </div>
                    </div>
                </div>
                <svg style={{width: "100%", marginBottom: "-9px"}} viewBox="0 0 5950 394" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="wavepath0" fill-rule="evenodd" clip-rule="evenodd" d="M0 293.923V393.09H330.556H1983.33H3966.67L5950 393.091L5950 203.02C5288.89 244.34 4627.78 194.756 3966.67 128.645C3878.52 119.83 3790.37 110.722 3702.22 101.613C3129.26 42.4069 2556.3 -16.7992 1983.33 4.6869C1322.22 29.4786 661.111 161.701 330.556 227.812L0 293.923Z" fill="#D9EEE1"></path>
                </svg>
            </div>
            <div id="html-website-section-second">
                <div id="html-website-section-second-content">
                    <div id="html-website-section-second-content-top">
                        <h1 className="html-website-section-second-content-top-h1">Editor de código poderoso</h1>
                        <h5 className="html-website-section-second-content-top-h5">Front-end, Back-end ou Full-stack - a escolha é sua</h5>
                        <img id="html-website-section-second-content-top-img" src="https://www.w3schools.com/spaces/dynamicspaces.gif" alt="Dynamic Spaces" loading="lazy"></img>
                    </div>
                </div>
                <svg style={{width: "100%", marginBottom: "-9px"}} viewBox="0 0 5950 394" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="wavepath1" fill-rule="evenodd" clip-rule="evenodd" d="M0 293.923V393.09H330.556H1983.33H3966.67L5950 393.091L5950 203.02C5288.89 244.34 4627.78 194.756 3966.67 128.645C3878.52 119.83 3790.37 110.722 3702.22 101.613C3129.26 42.4069 2556.3 -16.7992 1983.33 4.6869C1322.22 29.4786 661.111 161.701 330.556 227.812L0 293.923Z" fill="#1d2a35"></path>
                </svg>
            </div>
        </section>
    );
};