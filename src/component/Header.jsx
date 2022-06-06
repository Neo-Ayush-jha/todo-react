import { AppBar, Paper, TextField, Toolbar, Typography } from "@mui/material"

import DehazeIcon from '@mui/icons-material/Dehaze';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import SearchIcon from '@mui/icons-material/Search';
import Link from '@mui/material/Link';
const Header = ()=>{
    return(
        <AppBar position='static' color='inherit'  sx={{fontSize:'26px'}}>
            <Toolbar>
                <Typography>
                <Breadcrumbs aria-label="breadcrumb" >
                <Link
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center',marginLeft:1, fontSize:'26px' }} 
                color="inherit"
                href="/"
                >
                <DehazeIcon sx={{ marginRight:2 }} fontSize="inherit" />
                <PersonPinIcon />
                <Typography sx={{fontSize:'20px'}}>Contacts</Typography>
                </Link>
            </Breadcrumbs>
                </Typography>
                <Paper sx={{display:'flex',marginLeft:30, width:500}}>
                                <TextField sx={{width:'100%'}}  placeholder=' Search...'/>
                </Paper>
            </Toolbar>
        </AppBar>
    )
}
export default Header;