import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { getAllemployees,deleteEmployee} from '../services/employeeService';

//import{EmployeeDetails} from '../components/EmployeeDetails'



function EmployeeHome() {
    const [data,setData] = useState([])
   
   //  const navigate = useNavigate();

   useEffect(() => {
      getAllemployees().then((response) => {
         console.log(response.data);
         setData(response.data);
       });
     }, []);


     const handleDelete = (employeeId)=>{
    const confirm = window.confirm("Would you like to Delete?");
    if(confirm)
    {
        deleteEmployee(employeeId).then(res=>{
          //  navigate('/');
          window.location.reload()
        })
        .catch(err=>console.log(err));
    }
  }






  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
        
     <h1>List Of Users</h1>
     
     <div className='w-80 rounded bg-white border shadow p-4'>
     <div className='d-flex justify-content-end mb-2'>
         <Link to="/add-employee" className='btn btn-success'>Add +</Link>
        </div>
       <table className='table table-bordered'>
        <thead>
            <tr>
                <th>Employee ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Contact Number</th>
                <th>Department</th>
                <th>TotalRewardPoints</th>             
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((d,i)=>(
                 <tr key={i.employeeId}>
                    <td>{d.employeeId}</td>
                    <td>{d.firstName}</td>
                    <td>{d.lastName}</td>
                    <td>{d.email}</td>
                    <td>{d.password}</td>
                    <td>{d.contactNumber}</td>
                    <td>{d.department}</td>
                    <td>{d.totalRewardPoints}</td>
                    <td>
                        <Link to={`/employeeRead/${d.employeeId}`} className='btn btn-sm btn-info me-2'>Read</Link>
                        <Link to={`/employeeUpdate/${d.employeeId}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                        <button onClick={e=>handleDelete(d.employeeId)} className='btn btn-sm btn-danger'>Delete</button>
                    </td>
                 </tr>   
                ))
            }
        </tbody>
       </table>
       </div>
       </div> 
  
  )
  
 


}

export default EmployeeHome