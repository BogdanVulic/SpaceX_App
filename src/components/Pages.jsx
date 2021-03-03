import StyledButton from './styled-components/StyledButton';

const Pages = ({ length, perPage, setMargins }) => {

    let pages = [...Array(Math.ceil(length / perPage)).keys()];
    return (
        <div>
            {pages.length > 1 && pages.map(page => <StyledButton key={page} onClick={() => {setMargins(prev => [page * perPage, page * perPage + perPage])}}>{page+1}</StyledButton>)}
        </div>
    )
}

export default Pages
