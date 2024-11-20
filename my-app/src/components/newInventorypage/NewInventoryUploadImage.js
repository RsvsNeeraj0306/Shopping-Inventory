// src/components/UploadImageSection.js
import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const UploadImageSection = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>Upload Image</Typography>
            <Button variant="outlined" component="label">
                Upload Image
                <input type="file" hidden />
            </Button>
            <Typography variant="body2">Upload a cover image for your product. Max format jpg, png. Recommended size 600x600 (px)</Typography>

            <Box mt={4} width="100%">
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
