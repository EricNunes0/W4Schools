import WebsiteStyle from "./WebsiteStyle.css";

export default function Website() {
    return (
        <section id="html-website-section">
            <div className="html-website-sections" id="first" style={{backgroundImage: "url('/images/examples/html/website/background-1.png')"}}>
                <div className="html-website-section-contents">
                    <div className="html-website-section-content-tops" id="first">
                        <a href=""><img id="ribbon" src="/images/examples/html/website/ribbon.png"></img></a>
                        <h1 className="html-website-section-h1">Crie seu próprio site com HTML</h1>
                        <h4 className="html-website-section-h4">Hospede sites com <span style={{color: "#C0CAFF"}}>Spaces</span></h4>
                        <div className="display-flex-row">
                            <a id="html-website-section-first-content-top-spaces-button" href="">Inicie gratuitamente</a>
                        </div>
                    </div>
                </div>
                <div id="html-website-section-first-flex">
                    <div className="html-website-section-first-rows">
                        <div className="html-website-section-first-columns">
                            <img className="html-website-section-first-columns-img" src="/images/examples/html/website/puzzle.svg"></img>
                            <div className="html-website-section-first-columns-divs">
                                <h4 className="html-website-section-first-columns-h4">Pratique</h4>
                                <p className="html-website-section-first-columns-p">Programação</p>
                            </div>
                        </div>
                        <div className="html-website-section-first-columns">
                        <img className="html-website-section-first-columns-img" src="/images/examples/html/website/robot.svg"></img>
                            <div className="html-website-section-first-columns-divs">
                                <h4 className="html-website-section-first-columns-h4">AI</h4>
                                <p className="html-website-section-first-columns-p">Inteligência artifical</p>
                            </div>
                        </div>
                    </div>
                    <div className="html-website-section-first-rows">
                        <div className="html-website-section-first-columns">
                            <img className="html-website-section-first-columns-img" src="/images/examples/html/website/boxes.svg"></img>
                            <div className="html-website-section-first-columns-divs">
                                <h4 className="html-website-section-first-columns-h4">Construa</h4>
                                <p className="html-website-section-first-columns-p">Projetos</p>
                            </div>
                        </div>
                        <div className="html-website-section-first-columns">
                            <img className="html-website-section-first-columns-img" src="/images/examples/html/website/globe.svg"></img>
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
            <div className="html-website-sections light" id="second">
                <div className="html-website-section-contents">
                    <div className="html-website-section-content-tops" id="second">
                        <h1 className="html-website-section-h1 dark">Editor de código poderoso</h1>
                        <h5 className="html-website-section-h5 dark">Front-end, Back-end ou Full-stack - a escolha é sua</h5>
                        <img id="html-website-section-second-content-top-img" src="https://www.w3schools.com/spaces/dynamicspaces.gif" alt="Dynamic Spaces" loading="lazy"></img>
                    </div>
                </div>
                <svg style={{width: "100%", marginBottom: "-9px"}} viewBox="0 0 5950 394" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="wavepath1" fill-rule="evenodd" clip-rule="evenodd" d="M0 293.923V393.09H330.556H1983.33H3966.67L5950 393.091L5950 203.02C5288.89 244.34 4627.78 194.756 3966.67 128.645C3878.52 119.83 3790.37 110.722 3702.22 101.613C3129.26 42.4069 2556.3 -16.7992 1983.33 4.6869C1322.22 29.4786 661.111 161.701 330.556 227.812L0 293.923Z" fill="#1d2a35"></path>
                </svg>
            </div>
            <div className="html-website-sections dark" id="third">
                <div className="html-website-section-contents">
                    <div className="html-website-section-content-tops" id="third">
                        <h1 className="html-website-section-h1">Prática leva a perfeição</h1>
                        <h5 className="html-website-section-h5">Aprimore e domine suas habilidades de desenvolvimento com essas tecnologias usando o <b>Spaces</b>.</h5>
                        <img id="html-website-section-third-content-top-img" src="https://www.w3schools.com/spaces/languages.png"></img>
                        <div className="display-flex-row">
                            <a href="" className="html-website-section-buttons">Inicie gratuitamente</a>
                        </div>
                    </div>
                </div>
                <svg style={{width: "100%", marginBottom: "-10px"}} viewBox="0 0 5950 364" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="wavepath2" fill-rule="evenodd" clip-rule="evenodd" d="M141.726 0H0V363.61H5950L5950 181.806C5795.94 166.176 5642.96 136.068 5489.96 105.955C5359.82 80.3423 5229.67 54.7264 5098.82 38.0139C4817.85 3.93391e-06 4533.16 3.93391e-06 4251.77 38.0139C4120 54.8193 3988.58 80.6274 3857.44 106.382C3704.83 136.352 3552.59 166.25 3400.59 181.806C3115.49 210.729 2833.27 198.333 2549.41 166.517C2411.5 151.712 2272.59 133.223 2133.17 114.667C1988.55 95.4186 1843.39 76.0974 1698.23 60.7396C1417.26 28.9236 1133.39 16.5278 851.18 7.4375C566.076 0 283.452 0 141.726 0H141.726Z" fill="#D9EEE1"></path>
                </svg>
            </div>
            <div className="html-website-sections light" id="fourth">
                <div className="html-website-section-contents">
                    <div className="html-website-section-content-tops" id="fourth">
                        <h2 className="html-website-section-h2 dark">Economize tempo usando modelos prontos</h2>
                        <h5 className="html-website-section-h5 dark">Crie sites poderosos com apenas alguns cliques</h5>
                    </div>
                    <div className="html-website-section-templates">
                        <div className="html-website-section-template-items">
                            <img className="html-website-section-template-items-img" src="https://www.w3schools.com/spaces/portfolio_template.png"></img><br></br>
                            <a href="" className="html-website-section-buttons bold transparent">Portfolio</a>
                        </div>
                        <div className="html-website-section-template-items">
                            <img className="html-website-section-template-items-img" src="https://www.w3schools.com/spaces/blog_template.png"></img><br></br>
                            <a href="" className="html-website-section-buttons bold transparent">Blog</a>
                        </div>
                    </div>
                    <div className="html-website-section-templates">
                        <div className="html-website-section-template-items">
                            <img className="html-website-section-template-items-img" src="https://www.w3schools.com/spaces/webshop_template.png"></img><br></br>
                            <a href="" className="html-website-section-buttons bold transparent">Workshop</a>
                        </div>
                        <div className="html-website-section-template-items">
                            <img className="html-website-section-template-items-img" src="https://www.w3schools.com/spaces/tutor_template.png"></img><br></br>
                            <a href="" className="html-website-section-buttons bold transparent">Tutorial</a>
                        </div>
                    </div>
                    <a href="" className="html-website-section-buttons bold transparent">Explorar modelos</a>
                    <br></br>
                    <a href="" className="html-website-section-buttons dark">Inicie gratuitamente</a>
                </div>
                <svg style={{width: "100%", marginBottom: "-10px"}} viewBox="0 0 5950 410" fill="none" xmlns="http://www.w3.org/2000/svg" id="kai-landed">
                    <path id="wavepath3" fill-rule="evenodd" clip-rule="evenodd" d="M141.726 45.4514L0 0V409.063H140.486H851.18H1698.23H2549.41H3400.59H4251.77H5098.82H5950V189.243C5938.41 191.46 5926.82 193.683 5915.25 195.905C5642.01 248.332 5371.94 300.154 5098.82 265.271C4981.35 249.378 4863.23 216.296 4744.97 183.176C4580.38 137.076 4415.51 90.9028 4251.77 90.9028C4061.21 90.9028 3871.39 151.819 3682.05 212.577C3588.12 242.721 3494.31 272.826 3400.59 295.434C3115.49 363.611 2833.27 363.611 2549.41 318.16C2445.26 301.311 2340.53 278.217 2235.46 255.045C2057.07 215.705 1877.65 176.138 1698.23 166.517C1557.84 159.704 1416.73 170.738 1275.46 181.783C1134 192.843 992.382 203.916 851.18 197.094C567.058 181.858 285.398 91.5281 143.195 45.9227L141.726 45.4514Z" fill="#282A35"></path>
                </svg>
            </div>
            <div className="html-website-sections dark" id="fifth" style={{backgroundImage: "url('/images/examples/html/website/space-background.gif')"}}>
                <div className="html-website-section-contents">
                    <div className="html-website-section-content-tops" id="fifth">
                        <div id="html-website-section-fifth-content-top-div">
                            <div id="html-website-section-fifth-content-top-left">
                                <h1 className="html-website-section-fifth-content-top-left-h1">k<span style={{fontSize: "150px"}}>AI</span></h1>
                                <h4 className="html-website-section-h4" style={{margin: "24px 0"}}>Acabou de chegar no <span style={{color: "#C0CAFF"}}>Spaces</span></h4>
                                <p className="html-website-section-p">Aprenda a codificar com mais eficiência<br></br> e de forma inteligente com kAI - AI tutor</p>
                                <a className="html-website-section-buttons" href="">Iniciar gratuitamente</a>
                            </div>
                            <img id="html-website-section-fifth-content-top-img" src="https://www.w3schools.com/images/planet2.png"></img>
                            <div id="html-website-section-fifth-content-top-right">
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#D9EEE1" class="bi bi-robot" viewBox="0 0 16 16">
                                    <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"></path>
                                    <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"></path>
                                </svg>
                                <p className="html-website-section-modals">Oi! Eu sou kAI, Tutor de IA...</p>
                                <p className="html-website-section-modals">Sinta-se à vontade para me fazer qualquer pergunta relacionada à codificação e farei o possível para ajudá-lo.</p>
                                <p className="html-website-section-modals">Posso ajudá-lo a verificar se há erros no seu código, melhorar a estrutura do seu código, explicar conceitos de codificação de forma clara e compreensível e muito mais...</p>
                                <p className="html-website-section-modals">Posso até criar sites completos para você com base em suas informações, então o que você está esperando?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="html-website-sections blue" id="sixth">
                <div className="html-website-section-contents">
                    <div className="html-website-section-content-tops" id="sixth">
                        <h2 className="html-website-section-h2">Super simples de compartilhar to Share</h2>
                        <h5 className="html-website-section-h5">Hospede e publique sites rapidamente</h5>
                        <div>
                            <article id="html-website-section-sixth-content-top-article">
                                <div>
                                    <h3 className="html-website-section-h3">Incluído gratuitamente em todos os planos</h3>
                                    <h6 className="html-website-section-h6">Subdomínio, hospedagem e certificado SSL.</h6>
                                    <h3 className="html-website-section-h3">Quer domínios personalizados?</h3>
                                    <h6 className="html-website-section-h6">Compre um domínio ou transfira um já existente e conecte-o ao seu espaço.</h6>
                                </div>
                                <img id="html-website-section-sixth-content-top-img" src="https://www.w3schools.com/spaces/domain.png"></img>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <div className="html-website-sections dark" id="seventh">
                <svg style={{width: "100%", marginTop: "-150px"}} viewBox="0 0 5950 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M330.556 118.216L0 152.511V193.831H330.556H1983.33H3966.67H5950V0.869141C5804.56 6.95963 5659.11 13.7101 5513.67 20.4605C4998 44.3939 4482.33 68.3273 3966.67 62.8483C3674.12 60.4714 3381.57 47.8189 3089.02 35.1665C2720.46 19.2265 2351.9 3.2864 1983.33 7.89345C1322.22 16.1573 661.111 82.2684 330.556 118.216Z" fill="#202A35"></path>
                </svg>
                <div className="html-website-section-contents">
                    <div>
                    <h2>Como funciona</h2>
                    <div id="html-website-section-seventh-content-top-article">
                        <section>
                            <img src="https://www.w3schools.com/spaces/space.svg"></img>
                            <div class="step">1. Junte-se <br></br>- e crie um espaço</div>
                        </section>
                        <section>
                            <img src="https://www.w3schools.com/spaces/templates.svg"></img>
                            <div class="step">2. Escolha um modelo<br></br>- ou comece do zero</div>              
                        </section>
                        <section>
                            <img src="https://www.w3schools.com/spaces/editor.svg"></img>
                            <div class="step">3. Edite o código diretamente<br></br>no seu navegador</div>
                        </section>
                        <section>
                            <img src="https://www.w3schools.com/spaces/world.svg"></img>
                            <div class="step">4. Compartilhe seu site<br></br>com o mundo</div>
                        </section>
                    </div>
                    </div>
                </div>
            </div>
            <div className="html-website-sections light" id="eighty">
                <div className="html-website-section-contents">
                    <h2 className="html-website-section-h2 dark">Codificação facilitada</h2>
                    <h6 className="html-website-section-h6 dark">Tudo ao seu alcance com nosso <b>editor de código</b></h6>
                    <div className="html-website-section-content-tops" id="eighty">
                        <p className="html-website-section-eighty-content-top-p"><img className="html-website-section-eighty-content-top-img" src="/images/examples/html/website/check.svg"></img><b>Baseado em nuvem</b></p>
                        <p className="html-website-section-eighty-content-top-p"><img className="html-website-section-eighty-content-top-img" src="/images/examples/html/website/check.svg"></img><b>Terminal &amp; Log</b></p>
                        <p className="html-website-section-eighty-content-top-p"><img className="html-website-section-eighty-content-top-img" src="/images/examples/html/website/check.svg"></img><b>Como fazer bibliotecas</b></p>
                        <p className="html-website-section-eighty-content-top-p"><img className="html-website-section-eighty-content-top-img" src="/images/examples/html/website/check.svg"></img><b>Banco de dados</b></p>
                        <p className="html-website-section-eighty-content-top-p"><img className="html-website-section-eighty-content-top-img" src="/images/examples/html/website/check.svg"></img><b>Explorador de arquivos</b></p>
                        <p className="html-website-section-eighty-content-top-p"><img className="html-website-section-eighty-content-top-img" src="/images/examples/html/website/check.svg"></img><b>Gerenciador de pacotes</b></p>
                        <p className="html-website-section-eighty-content-top-p"><img className="html-website-section-eighty-content-top-img" src="/images/examples/html/website/check.svg"></img><b>Análises</b></p>
                        <p className="html-website-section-eighty-content-top-p"><img className="html-website-section-eighty-content-top-img" src="/images/examples/html/website/check.svg"></img><b>Gerenciador de ambiente</b></p>
                    </div>
                </div>
                <a className="html-website-section-buttons" href="">Inicie gratuitamente</a>
            </div>
            <div className="html-website-sections dark" id="nineth">
                <div className="html-website-section-contents">
                    <div className="html-website-section-content-tops" id="nineth">
                        <article className="html-website-section-content-tops-articles">
                            <div>
                                <h6 className="html-website-section-h6">Baseado em nuvem</h6>
                                <h3 className="html-website-section-h3">Economize tempo e dinheiro.</h3>
                                <h6 className="html-website-section-h6">Nenhuma instalação necessária. Acesse tudo no seu navegador. Comece em segundos.</h6>
                                <a className="html-website-section-buttons" href="">Inicie gratuitamente</a>
                            </div>
                            <img className="html-website-section-content-tops-articles-img" src="https://www.w3schools.com/spaces/spaces.png"></img>
                        </article>
                    </div>
                </div>
            </div>
            <div className="html-website-sections light" id="tenth">
                <div className="html-website-section-contents">
                    <div className="html-website-section-content-tops" id="tenth">
                        <article className="html-website-section-content-tops-articles reverse">
                            <div>
                                <h6 className="html-website-section-h6 dark">Explorador de arquivos</h6>
                                <h3 className="html-website-section-h3 dark">Todos os seus arquivos em um só lugar.</h3>
                                <h6 className="html-website-section-h6 dark">Encontre e alterne facilmente entre seus arquivos de código sem sair do editor de código.</h6>
                                <a className="html-website-section-buttons dark" href="">Inicie gratuitamente</a>
                            </div>
                            <img className="html-website-section-content-tops-articles-img" src="https://www.w3schools.com/spaces/files.png"></img>
                        </article>
                    </div>
                </div>
            </div>
            <div className="html-website-sections blue" id="eleventh">
                <div className="html-website-section-contents">
                    <div className="html-website-section-content-tops" id="eleventh">
                        <article className="html-website-section-content-tops-articles">
                            <div>
                                <h6 className="html-website-section-h6">Terminal e Log</h6>
                                <h3 className="html-website-section-h3">Corrija seu código rapidamente.</h3>
                                <h6 className="html-website-section-h6">Monitore seu código, depure e solucione problemas de seu trabalho durante o desenvolvimento.</h6>
                                <a className="html-website-section-buttons dark" href="">Inicie gratuitamente</a>
                            </div>
                            <img className="html-website-section-content-tops-articles-img" src="https://www.w3schools.com/spaces/debug.png"></img>
                        </article>
                    </div>
                </div>
            </div>
            <div className="html-website-sections light" id="twelfth">
                <div className="html-website-section-contents">
                    <div className="html-website-section-content-tops" id="twelfth">
                        <article className="html-website-section-content-tops-articles reverse">
                            <div>
                                <h6 className="html-website-section-h6 dark">Banco de dados</h6>
                                <h3 className="html-website-section-h3 dark">Obtenha visibilidade total dos dados.</h3>
                                <h6 className="html-website-section-h6 dark">Encontre e visualize todos os dados armazenados no seu site. A qualquer hora, de qualquer lugar.</h6>
                                <a className="html-website-section-buttons" href="">Inicie gratuitamente</a>
                            </div>
                            <img className="html-website-section-content-tops-articles-img" src="https://www.w3schools.com/spaces/database.png"></img>
                        </article>
                    </div>
                </div>
            </div>
            <div className="html-website-sections blue" id="thirteenth">
                <div className="html-website-section-contents">
                    <div className="html-website-section-content-tops" id="thirteenth">
                        <article className="html-website-section-content-tops-articles">
                            <div>
                                <h6 className="html-website-section-h6">Gerenciamento de ambiente</h6>
                                <h3 className="html-website-section-h3">Maior controle e segurança</h3>
                                <h6 className="html-website-section-h6">Controle os pontos de acesso do seu site para estabelecer conexões seguras.</h6>
                                <a className="html-website-section-buttons dark" href="">Inicie gratuitamente</a>
                            </div>
                            <img className="html-website-section-content-tops-articles-img" src="https://www.w3schools.com/spaces/env.png"></img>
                        </article>
                    </div>
                </div>
            </div>
            <div className="html-website-sections light" id="fourteenth">
                <div className="html-website-section-contents">
                    <div className="html-website-section-content-tops" id="fourteenth">
                        <article className="html-website-section-content-tops-articles reverse">
                            <div>
                                <h6 className="html-website-section-h6 dark">Gerenciador de pacotes</h6>
                                <h3 className="html-website-section-h3 dark">Encontre o que você precisa com mais rapidez</h3>
                                <h6 className="html-website-section-h6 dark">Pesquise e instale frameworks e bibliotecas com apenas um clique.</h6>
                                <a className="html-website-section-buttons" href="">Inicie gratuitamente</a>
                            </div>
                            <img className="html-website-section-content-tops-articles-img" src="https://www.w3schools.com/spaces/package.png"></img>
                        </article>
                    </div>
                </div>
            </div>
            <div className="html-website-sections blue" id="fifteenth">
                <div className="html-website-section-contents">
                    <div className="html-website-section-content-tops" id="fifteenth">
                        <article className="html-website-section-content-tops-articles">
                            <div>
                                <h6 className="html-website-section-h6">Análise do usuário</h6>
                                <h3 className="html-website-section-h3">Obtenha informações de tráfego</h3>
                                <h6 className="html-website-section-h6">Aprenda com os visitantes do seu site para oferecer uma melhor experiência ao usuário.</h6>
                                <a className="html-website-section-buttons dark" href="">Inicie gratuitamente</a>
                            </div>
                            <img className="html-website-section-content-tops-articles-img" src="https://www.w3schools.com/spaces/analytics.png"></img>
                        </article>
                    </div>
                </div>
            </div>
            <div className="html-website-sections" id="sixteenth">
                <div style={{backgroundColor: "rgba(40, 42, 54, 0.69)"}}>
                    <svg id="html-website-section-sixteenth-content-top-svg" viewBox="0 0 5950 365" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 123.957V0.00038491H5950L5950 151.641C5619.44 172.921 5288.89 210.418 4958.33 247.915C4627.78 285.413 4297.22 322.91 3966.67 344.19C3305.56 384.27 2644.44 359.478 1983.33 309.895C1322.22 260.311 661.111 194.2 330.556 158.252L0 123.957Z" fill="#5075d0"></path>
                    </svg>
                    <div className="html-website-section-contents">
                        <div className="html-website-section-content-tops" id="sixteenth">
                            <h2 className="html-website-section-h2">Inspire-se</h2>
                            <h4 className="html-website-section-h4"><b>Conecte</b> e <b>compartilhe</b> seu site com a comunidade para obter feedback instantâneo</h4>
                            <a className="html-website-section-buttons" href="">Inicie gratuitamente</a>
                        </div>
                    </div>
                </div>
                <div className="html-website-section-content-bottoms" id="sixteenth">
                    <img id="html-website-section-sixteenth-content-bottom-img" src="https://www.w3schools.com/spaces/discord.png"></img>
                    <svg id="html-website-section-sixteenth-content-bottom-svg" viewBox="0 0 5950 372" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="wavepath4" fill-rule="evenodd" clip-rule="evenodd" d="M110.323 220.233L0 280.973V371.875H111.563H661.111H1322.22H1983.33H2644.44H3305.56H3966.67H4627.78H5288.89H5950V273.535C5731.01 326.424 5509.12 326.424 5288.89 303.698C5069.9 280.973 4848.01 235.521 4627.78 167.344C4582.25 153.169 4536.59 138.011 4490.85 122.826C4316.59 64.9747 4141.11 6.71801 3966.67 0.826898C3798.76 -6.14263 3629.16 38.3802 3459.91 82.8117C3408.41 96.3317 3356.94 109.843 3305.56 121.893C3086.56 173.542 2864.68 206.598 2644.44 235.521C2622.76 238.385 2601.04 241.29 2579.31 244.198C2381.52 270.655 2181.76 297.378 1983.33 296.261C1764.34 297.5 1542.45 264.445 1322.22 197.507C1271.46 181.417 1220.54 163.505 1169.53 145.559C1000.45 86.0849 830.294 26.2288 661.111 30.9901C450.288 36.9568 236.784 152.062 123.085 213.359C118.679 215.734 114.423 218.029 110.323 220.233Z" fill="#DAF0E0"></path>
                    </svg>                      
                </div>
            </div>
            <div className="html-website-sections" id="seventeenth">
                <div style={{paddingTop: "50px"}}>
                    <h2 className="html-website-section-h2">Planos de assinatura</h2>
                </div>
                <div>
                    <h6 className="html-website-section-h6">Desbloqueie possibilidades com o Spaces</h6>
                </div>
                <div style={{position: "relative", width: "100%", marginBottom: "90px"}}>
                    <div style={{position: "absolute", top: "20px", textAlign: "center", width: "100%"}}>
                        Mensal&nbsp;&nbsp;&nbsp;
                        <img id="html-website-section-seventeenth-toggle" src="https://www.w3schools.com/spaces/toggle.png"></img>
                        &nbsp;&nbsp;&nbsp;Anual<span> (economize até 33%)</span>
                    </div>
                </div>
                <main id="html-website-section-seventeenth-main">
                    <article id="html-website-section-seventeenth-main-article">
                        <div id="html-website-section-seventeenth-main-article-flex">
                            <div className="html-website-section-seventeenth-main-article-columns">
                                <div className="html-website-section-seventeenth-main-article-columns-tops">
                                    <h2 className="html-website-section-h2" style={{marginTop: "20px"}}>Grátis</h2>
                                    <h6 className="html-website-section-h6" style={{marginTop: "10px", marginBottom: "10px"}}>Codifique no navegador<br></br>Nenhuma configuração necessária</h6>
                                    <img src="/images/fox.png" style={{width: "64px"}}></img>
                                    <h6 className="html-website-section-h6" style={{marginTop: "10px", marginBottom: "10px"}}>Você terá:</h6>
                                    <h2 className="html-website-section-h2">1</h2>
                                    <span>Espaço básico<br></br>+</span>
                                    <h2 className="html-website-section-h2">3</h2>                                
                                    <span>Formulários de emprego<br></br>+</span>                              
                                    <h2 className="html-website-section-h2">100</h2>
                                    <img src="/images/examples/html/website/check.svg" style={{marginRight: "5px"}}></img><span>kAI tokens</span>
                                </div>
                                <div className="html-website-section-seventeenth-main-article-columns-lists-divs">
                                    <ul>
                                        <li>Meu aprendizado</li>
                                        <li>Perfil público</li>
                                        <li>Comunidade</li>
                                        <li>Subdomínio</li>
                                        <li>Certificado SSL</li>
                                    </ul>
                                </div>
                                <div className="html-website-section-seventeenth-main-article-columns-footers">
                                    <a className="html-website-section-buttons" href="">Obter</a>
                                </div>
                            </div>
                            <div className="html-website-section-seventeenth-main-article-columns">
                                <div className="html-website-section-seventeenth-main-article-columns-tops">
                                    <h2 className="html-website-section-h2" style={{marginTop: "20px"}}>Pro</h2>
                                    <h6 className="html-website-section-h6" style={{marginTop: "10px", marginBottom: "10px"}}>Crie e hospede seus<br></br>projetos de front-end</h6>
                                    <div className="html-website-section-seventeenth-main-article-columns-tops-prices">
                                        <span>R$4.99</span><span>/mês</span>
                                    </div>
                                    <h6 className="html-website-section-h6" style={{marginTop: "10px", marginBottom: "10px"}}>Tudo de graça + atualizado para</h6>
                                    <h2 className="html-website-section-h2">10</h2>
                                    <span>Espaços básicos<br></br>+</span>
                                    <h2 className="html-website-section-h2">10</h2>                                
                                    <span>Formulários de emprego<br></br>+</span>                              
                                    <h2 className="html-website-section-h2">1000</h2>
                                    <img src="/images/examples/html/website/check.svg" style={{marginRight: "5px"}}></img><span>kAI tokens</span>
                                </div>
                                <div className="html-website-section-seventeenth-main-article-columns-lists-divs">
                                    <ul>
                                        <li>Navegação sem anúncios</li>
                                        <li>Análise de dados</li>
                                        <li>Baixar Zip</li>
                                        <li>Modo privado</li>
                                        <li>Suporte prioritário</li>
                                        <li>Suporte prioritário</li>
                                    </ul>
                                </div>
                                <div className="html-website-section-seventeenth-main-article-columns-footers">
                                    <a className="html-website-section-buttons" href="">Obter</a>
                                </div>
                            </div>
                            <div className="html-website-section-seventeenth-main-article-columns invert">
                                <div className="html-website-section-seventeenth-main-article-columns-tops">
                                    <h2 className="html-website-section-h2 dark" style={{marginTop: "20px"}}>Premium</h2>
                                    <h6 className="html-website-section-h6 dark" style={{marginTop: "10px", marginBottom: "10px"}}>Obtenha suporte de back-end<br></br>para criar uma aplicação web</h6>
                                    <div className="html-website-section-seventeenth-main-article-columns-tops-prices">
                                        <span>R$14.99</span><span>/mês</span>
                                    </div>
                                    <h6 className="html-website-section-h6 dark" style={{marginTop: "10px", marginBottom: "10px"}}>Tudo do <b>Pro</b> + atualizado para</h6>
                                    <h2 className="html-website-section-h2 dark">15</h2>
                                    <span>Espaços básicos<br></br>+</span>
                                    <h2 className="html-website-section-h2 dark">20</h2>                                
                                    <span>Formulários de emprego<br></br>+</span>                              
                                    <h2 className="html-website-section-h2 dark">50000</h2>
                                    <img src="/images/examples/html/website/check.svg" style={{marginRight: "5px"}}></img><span>kAI tokens</span>
                                    <span><br></br>+</span>
                                    <h2 className="html-website-section-h2 dark">1</h2>  
                                    <h5 className="html-website-section-h5 dark">Espaço Fullstack</h5>  
                                    <h6 className="html-website-section-h6 dark">+ Banco de dados</h6>  
                                </div>
                                <div className="html-website-section-seventeenth-main-article-columns-footers">
                                    <a className="html-website-section-buttons dark" href="">Obter</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <section id="html-website-section-seventeenth-main-section">
                        <div id="html-website-section-seventeenth-main-section-flex" style={{padding: "0 8px"}}>
                            <div className="html-website-section-seventeenth-main-section-columns">
                                <h4 className="html-website-section-h4">NOVO NEGÓCIO DE ASSINANTE</h4>
                                <h2 className="html-website-section-h2" style={{color: "#ffc0ca"}}>25% DE DESCONTO</h2>
                                <h4 className="html-website-section-h4">POR UM ANO</h4>
                            </div>
                            <div className="html-website-section-seventeenth-main-section-columns">
                                <h4 className="html-website-section-h4" style={{color: "#ffc0ca"}}>USE PROMO CODE:</h4><br></br>
                                <span className="html-website-section-h4 dark" style={{backgroundColor: "#ffc0ca", padding: "10px 15px", borderRadius: "50px"}}>SPACES25</span>
                            </div>
                        </div>
                    </section>
                    <div style={{marginBottom: "70px", marginTop: "45px"}}>
                        <h4 className="html-website-section-h4" style={{marginBottom: "10px", marginTop: "10px"}}>Quer domínios personalizados?</h4>
                        <h6  className="html-website-section-h6" style={{marginBottom: "30px"}}>Você também pode comprar um domínio ou conectar um já existente.</h6>
                        <h4 className="html-website-section-h4">Quer adicionar vários usuários?</h4>
                        <a href="" target="_blank" className="html-website-section-h6" style={{color: "#5075d0", textDecoration: "none"}}>Leia aqui como entrar em contato</a>
                    </div>
                </main>
            </div>
            <div className="html-website-sections" id="eighteenth">
                <div className="html-website-section-contents">
                    <div className="html-website-section-content-tops" id="eighteenth">
                        <h2 className="html-website-section-h2" style={{color: "#ffc0ca"}}>Perguntas mais comuns</h2><br></br>
                        <button className="html-website-section-eighteenth-questions"><b>Qual é a diferença entre os espaços 'Basic' e 'Full Stack'?</b></button>
                        <div className="html-website-section-eighteenth-panels">
                            <p>Com o Basic Spaces, você pode criar sites front-end. Já com Fullstack Spaces, você pode criar sites front-end e back-end.</p>
                        </div>   
                        <button className="html-website-section-eighteenth-questions"><b>Quais linguagens de programação estão incluídas nos espaços 'Basic' e 'Full Stack'?</b></button>
                        <div className="html-website-section-eighteenth-panels">
                            <p>Os espaços básicos incluem HTML, CSS e Javascript. Full Stack Spaces inclui tudo em Basic Spaces, além de PHP, Python, React.js, Vue.js, Node.js, Handlebars e Django.</p>
                        </div>
                        <button className="html-website-section-eighteenth-questions"><b>Como as assinaturas são renovadas?</b></button>
                        <div className="html-website-section-eighteenth-panels">
                            <p>Sua assinatura será renovada automaticamente todos os meses.</p>
                        </div>
                        <button className="html-website-section-eighteenth-questions"><b>O que acontece se eu cancelar minha assinatura?</b></button>
                        <div className="html-website-section-eighteenth-panels">
                            <p>Seu acesso a todos os benefícios pelo período pago continuará. No entanto, a assinatura não será renovada automaticamente.</p>
                        </div>
                        <button className="html-website-section-eighteenth-questions"><b>Posso assinar várias contas ao mesmo tempo?</b></button>
                        <div className="html-website-section-eighteenth-panels">
                            <p>Para assinar contas para vários usuários, você pode entrar em contato com nome@exemplo.com</p>
                        </div>
                    </div>
                    <h5 className="html-website-section-h5">Tem outras perguntas? <a href="" target="_blank" style={{color: "#ffffff"}}>Visite nossa página de suporte</a></h5>
                    <a href="" className="html-website-section-buttons">Assine por R$4.99/mês</a>
                    <h6 className="html-website-section-h6">Cancele quando quiser.</h6><br></br>
                </div>
            </div>
        </section>
    );
};