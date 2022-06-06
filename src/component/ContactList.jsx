import { Table, TableCell, TableHead, TableRow } from "@mui/material"


const ContactList = ()=>{
    return(
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Action</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Contact</TableCell>
                    <TableCell>Delete</TableCell>
                </TableRow>
            </TableHead>
        </Table>
    )
}
export default ContactList;