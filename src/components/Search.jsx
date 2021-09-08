import { TextField } from "@material-ui/core";

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField  
    variant="standard" 
    label="Search" 
    type='search' 
    fullWidth
    value={value} 
    onChange={onChange} />;
};

export default Search;