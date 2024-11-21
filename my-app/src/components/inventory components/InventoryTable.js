import React, { useState } from 'react';
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
    Paper,
    Toolbar,
    Typography,
    Checkbox,
    Button,
    Select,
    MenuItem,
    TextField,
    IconButton,
    FormControl,
    InputLabel,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { visuallyHidden } from '@mui/utils';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const data = [
    { id: 1, name: 'iPhone 13 Pro', category: 'Gadgets', unitPrice: '₦725,000.00', inStock: 8, discount: '₦0.00', totalValue: '₦5,800,000.00', status: 'Published' },
    { id: 2, name: 'Samsung Galaxy S22', category: 'Gadgets', unitPrice: '₦640,000.00', inStock: 5, discount: '₦15,000.00', totalValue: '₦3,200,000.00', status: 'Published' },
    { id: 3, name: 'HP Pavilion 15', category: 'Laptops', unitPrice: '₦450,000.00', inStock: 12, discount: '₦0.00', totalValue: '₦5,400,000.00', status: 'Published' },
    { id: 4, name: 'Dell XPS 13', category: 'Laptops', unitPrice: '₦500,000.00', inStock: 3, discount: '₦0.00', totalValue: '₦1,500,000.00', status: 'Published' },
    { id: 5, name: 'Apple Watch Series 7', category: 'Watches', unitPrice: '₦250,000.00', inStock: 10, discount: '₦0.00', totalValue: '₦2,500,000.00', status: 'Published' },
    { id: 6, name: 'Samsung Galaxy Watch 4', category: 'Watches', unitPrice: '₦200,000.00', inStock: 7, discount: '₦0.00', totalValue: '₦1,400,000.00', status: 'Published' },
    // Add more sample data as needed
];

const headCells = [
    { id: 'name', numeric: false, label: 'Product Name' },
    { id: 'category', numeric: false, label: 'Category' },
    { id: 'unitPrice', numeric: false, label: 'Unit Price' },
    { id: 'inStock', numeric: true, label: 'In Stock' },
    { id: 'discount', numeric: false, label: 'Discount' },
    { id: 'totalValue', numeric: false, label: 'Total Value' },
    { id: 'action', numeric: false, label: 'Action' },
    { id: 'status', numeric: false, label: 'Status' },
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

export default function InventoryTable() {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('name');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterCategory, setFilterCategory] = useState('');

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = data.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (id) => selected.includes(id);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilterCategory(event.target.value);
    };

    // const handleBulkAction = () => {
    //     // Implement bulk action logic here
    //     console.log('Bulk action executed');
    // };

    const filteredRows = data.filter(row => 
        (row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.category.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (filterCategory === '' || row.category === filterCategory)
    );

    const visibleRows = filteredRows
        .slice()
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    const handleStatusChange = (id, newStatus) => {
        const updatedData = data.map(item => 
            item.id === id ? { ...item, status: newStatus } : item
        );
        // Update the state or data source with updatedData
    };

    return (
        <Box sx={{ width: '100%'}}>
            <Paper sx={{ width: '100%', mb: 2, borderRadius:'20px' }}>
                <Toolbar
                    sx={{
                        pl: { sm: 2 },
                        pr: { xs: 1, sm: 1 },
                        ...(selected.length > 0 && {
                            bgcolor: (theme) =>
                                alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                        }),
                    }}
                >
                    {selected.length > 0 ? (
                        <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
                            {selected.length} selected
                        </Typography>
                    ) : (
                        <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
                            Inventory
                        </Typography>
                    )}
                    <Box display="flex" alignItems="center" justifyContent={"center"} gap={2}>
                        <TextField
                            variant="outlined"
                            size="small"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            sx={{ minWidth: 200 }}
                            InputProps={{
                                startAdornment: (
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                ),
                            }}
                        />
                        <FormControl variant="outlined" size="small" sx={{ minWidth: 200 }}>
                            <InputLabel id="filter-category-label">Filter</InputLabel>
                            <Select
                                labelId="filter-category-label"
                                id="filter-category"
                                value={filterCategory}
                                onChange={handleFilterChange}
                                label="Filter"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="Gadgets">Gadgets</MenuItem>
                                <MenuItem value="Laptops">Laptops</MenuItem>
                                <MenuItem value="Watches">Watches</MenuItem>
                            </Select>
                        </FormControl>
                        {/* {selected.length > 0 && (
                            <Button variant="contained" color="primary" onClick={handleBulkAction}>
                                Bulk Action
                            </Button>
                        )} */}
                    </Box>
                </Toolbar>
                <TableContainer>
                    <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        color="primary"
                                        indeterminate={selected.length > 0 && selected.length < data.length}
                                        checked={data.length > 0 && selected.length === data.length}
                                        onChange={handleSelectAllClick}
                                        inputProps={{
                                            'aria-label': 'select all products',
                                        }}
                                    />
                                </TableCell>
                                {headCells.map((headCell) => (
                                    <TableCell
                                        key={headCell.id}
                                        align={headCell.numeric ? 'right' : 'left'}
                                        sortDirection={orderBy === headCell.id ? order : false}
                                    >
                                        <TableSortLabel
                                            active={orderBy === headCell.id}
                                            direction={orderBy === headCell.id ? order : 'asc'}
                                            onClick={(event) => handleRequestSort(event, headCell.id)}
                                        >
                                            {headCell.label}
                                            {orderBy === headCell.id ? (
                                                <Box component="span" sx={visuallyHidden}>
                                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                                </Box>
                                            ) : null}
                                        </TableSortLabel>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {visibleRows.map((row) => {
                                const isItemSelected = isSelected(row.id);
                                const labelId = `enhanced-table-checkbox-${row.id}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, row.id)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell component="th" id={labelId} scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell>{row.category}</TableCell>
                                        <TableCell>{row.unitPrice}</TableCell>
                                        <TableCell align="right">{row.inStock}</TableCell>
                                        <TableCell>{row.discount}</TableCell>
                                        <TableCell>{row.totalValue}</TableCell>
                                        <TableCell >
                                            <Select
                                                value={row.status}
                                                onChange={(event) => handleStatusChange(row.id, event.target.value)}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }} 
                                            >
                                                <MenuItem value="Published">Published</MenuItem>
                                                <MenuItem value="Unpublished">Unpublished</MenuItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell>
                                            <Typography
                                                width={"Hug78px"}
                                                height={"hug23px"}
                                                top={"13px"}
                                                left={"1134px"}
                                                borderRadius={"8px"}
                                                paddingX={"4px"}
                                                paddingY={"11px"}
                                                gap={"10px"}
                                                bgcolor={row.status === 'Published' ? "#5570F129" : "#FFF2E2"}
                                            >
                                                {row.status}
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}
