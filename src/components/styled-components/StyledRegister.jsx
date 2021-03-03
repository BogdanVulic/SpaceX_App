import styled from 'styled-components';

const StyledRegister = styled.form`
    display: flex;
    flex-flow: column wrap;
    padding: 20px;
    color: black;
    justify-content: center;
    align-items: center;
    input{
        padding: 5px;
        color: black;
        width: 500px;
        margin: 5px;
    }
    #submit{
        width: 100px;
        height: 30px;
    }
`;
export default StyledRegister;