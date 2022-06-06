import Header from './component/Header.jsx';
import Contact from './component/Contact.jsx';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Fab from '@mui/material/Fab';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';

function Phone(){
    return(
        <>
                    <Header />
                    <Contact/>
                    <Fab color="primary" aria-label="add"  sx={{position:'absolute', right:40,bottom:20}}>
                        <AddTaskIcon />
                    </Fab>
        </>
    );
}
export default Phone;