// src/components/InventorySummary.js
import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import GroupIcon from '@mui/icons-material/Group';

const InventorySummary = () => (
    <Box display="flex" justifyContent="space-between" my={2} gap={2}>
        <Paper elevation={0} style={{ padding: '20px', flex: 1, color:'white', backgroundColor:'#5570F1', borderRadius:'12px'}} >
            <Box height="36px" width="36px" display="flex" justifyContent="center" alignItems="center">
                <CategoryIcon fontSize="small" />
            </Box>

            <Box display="flex">
                <Box display="flex" flexDirection="column" flex="1">
                    <Typography variant="h6" fontSize="14px">All Products</Typography>
                    <Typography variant="h4" fontSize="16px">350</Typography>
                </Box>

                <Box display="flex" flexDirection="column" flex="1">
                    <Typography variant="h6" fontSize="14px">Active</Typography>
                    <Typography variant="h4" fontSize="16px">316</Typography>
                </Box>
            </Box>

        </Paper>
        <Paper elevation={0} style={{ padding: '20px', flex: 1, borderRadius:'12px' }}>
            <Box height="36px" width="36px" display="flex" justifyContent="center" alignItems="center" >
                <GroupIcon fontSize="small" />
            </Box>

            <Box display="flex">
                <Box display="flex" flexDirection="column" flex="1">
                    <Typography variant="h6" fontSize="14px">Low Stock Alert</Typography>
                    <Typography variant="h4" fontSize="16px">23</Typography>
                </Box>

                <Box display="flex" flexDirection="column" flex="1">
                    <Typography variant="h6" fontSize="14px">Expired</Typography>
                    <Typography variant="h4" fontSize="16px">3</Typography>
                </Box>


                <Box display="flex" flexDirection="column" flex="1">
                    <Typography variant="h6" fontSize="14px">1 Star Rating</Typography>
                    <Typography variant="h4" fontSize="16px">1</Typography>
                </Box>

            </Box>

        </Paper>
        {/* Add more summary boxes as needed */}
    </Box>
);

export default InventorySummary;
