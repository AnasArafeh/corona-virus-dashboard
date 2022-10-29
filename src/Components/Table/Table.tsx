
import { Box, Grid, Paper, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import React from 'react';
import { usePagination } from '../../Hooks/usePagination';
import SearchIcon from '@mui/icons-material/Search';


interface IListTableState {
    columns: any[],
    rows: any[],
}


const Table: React.FC<any> = (props: IListTableState) => {

    const { currentPage, rowsPerPage, handleChangePage, handleChangeRowsPerPage } = usePagination();

    return (
        <>
            {props.rows && props.rows.length === 0 ?
                <Grid container >
                    <Grid item xs={12}>
                        <SearchIcon />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            No results found
                        </Typography>
                    </Grid>
                </Grid>
                :
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {props.columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.rows
                                    .slice(currentPage * rowsPerPage, currentPage * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                {props.columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {column.format && typeof value === 'number'
                                                                ? column.format(value)
                                                                : value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={props.rows.length}
                        rowsPerPage={rowsPerPage}
                        page={currentPage}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        color="primary"
                    />
                </Paper>
            }
        </>
    );
}

export default Table;