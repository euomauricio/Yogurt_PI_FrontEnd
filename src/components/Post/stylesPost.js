import styled from 'styled-components'

export const Container = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: lightgray;

#outlined-multiline-static{
width: 100%;
}

.userBlockROW{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.userBlockCOLLUM{
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;

}

.infoPost{
margin: 0px;
padding: 0px;

}

.buttonPost{
    padding-top: 5px;
    display: flex;
    justify-content: flex-end;

    .css-sghohy-MuiButtonBase-root-MuiButton-root{
    background-color: #f8bbee;
}
}





/* feedPost */

.conteudoDaPostagem{
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow:hidden;

    .midiaDaPostagem{
        display: flex;
        justify-content:center;
        align-items: center;
        max-width: 100%;
        max-height: 100%;
        
    }

    .reacoesDaPostagem{
        margin: 20px;
        display: flex;
        justify-content:space-between;
        
    }

}


`