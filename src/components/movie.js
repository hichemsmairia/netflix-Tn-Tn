import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import {Card,Button} from 'react-bootstrap'
function Movie() {

  useEffect(() => {
      let x = Math.floor(Math.random()*10)
axios.get("https://www.omdbapi.com/?s=horror&apikey=4a3b711b")
.then(result=>{
    setTitle(result.data.Search[x].Title);
    setYear(result.data.Search[x].Year);
    setLinkImg(result.data.Search[x].Poster);
})

  }, []);

  const [title,setTitle] = useState('')
  const [year, setYear] = useState("");
  const [linkImg, setLinkImg] = useState("");


  return (
      <div style={{color:"black",display:"flex",alignItems:"center",justifyContent:"center"}}>
         <Card style={{ width: "28rem" }}>
      <Card.Img variant="top" src={linkImg} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          date de film : {year}
        </Card.Text>
        <Button variant="primary">{title}</Button>
      </Card.Body>
    </Card> 
      </div>
    
  );
}
export default Movie;
