import React from 'react'
import { useState } from 'react';
import { Box, Paper } from '@mui/material'

function Formvalidation() {
  const initialvalues = { firstname: "", lastname: "", email: "", gender: "", course: "" };
  const errors={ firstname: "", lastname: "", email: "", gender: "", course: "" };

  const [state, setState] = useState(initialvalues)
  const [error,setError]=useState(errors)
     //onChange function//
  const handleChange = (e) => {
    const { name, value } = e.target;
   
    if(e.target.value===""){ 
      setError({...error,[name]: `${name} is required`})
    }else{
      setError({...error,[name]: ""})

    }

        setState({ ...state, [name]: value,})
    }

      //onSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    var errKeys = Object.keys(state).filter((key) => {
      if (state[key] === '') {
        return key;
      }
    });
    if (errKeys.length >= 1) {
      alert("filling the form is mandatory")
    } else {
      console.log(state);
    }
    
  }


    //reset function//
  const handleReset=()=>{
      setState({
        firstname:'',
        lastname:'',
        email: '',
        gender:''
      })

  }


  
  return (
    <div>

      <h1><b>user form</b></h1>
      <div className="container" id="box">
        <br />
        <center>
        <Box sx={{
          width: 500,
          height: 500,
          backgroundColor: 'primary.dark',
          Color: 'white'

        }} p={5}  >


          <Paper elevation={3}  id="val">
            <Box p={5}>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>FirstName:</label>  &nbsp;
                  <input type="text" name="firstname" value={state.firstname} onChange={handleChange} />
                  <br/>
                  <span style={{ color: 'red' }}> {error.firstname} </span>
                </div> <br />
                <div>
                  <label>LastName:</label>  &nbsp;
                  <input type="text" name="lastname" value={state.lastname} onChange={handleChange} />
                  <br/>
                  <span style={{ color: 'red' }}> {error.lastname} </span>
                </div> <br />
                <div>
                  <label>Email:</label>  &nbsp;
                  <input type="email" name="email" value={state.email} onChange={handleChange} />
                  <br/>
                  <span style={{ color: 'red' }}> {error.email} </span>
                </div> <br />
                <div>
                  <label>gender:</label>  &nbsp;
                  <input type="radio" name="gender" value="male" onChange={handleChange} />MALE
                  <input type="radio" name="gender" value="female" onChange={handleChange} />FEMALE
                </div> <br />
                <div>
                  <label>front-end course:</label>  &nbsp;
                  <select name="course" value={state.course} onChange={handleChange}>
                    <option>html</option>
                    <option>css</option>
                    <option>javacsript</option>
                    <option>react</option>
                  </select>



                </div> <br />
                <button type="submit" className="btn btn-danger">submit</button> &nbsp; &nbsp;
                <button type="button" className="btn btn-primary" onClick={handleReset}>reset</button>
                


              </form>
            </Box>
          </Paper>
        </Box>
        </center>


      </div>
      
    </div>

  )
}

export default Formvalidation