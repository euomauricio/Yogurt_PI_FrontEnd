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
        .logo{
            width: 200px;
            padding: 25px,5px,25px,25px;
            cursor: pointer;
        }
        
    }
    .nav {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        
    a {
        cursor: pointer;

    }
        .SVG {
            border-radius:50%;
            border-style: solid;
            border-color: #dddddd;
            padding: 20px 20px;
            color: #fff;
            cursor: pointer;
            
        }
        
    }

`;