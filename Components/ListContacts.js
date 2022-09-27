import React, {useState, useEffect} from 'react'
//import { Link } from 'react-router-dom'
//import EmployeeService from '../services/EmployeeService'
import {Link, useNavigate} from "react-router-dom";

const ListContacts = () => {

    
    //const [employees, setEmployees] = useState([])

    /*useEffect(() => {

        getAllEmployees();
    }, [])*/

    /*const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteEmployee = (employeeId) => {
       EmployeeService.deleteEmployee(employeeId).then((response) =>{
        getAllEmployees();

       }).catch(error =>{
           console.log(error);
       })
        
    }*/

    return (
        
        <div className = "container"  >
            <h1>My Contacts</h1>
            <Link to = "/add" className = "btn btn-primary mb-2" > Add Contacts </Link>
            <h3 className = "text-center"> Contacts List </h3>
            
               
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Contact Id </th>
                    <th> Name </th>
                    <th> Phone No. </th>
                    <th> Email Id </th>
                    <th> Address </th>
                    <th> Photo </th>
                    <th> Actions </th>
                </thead>
                
            </table>
        </div>
        
    )
}

export default ListContacts