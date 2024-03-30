import ExamStyle from "./Exam.css";

export default function Exam() {
    return (
        <section id="html-exam-section">
            <main id="html-exam-section-main">
                <div id="html-exam-section-main-flex">
                    <div className="html-exam-section-main-divs">
                        <img id="html-exam-section-main-img" src="/images/certificado.png"></img>
                    </div>
                    <div className="html-exam-section-main-divs">
                        <div id="html-exam-section-main-text-div">
                            <h3>Oferecemos um programa de certificação online.</h3>
                            <h4 style={{margin: "10px 0"}}>A solução perfeita para profissionais ocupados que precisam equilibrar trabalho, família e construção de carreira.</h4>
                            <h5>Mais de 50 000 certificados já emitidos!</h5>
                            <p><a href="" class="html-website-section-buttons">Obter certificado »</a></p>
                        </div>
                    </div>
                </div>
            </main>
            <svg width="100%" height="70" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path id="wavepath" d="M0,0  L110,0C35,150 35,0 0,100z" fill="#202A35"></path>
            </svg>
            <footer id="html-exam-section-footer">
                <div id="html-exam-section-footer-content">
                    <div id="html-exam-section-footer-content-flex">
                        <div className="html-exam-section-footer-content-columns">
                            <img src="/svgs/html/examples/exam/code.svg"></img>
                            <h5>Documente suas habilidades</h5>
                            <h6>Melhore sua carreira</h6>
                        </div>
                        <div className="html-exam-section-footer-content-columns">
                            <img src="/svgs/html/examples/exam/university.svg"></img>
                            <h5>Estude em seu próprio ritmo</h5>
                            <h6>Economize tempo e dinheiro</h6>
                        </div>
                        <div className="html-exam-section-footer-content-columns">
                            <img src="/svgs/html/examples/exam/world.svg"></img>
                            <h5>Marca conhecida</h5>
                            <h6>Aprovado pelas principais empresas</h6>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};