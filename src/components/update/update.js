import React, {useEffect, useState, } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function Update() {
 const [firstName, makeFirstName] = useState('');
 const [lastName, makeLastName] = useState('');
 const [ID, setID]=useState(null);
 

 const sendToApi = () => {
     axios.post('https://6241007f9b450ae27439f4f4.mockapi.io/crud2/${ID}',
     {
     
         firstName,
         lastName

      } )
    }
 
useEffect(() => {
    makeFirstName(localStorage.getItem('first-name'));
    makeLastName(localStorage.getItem('last-name'));
    setID(localStorage.getItem('ID'))

},[])
    return (

        <div>
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input name="first-name" 
      value={firstName}
      onChange={(e)=> makeFirstName(e.target.value) } 
      placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input name="last-name"
    value={lastName}

      placeholder='Last Name' 
      onChange={(e)=> makeLastName(e.target.value) } 
      />
    </Form.Field>
 
    <Button type='submit'onClick={sendToApi}>Update</Button>
  </Form>

      </div>
    )
}
    
