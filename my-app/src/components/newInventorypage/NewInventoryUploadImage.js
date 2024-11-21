// src/components/UploadImageSection.js
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ImageIcon from '@mui/icons-material/Image';

const UploadImageSection = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderRadius: 2, width: '310px', padding: '10px', height: '448px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', justifyContent: 'center', backgroundColor: '#eff1f9', p: '2', borderRadius: 2, width: '281px', padding: '10px', height: '320px' }}>
                <ImageIcon sx={{ height: '56px', width: '56px' }} />
                <Button variant="outlined" component="label">
                    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={1} sx={{ width: '100%', height: '100%' }}>
                        <CloudUploadIcon />
                        <Typography variant="body2">Upload Image</Typography>
                        <input type="file" hidden />
                    </Box>

                </Button>
                <Box sx={{ width: '250px', height: '17px' }}>
                    <Typography fontSize={"14px"} fontWeight={"400px"} align='Center'>
                        Upload a cover image for your product.</Typography>
                    <Typography fontSize={"14px"} fontWeight={"400px"} align='Center'>
                         Max format <strong>jpg, png</strong>. Recommended size <strong>600x600 (1:1)</strong>
                    </Typography>
                </Box>
            </Box>



            <Box sx={{display:'flex', flexDirection: 'column', gap: 2, alignItems: 'center', justifyContent: 'center', backgroundColor: '#eff1f9', p: '2', borderRadius: 2, width: '281px', padding: '10px', height: '100px' }}>
                <Typography variant="h6">Additional Images</Typography>
                <Button variant="outlined" component="label" fullWidth>
                    Upload Image
                    <input type="file" hidden />
                </Button>
            </Box>
        </Box>
    );
};

export default UploadImageSection;
