import './App.css';
import { useEffect, useState } from 'react';
import { Container } from '@mui/system';
import { Button, Card, Grid, TextField,Paper, Typography, List, ListItem, Checkbox, ListItemIcon } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { JavascriptOutlined } from '@mui/icons-material';
function App() {
    const [task,setTask] = useState('');
    const [data,SetData] = useState(()=>{
        let saveTodos = localStorage.getItem('todos');
        if(saveTodos){
            return JSON.parse(saveTodos);
        }
        else{
            return [];
        }
    });
    const handelInsert=()=>{
        let newArray = [...data,{id:data.length+1,title:task,status:true}]
        SetData(newArray);
        setTask("");
        // console.log(handelInsert);
    }
    const handelDelet=(id)=>{
        SetData(data.filter((task)=>task.id !== id))
    }
    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(data))
    },[data])
    const handleChecked=(id,status)=>{
        if(!status){
            SetData(data.map((item)=>(item.id === id)? {...item,status:true}:item))
        }
        else{
            SetData(data.map((item)=>(item.id === id)? {...item,status:false}:item))
        }
    }
  return(
      <>
        <Container>
            <Grid container sx={{justifyContent:"center", }}>
                <Grid item lg={6}>
                    <Typography variant='h2' sx={{color:'#ddd',textAlign:'center',backgroundColor:"red",borderRadius:2}} my={2}>
                        todo App
                    </Typography>
                        <Card sx={{height:600}}>
                            <Paper elevation={2} sx={{display:'flex',gap:1,padding:1.5}}>
                                <TextField sx={{width:'90%'}} value={task} onChange={(e) => setTask(e.target.value)} placeholder='e.g buy a milk,food,vegitable etc...'  />
                                <Button variant='contained' onClick={handelInsert} startIcon={<AddTaskIcon/>} >Add</Button>
                            </Paper>
                            <Card>
                                <List> {
                                    data.map((value,key) => (
                                    <ListItem key={key} secondaryAction={<Button variant='contained' color='error' onClick={()=>handelDelet(value.id)}>Delete</Button>}>
                                        <ListItemIcon>
                                            {
                                                (value.status)?
                                                <Checkbox  onChange={() => handleChecked(value.id,value.status)} />:
                                                <Checkbox defaultChecked onChange={() => handleChecked(value.id,value.status)} />
                                            }
                                        </ListItemIcon>
                                        {value.status && value.title}
                                        {(!value.status) && <del>{value.title}</del>}
                                    </ListItem>
                                    ))
                                    }
                                </List>
                            </Card>
                        </Card>
                </Grid>
            </Grid>
        </Container>
      </>
  )
}

export default App;