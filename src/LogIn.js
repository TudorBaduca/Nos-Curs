import "./LogIn.css";
import React, { useState } from "react";
import $ from "jquery";
import { withRouter } from 'react-router-dom'

function LogIn({ history }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(email, password);

    function handleSubmit(evt) {
        evt.preventDefault();
        $.ajax({
            url: 'https://api.nossocietyeducation.ro/user/login',
            method: 'POST',
            data: JSON.stringify({ email, password }),
            success: function (response) {
                console.log(response);
                if (response.token) {
                    localStorage.setItem("token", response.token);
                    history.push("/Course");
                }
            }

        });

    }

    function handleRegister(evt) {
        evt.preventDefault();
        $.ajax({
            url: 'https://api.nossocietyeducation.ro/user',
            method: 'POST',
            data: JSON.stringify({ email, password }),
            success: function (response) {
                alert("You registered successfully!");

            }

        });

    }
    return (
        <div id="FormContainer">
            <form className="LoginForm" onSubmit={handleSubmit}>
                <label> Email Address:</label>
                <input type="text" name="Email" value={email} onChange={e => setEmail(e.target.value)} />


                <label>Password </label>
                <input type="password" name="Password" value={password} onChange={e => setPassword(e.target.value)} />



                <input className="buttons" type="submit" value="Submit" />
                <input className="buttons" type="button" value="Register" onClick={handleRegister} />
            </form>
        </div>
    )
}

export default withRouter(LogIn);
