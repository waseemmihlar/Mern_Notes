import React,{useState,useEffect} from "react";
import { Container } from "react-bootstrap";



function Notes(){

  const [data,setdata]=useState([{
    title:"",
    content:""
  }])

  useEffect(()=>{
    fetch('http://localhost:5000/notes').then((res)=>{
        if(res.ok)
        {
          return res.json();  
        }
    }).then(jsondata=>{setdata(jsondata)})
  })


return(
    <Container style={{marginTop:'80px'}}>
        <h3>Notes</h3>
    {
        data.map(note=>{
            return(
                <div style={{margin:'10px 0',border:'2px solid dodgerblue',padding:'0px 20px',borderRadius:'20px'}}>
                <h4>{note.title}</h4>
                <p>{note.content}</p>
                </div>
            )
        })
    }
    </Container>
)
}

export default Notes;

