import React, {useEffect, useState} from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function Create() {
 const [firstName, makeFirstName] = useState('');
 const [lastName, makeLastName] = useState('');


 console.log(firstName);
 console.log(lastName);

 const transferToApi = () => {
     axios.post('https://6241007f9b450ae27439f4f4.mockapi.io/crud2',
     {
     
         firstName,
         lastName

      } )
    }
 
useEffect(() => {
  makeFirstName(localStorage.getItem('first-name'));
    makeLastName(localStorage.getItem('last-name'));



},[])
    return (

        <div>
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input name="first-name" 

      onChange={(e)=> makeFirstName(e.target.value) } 
      placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input name="last-name"


      placeholder='Last Name' 
      onChange={(e)=> makeLastName(e.target.value) } 
      />
    </Form.Field>
 
    <Button type='submit'onClick={transferToApi}>Submit</Button>
  </Form>

      </div>
    )
}
    
