import React from 'react';
import { Box, Button, Card, CardContent, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const NewInventoryView = ({ sidebarOpen }) => {
    const location = useLocation();
    const productData = location.state?.productData || {};

    const allOrders = productData.purchases?.length || 0;
    const pendingOrders = productData.purchases?.filter(purchase => purchase.status === 'Pending').length || 0;
    const completedOrders = productData.purchases?.filter(purchase => purchase.status === 'Completed').length || 0;
    const cancelledOrders = productData.purchases?.filter(purchase => purchase.status === 'Cancelled').length || 0;
    const returnedOrders = productData.purchases?.filter(purchase => purchase.status === 'Returned').length || 0;
    const damagedOrders = productData.purchases?.filter(purchase => purchase.status === 'Damaged').length || 0;

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%', width: '100%' }}>
            <Box display={"flex"} justifyContent={"space-between"} alignContent={"center"} sx={{ backgroundColor: '#f5f5f5', marginTop: '10px', height: '36px', width: '100%' }}>
                <Typography variant="h5" gutterBottom sx={{ fontSize: '14px', padding: '10px', paddingLeft: '0px' }}>{productData.name}</Typography>
                <Typography variant="body2" sx={{ fontSize: '14px', padding: '10px', paddingLeft: '0px' }}>Date Added: {productData.Date}</Typography>
                <Typography variant="body2" sx={{ fontSize: '14px', padding: '10px', paddingLeft: '0px' }}>Product URL: {productData.productURL}</Typography>
                <Box display="flex" justifyContent={"center"} sx={{ gap: '24px', width: '356px', height: '36px' }}>
                    <Button variant="contained" color="secondary"
                        sx={{ marginLeft: 'auto', borderRadius: '12px', backgroundColor: '#1C1D22', display: 'flex', gap: '10px', width: '171px', height: '36px' }}>
                        <Typography variant="h6" color="inherit" noWrap fontSize='12px'>Edit Product</Typography></Button>
                    <Button variant="contained" color="primary"
                        sx={{ marginLeft: 'auto', borderRadius: '12px', backgroundColor: '#CC5F5F', display: 'flex', gap: '10px', width: '171px', height: '36px' }}>
                        <Typography variant="h6" color="inherit" noWrap fontSize='12px'> UnPublish Product</Typography>
                    </Button>
                </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems={"center"} gap={2}>
                <Box display="flex" flexDirection={"row"} alignItems={"end"} justifyContent={"space-between"} marginBottom={2} sx={{ width: sidebarOpen ? 'calc(100% - 240px)' : '100%', height: '123px', backgroundColor: 'white', padding: 2, borderRadius: 3 }}>
                    <Box display="flex" flexDirection="column" justifyContent="end">
                        <Typography variant="body2" sx={{ color: "#8B8D97", fontWeight: '400' }}>Price</Typography>
                        <Typography variant="h6">{productData.unitPrice}</Typography>
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="end">
                        <Typography variant="body2" sx={{ color: "#8B8D97", fontWeight: '400' }}>In Stock</Typography>
                        <Typography variant="h6">{productData.inStock}</Typography>
                    </Box>
                </Box>

                <Box display="flex" flexDirection="column" justifyContent="end" marginBottom={2} sx={{ width: '380px', height: '123px', backgroundColor: 'white', padding: 2, borderRadius: 3 }}>
                    <Typography variant="body2" sx={{ color: "#8B8D97", fontWeight: '400' }}>Total Orders</Typography>
                    <Typography variant="h6">{damagedOrders}</Typography>
                </Box>

                <Box display="flex" flexDirection="column" justifyContent="end" marginBottom={2} sx={{ width: '380px', height: '123px', backgroundColor: 'white', padding: 2, borderRadius: 3 }}>
                    <Typography variant="body2" sx={{ color: "#8B8D97", fontWeight: '400' }}>Favourite</Typography>
                    <Typography variant="h6">{damagedOrders}</Typography>
                </Box>
            </Box>

            <Box display="flex" sx={{ gap: 2 }}>
                <Box display="flex" justifyContent="space-between" marginBottom={2} sx={{ width: sidebarOpen ? 'calc(100% - 240px)' : '100%', height: '123px', backgroundColor: 'white', padding: 2, borderRadius: 3 }}>
                    <Box display="flex" flexDirection="column" justifyContent="end" sx={{ width: '14%' }}>
                        <Typography variant="body2" sx={{ color: "#8B8D97", fontWeight: '400' }}>All Orders</Typography>
                        <Typography variant="h6">{allOrders}</Typography>
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="end" sx={{ width: '14%' }}>
                        <Typography variant="body2" sx={{ color: "#8B8D97", fontWeight: '400' }}>Pending</Typography>
                        <Typography variant="h6">{pendingOrders}</Typography>
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="end" sx={{ width: '14%' }}>
                        <Typography variant="body2" sx={{ color: "#8B8D97", fontWeight: '400' }}>Completed</Typography>
                        <Typography variant="h6">{completedOrders}</Typography>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="space-between" marginBottom={2} sx={{ width: '100%', height: '123px', backgroundColor: 'white', padding: 2, borderRadius: 3 }}>
                    <Box display="flex" flexDirection="column" justifyContent="end" sx={{ width: '14%' }}>
                        <Typography variant="body2" sx={{ color: "#8B8D97", fontWeight: '400' }}>Cancelled</Typography>
                        <Typography variant="h6">{cancelledOrders}</Typography>
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="end" sx={{ width: '14%' }}>
                        <Typography variant="body2" sx={{ color: "#8B8D97", fontWeight: '400' }}>Returned</Typography>
                        <Typography variant="h6">{returnedOrders}</Typography>
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="end" sx={{ width: '14%' }}>
                        <Typography variant="body2" sx={{ color: "#8B8D97", fontWeight: '400' }}>Damaged</Typography>
                        <Typography variant="h6">{damagedOrders}</Typography>
                    </Box>
                </Box>
            </Box>
            {/* Orders and Purchases */}
            <Box marginTop={3}>
                        <Typography variant="h6">Purchases</Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Order Date</TableCell>
                                        <TableCell>Order Type</TableCell>
                                        <TableCell>Unit Price</TableCell>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell>Discount</TableCell>
                                        <TableCell>Order Total</TableCell>
                                        <TableCell>Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {productData.purchases?.map((purchase, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{purchase.date}</TableCell>
                                            <TableCell>{purchase.type}</TableCell>
                                            <TableCell>{`₦${purchase.unitPrice}`}</TableCell>
                                            <TableCell>{purchase.quantity}</TableCell>
                                            <TableCell>{purchase.discount}</TableCell>
                                            <TableCell>{`₦${purchase.total}`}</TableCell>
                                            <TableCell>{purchase.status}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
            </Box>
        </Box>
    );
};

export default NewInventoryView;


