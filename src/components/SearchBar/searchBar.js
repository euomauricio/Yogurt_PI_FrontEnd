import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';


const SearchBar = () => {
  return (
    <Paper
      component="form"
      sx={{ height: '25px', display: 'flex', alignItems: 'center' }}
>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar no gutgut"
        inputProps={{ 'aria-label': 'buscar no yogurt' }}
      />
    </Paper>
  );
}
export default SearchBar;