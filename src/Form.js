
import React, { useState } from 'react';






const Form = () => {
    // let two = {
    //     firstname: '',
    //     latsname: ''
    // };
    const [firstname,setfirstname] = useState('');
    const [num,setlastname] = useState('');


    const nameChange = (event) => {
        
        setfirstname(event.target.value);
        setlastname(event.last.value);
        
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // const alert =
        //     'FirstName' + One.firstname
        //     'LastName' + One.lastname
        // alert(alert); 
        const ex1 = {
            First : firstname,
            Last : num
        };
        console.log(ex1);
        setfirstname('');
        setlastname('');
          
    }

    return (
        <div className = "app">
            <form onSubmit = {handleSubmit}>
                <div><h1>Create User</h1></div>
                <div> 
                    <div>
                        <label>First name : </label>
                        <input type="text" onChange = {nameChange} value = {firstname}></input>
                    </div>
                    <div>
                        <label>Age : </label>
                        <input type="number" onChange = {nameChange} value = {num}></input>
                    </div>
                    <div>
                        <label>Email Id : </label>
                        <input type="text" name="email-id"></input>
                    </div>
                    <div>
                        <label>Password : </label>
                        <input type="password" name="pwd"></input>
                    </div>
                    <div className = "checkbox">
                        <label>Check Boxes  : </label>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                        <label for="vehicle1"> I have a bike  </label>
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"></input>
                        <label for="vehicle2"> I have a car  </label>
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"></input>
                        <label for="vehicle3"> I have a boat  </label>
                    </div>
                    <div>
                        <input type= "submit" className = "submit" onClick = {handleSubmit}></input>
                    </div>
                </div>  
            </form>
        </div>
    )
}

export default Form;
