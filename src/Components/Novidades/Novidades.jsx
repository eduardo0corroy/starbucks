import loja from "../../assets/image/grao.png";
import { Section, Div, Button } from "./style";

export default function Novidades() {
        
    return(
        <Section>
             <Div>
            <h5>PREPARAÇÃO</h5>
            <h4>Níveis de torra</h4>
            <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>
            <Button>SAIBA MAIS</Button>
            </Div>
            <div>
                <img src= {loja} alt="Grão de café" />
            </div>
            </Section>
    );
}