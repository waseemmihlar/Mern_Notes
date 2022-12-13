import React from "react";
import { Container,Form,Button } from "react-bootstrap";
import {useState} from 'react';
import axios from 'axios';

function Create(){

    const [inputs,setinputs]=useState({
        title:'',
        content:''
    })

    function handlechange(e){
        const {name,value}=e.target;

        setinputs(previnput=>{
            return{
                ...previnput,
                [name]:value
            }

        })
    }

    function handleclick(e){
        e.preventDefault();

        const newnote={
          title:inputs.title,
          content:inputs.content
        }

        axios.post("http://localhost:5000/create",newnote);

        //if not declare path(http://localhost:5000) it must declare in the package.jason file as below 
        //"proxy":"http://localhost:5000"
      
    }
return(
    <Container style={{marginTop:'80px'}}>
      <h3>Create your notes</h3>
    <Form>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title of the notes" name='title' onChange={handlechange} value={inputs.title}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="content">
        <Form.Label>Content</Form.Label>
        <Form.Control name='content' as={'textarea'} onChange={handlechange} rows='10' type="password" value={inputs.content} placeholder="Notes Contents" style={{resize:'none'}}/>
      </Form.Group>
      
      <Button variant="primary" onClick={handleclick}>
        Submit
      </Button>
    </Form>
    </Container>
)
}

export default Create;


