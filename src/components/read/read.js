import React, {useEffect, useState} from 'react';
import {Table, Button} from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';



export default function Read() {
    const [apiData, setAPIData] = useState([]);
    useEffect(() => {
         axios.get('https://6241007f9b450ae27439f4f4.mockapi.io/crud2')
         .then((getData) => {
             setAPIData(getData.data);
         })

    })

    const setID = (id, firstName,lastName )=> {
     console.log(id);
     localStorage.setItem('ID', id)
     localStorage.setItem('first-name', firstName)
     localStorage.setItem('last-name',lastName)


 }

 const getData =(id) => {

    axios.get('https://6241007f9b450ae27439f4f4.mockapi.io/crud2')
    .then((getData) => {
        setAPIData(getData.data);
    })

 }

 const onDelete = (id) => {
     axios.delete('https://6241007f9b450ae27439f4f4.mockapi.io/crud2/${id}')
.then(() => {
    getData();

})

 }


   return (
    <div>

<Table basic>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {apiData.map((data) => {
        return (

            <Table.Row>
            <Table.Cell>{data.id}</Table.Cell>
            <Table.Cell>{data.firstName}</Table.Cell>
            <Table.Cell>{data.lastName}</Table.Cell>
            <Table.Cell>
                <Link to = '/update'>
                <Button onClick={() => setID(data.id), data.firstName, data.lastName}>Update</Button>
                </Link>
            </Table.Cell>
            <Table.Cell>

                <Link to = '/delete'>
                <Button  onClick={() => onDelete(data.id), data.firstName, data.lastName}>Delete</Button>
                </Link>

            </Table.Cell>

          </Table.Row>
      


        )
    
    })}

  
    </Table.Body>
  </Table>

    </div>
  )
}
