import styled from 'styled-components'

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Material+Icons');
  
    font-family: 'Material Icons', sans-serif;
    padding: 0% 20% 0% 20%;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fbfbfb;
    .header {
        width: 100%;
        display: flex;
        justify-content: space-around;
        
        
    }
    #linkLogo{
            width: 50%;
        }
    .logo{
            width: 60%;
            padding: 25px,5px,25px,25px;
            cursor: pointer;
        }
        
    .nav {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        
    a {
        cursor: pointer;
 
        }
    }

    

/* icones svg */

    .css-tzssek-MuiSvgIcon-root {
        color: #f8bbee;
    }

    .MuiSvgIcon-fontSizeLarge{
        font-size: 100%;
        border-color: #f8bbee;
    }


    /* fim icones svg */
@media (max-width:992px){
    .MuiSvgIcon-fontSizeLarge{

    }

    .logo{
        width: 80%;
    }

}`