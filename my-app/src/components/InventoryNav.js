import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Avatar, Box, Typography } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';


const InventoryNav = () => {
    
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

    return (
        
        <Box display={"flex"} alignItems={"center"} justifyContent="space-between" height="60px" style={{backgroundColor:"white", paddingInline: "16px"}}> 
            <Typography variant="h6" fontSize="20px">Inventory</Typography>

            <Box width="100%" display="flex" justifyContent="end" alignItems={"center"} my={2} gap={2}>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Category"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <NotificationsIcon/>
                <Avatar alt="User Profile" src="/path/to/profile/image.jpg" style={{ marginLeft: '10px' }} />
            </Box>

        
        </Box>
        
    );
};
export default InventoryNav;