import styled from "styled-components";

const StyledNav = styled.nav`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-bottom: 20px;
    background-color: rgba(0, 0, 0);
    padding: 10px;
    display: grid;
    grid-auto-rows: minmax(40px, auto);
    grid-gap: 20px;
    border: 1px solid black;
    img{
        max-width: 150px;
    }
    a{
        padding-top: 10px;
        color: #C1C1C1;
        text-decoration: none;
    }
    a:hover{
        color: #005288;
    }
    span{
        padding-top: 10px;
        color: #C1C1C1;
    }
    button{
        background: none;
        color: #C1C1C1;
        border: none;
        padding-bottom: 7px;
        cursor: pointer;
        outline: inherit;
    }
    span > span {
        color: #005288;
    }`
    ;

export default StyledNav
