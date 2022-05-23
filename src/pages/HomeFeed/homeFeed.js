import Header from '../../components/Header';
import Post from '../../components/Post/post';
import { Container } from './stylesHomeFeed'

function HomeFeed() {
    return (
        <Container>
            <Header />

            <div className="conteudo">
                <div className="barraEsquerda">
                
                </div>


                <div className="barraCentral">
                <Post />

                </div>


                <div className="barraDireita"><h1>3</h1></div>
            </div>
        </Container>
            

        



    )

}

export default HomeFeed;