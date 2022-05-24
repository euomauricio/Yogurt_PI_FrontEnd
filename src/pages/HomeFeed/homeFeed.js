import Header from '../../components/Header';
import CentralFeed from '../../components/CentralFeed/centralFeed';
import { Container } from './stylesHomeFeed'

function HomeFeed() {
    return (
        <Container>
            <Header />

            <div className="conteudo">
                <div className="barraEsquerda">
                
                </div>


                <div className="barraCentral">
                    <CentralFeed />
                </div>


                <div className="barraDireita"><h1>3</h1></div>
            </div>
        </Container>
            

        



    )

}

export default HomeFeed;