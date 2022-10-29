import { useState } from "react";

export const usePagination = () => {

    const [currentPage, setCurrentPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [count, setCount] = useState(0);

    const handleChangePage = (event: any, newPage: number) => {
        setCurrentPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setCurrentPage(0);
    };

    return {
        currentPage,
        rowsPerPage,
        count,
        setCurrentPage,
        setRowsPerPage,
        setCount,
        handleChangePage,
        handleChangeRowsPerPage
    };
}