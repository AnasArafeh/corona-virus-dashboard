import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import { useState } from 'react';
import { IListTableSearch } from './Models/IListTableSearch';
import { dataTableStyles } from './Styles/DataTable';

const DataTableSearch = ({ rows, setFilteredRows, setCurrentPage }: IListTableSearch) => {

    const [search, setSearch] = useState("");

    const filterData = (e) => {
        let value = e.target.value;
        setSearch(value)
        setFilteredRows(rows?.filter(row => (row.Country.toLowerCase().includes(value.toLowerCase()) || row.CountryCode.toLowerCase().includes(value.toLowerCase()))))
        setCurrentPage(0);
    }

    return (
        <Typography component="div" style={dataTableStyles.search}>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search..' }}
                value={search}
                onChange={filterData}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Typography>
    );
}

export default DataTableSearch;
