import BootcampReasonsStyle from "./BootcampReasons.css";

export default function BootcampReasons() {
    return (
        <section id="html-bootcamp-section">
            <div style= {{backgroundColor:"#FFFFFF", color: "#000000", paddingTop: "30px", borderRadius: "5px", textAlign: "center"}}>
                <h3>Três motivos para aderir ao programa</h3>
                <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", maxWidth: "1300px", margin: "20px auto"}}>
                    <div className="html-bootcamp-columns">
                        <h4>1. Aprendizagem em tamanho reduzido</h4>
                        <h6>O conteúdo do treinamento foi desenvolvido para ser fácil de entender.</h6>
                    </div>
                    <div className="html-bootcamp-columns">
                        <h4>2. Aumente a sua empregabilidade</h4>
                        <h6>Documente suas habilidades e conhecimentos com certificações reconhecidas.</h6>
                    </div>
                    <div className="html-bootcamp-columns">
                        <h4>3. Economize tempo e dinheiro</h4>
                        <h6>Sem prazos. Estude em seu próprio tempo.</h6>
                    </div>
                </div>
                <div className="display-flex-row">
                    <a href="" style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#5075d0", width: "150px", height: "35px", color: "#f0f0f0", fontWeight: "100", textAlign: "center", borderRadius: "50px", marginTop: "5px", marginBottom: "15px", textDecoration: "none", padding: "5px", transition: "all 0.3s ease"}}>Saiba mais</a>
                </div>
            </div>
        </section>
    );
};