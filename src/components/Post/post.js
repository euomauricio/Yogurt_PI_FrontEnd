import * as React from 'react';
import { Container } from './stylesPost'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle'
import Button from '@mui/material/Button';


const Post = () => {
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
                        <h5 className="infoPost"></h5>
                    </div>
                </div>

                <TextField
                    id="outlined-multiline-static"
                    label="Publique o que quiser"
                    multiline
                    rows={4}


                />
                <div className="buttonPost">
                    <Button variant="contained"></Button>
                </div>
            </div>




        </Box>
        </Container >
    )
}



export default Post