import StyledSelect from './styled-components/StyledSelect';

const SelectPerPage = ({ setPerPage, setMargins }) => {
    return (
        <StyledSelect onChange={(e) => {
            setPerPage(Number(e.target.value));
            setMargins(prev => [0, Number(e.target.value)]);
        }}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
        </StyledSelect>
    )
}

export default SelectPerPage
