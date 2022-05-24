import * as React from 'react';
import { Container } from './stylesPost'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle'
import Button from '@mui/material/Button';
import IMG from '../../assets/samples/img.png'
import IMG2 from '../../assets/samples/img2.jpg'

const FeedPost = () => {
    return (
        <Container>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { p: 0, width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >

                <div className="userBlockCOLLUM">
                    <div className="userBlockROW">
                        <AccountCircle />
                        <div className="userBlockCOLLUM">
                            <h5 className="infoPost">Nome do mandrião</h5>
                            <h6 className="infoPost">data da postagem</h6>
                        </div>
                    </div>
                    <div className="conteudoDaPostagem">
                        <div className="textoDaPostagem"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue lobortis arcu, vitae euismod nunc vulputate at. Proin ac dui eget mauris vehicula tristique id ultrices libero.</p>
                        </div>
                        <div className="midiaDaPostagem"><img src={IMG2}></img></div>
                        <div className="reacoesDaPostagem">
                            <div className="curtidasDaPostagem"><p>Aqui vao as curtidas</p></div>
                            <div className="comentariosDaPostagem"><p>Aqui vao os comentarios</p></div>
                        </div>
                    </div>
                </div>


            </Box>
        </Container >
    )
}

export default FeedPost