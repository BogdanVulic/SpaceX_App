import styled from "styled-components";

const StyledLaunches = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 2px;
    margin: 10px;
    align-items: center;
    justify-items: center;
    .arrow {
        border: solid rgb(126, 126, 126);
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 10px;
    }
    .right{
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
    }
    .left {
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
    }
    .right:hover, .left:hover{
        border-color: #3234C2;
        cursor: pointer;
    }
      
`;

export default StyledLaunches
