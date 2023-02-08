import React from "react";
import Table from 'react-bootstrap/Table';
import Menu from "./Menu";
import { useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button';

const Dashboard = () => {

	var [empData, setData] = useState([]);
        useEffect(() => {
          fetchEmployeedata();
        }, []);
    
    const headersUpdate = {
    "Access-Control-Allow-Origin": "*"
  	};

    //var apLink = "https://jsonplaceholder.typicode.com/users";
    var apLink = "http://localhost:4000/hospital/list";


          const fetchEmployeedata = () => {
           axios
          .get(apLink,{headersUpdate})
          .then((response) => {
            setData(response.data);
          })
          .catch();
        };

	return (
		<div style={{marginLeft: "8rem",marginRight: "8rem", marginTop:"10rem"}}>

		
		{/*<Menu/>*/}
		<Table striped bordered >
	
		  <thead>
			<tr>
			  <th style={{backgroundColor:"#581845", color:"#ffffff", fontSize:20}}>Learner Id</th>
			  <th style={{backgroundColor:"#581845", color:"#ffffff", fontSize:20}}>Name</th>
			  <th style={{backgroundColor:"#581845", color:"#ffffff", fontSize:20}}>Course Name</th>
			  <th style={{backgroundColor:"#581845", color:"#ffffff", fontSize:20}}>Project</th>
			  <th style={{backgroundColor:"#581845", color:"#ffffff", fontSize:20}}>Batch</th>
			  <th style={{backgroundColor:"#581845", color:"#ffffff", fontSize:20}}>Course Status</th>
			  <th style={{backgroundColor:"#581845", color:"#ffffff", fontSize:20}}>Placement Status</th>
			  <th style={{backgroundColor:"#581845", color:"#ffffff", fontSize:20}}>Actions</th>
			</tr>
		  </thead>
		  <tbody>
		  <tr>
			  <td>1</td>
			  <td >Ajala Ajith</td>
			  <td>Full Stack Course</td>
			  <td >Student Management</td>
			  <td >Evening</td>
			  <td >Intermediate</td>
			  <td >Starting</td>
			  <td >
			  	<span><Button variant="primary" type="submit" style={{backgroundColor:"#FFC300", color:"#ffffff", fontSize:15, borderColor:"#FFC300"}} >Delete</Button> </span>
                        <span><Button variant="primary" type="submit" style={{backgroundColor:"#FF0000", color:"#ffffff", fontSize:15, borderColor:"#FF0000"}}>Update</Button></span>
			  </td>
			</tr>
			{/*{empData.map((item) =>{
                    return(
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td><span><Button variant="primary" type="submit" style={{backgroundColor:"#FFC300", color:"#ffffff", fontSize:15}} >Delete</Button> </span>
                        <span><Button variant="primary" type="submit" style={{backgroundColor:"#ff0000", color:"#ffffff", fontSize:15}}>Update</Button></span></td>
                     </tr>
                    );
                  })}*/}
		  </tbody>
		</Table>
		</div>
	);
};

export default Dashboard;
