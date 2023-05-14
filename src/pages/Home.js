import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, List, ListItem, ListItemText, Typography, IconButton, Box, Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Navbar from 'src/components/navbar.js';
import { ColorModeContext } from 'theme.js';

const Home = ({ toggleColorMode }) => {
const dispatch = useDispatch();
const sheetData = useSelector((state) => state.sheet.data);
const employeeData = useSelector((state) => state.sheet.employees);

useEffect(() => {
dispatch({ type: 'FETCH_SHEET_DATA' });
}, []);

return (
<>
<ColorModeContext.Provider value={{ toggleColorMode }}>
<Navbar />
<Container>
<Typography variant="h4" sx={{ backgroundColor: '#3f51b5', color: 'white', padding: 2, textAlign: 'center' }}>
Employee Data
</Typography>
<Grid container spacing={2}>
{employeeData.map((row, index) => (
<Grid item xs={12} sm={6} md={4} key={index}>
<Box boxShadow={2} borderRadius={8} padding={2}>
<Box sx={{ display: 'flex', justifyContent: 'center' }}>
<Avatar alt="Employee" src={row.imageUrl} sx={{ width: 96, height: 96 }} />
</Box>
<List>
{Object.entries(row).map(([key, value]) => (
<ListItem key={key} sx={{ marginBottom: 1 }}>
<ListItemText primary={key} secondary={value} />
</ListItem>
))}
</List>
<Box display="flex" justifyContent="flex-end">
<IconButton>
<EditIcon />
</IconButton>
<IconButton>
<DeleteIcon />
</IconButton>
</Box>
</Box>
</Grid>
))}
</Grid>
</Container>
</ColorModeContext.Provider>
</>
);
};

export default Home;