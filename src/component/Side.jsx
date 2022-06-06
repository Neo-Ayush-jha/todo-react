import { Button, List, ListItem, ListItemText, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import UpdateIcon from '@mui/icons-material/Update';
import LabelIcon from '@mui/icons-material/Label';
import LocalPlayIcon from '@mui/icons-material/LocalPlay';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import UploadIcon from '@mui/icons-material/Upload';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import PrintIcon from '@mui/icons-material/Print';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Side = ()=>{
    return(
        
        <List>
            
            <ListItem>
            <ListItemText ><Button variant="outlined" sx={{borderRadius:8}} color="error"><AddIcon />Create contact</Button></ListItemText>
            </ListItem>
            <ListItem>
            <PersonIcon/><ListItemText sx={{marginLeft:3}}>Contacts</ListItemText>
            </ListItem>
            <ListItem>
                <UpdateIcon/><ListItemText sx={{marginLeft:3}}>Frequently contacted</ListItemText>
            </ListItem>
            <ListItem>
               <LocalPlayIcon/> <ListItemText sx={{marginLeft:3}}>marge & fix</ListItemText>
            </ListItem>
            <ListItem>
                <KeyboardArrowUpIcon/><ListItemText sx={{marginLeft:3}}>Labels</ListItemText>
            </ListItem>
            <ListItem>
                <LabelIcon/><ListItemText sx={{marginLeft:3}}>ICE</ListItemText>
            </ListItem>
            <ListItem>
            <AddIcon/><ListItemText sx={{marginLeft:3}}>Create label</ListItemText>
            </ListItem>
            <ListItem>
               <UploadIcon/> <ListItemText sx={{marginLeft:3}}>Import</ListItemText>
            </ListItem>
            <ListItem>
               <CloudDownloadIcon/> <ListItemText sx={{marginLeft:3}}>Export</ListItemText>
            </ListItem>
            <ListItem>
                <PrintIcon/><ListItemText sx={{marginLeft:3}}>Print</ListItemText>
            </ListItem>
            <ListItem>
                <SystemUpdateAltIcon/><ListItemText sx={{marginLeft:3}}>Other contacts</ListItemText>
            </ListItem>
            <ListItem>
               <DeleteOutlineIcon /> <ListItemText sx={{marginLeft:3}}>Trash</ListItemText>
            </ListItem>
        </List>
    )
}
export default Side;