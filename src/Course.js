import React, { useState } from "react";
import $ from "jquery";
import "./Course.css";
import { withRouter } from 'react-router-dom';

function Course({history}) {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const token = localStorage.getItem("token");

    function handleChangePassword(evt) {
        evt.preventDefault();
        $.ajax({
            url: 'https://api.nossocietyeducation.ro/user',
            method: 'PUT',
            data: JSON.stringify({ oldPassword, newPassword, token }),
            success: function (response) {

            }

        });

    }

    function handleDelete() {
        if (window.confirm("Do you really want to delete your account?")){
            $.ajax({
                url: 'https://api.nossocietyeducation.ro/user',
                method: 'DELETE',
                data: JSON.stringify({ token }),
                success: function (response) {
                    history.push("/LogIn");
    
                }
    
            });

        }
        


    }




    return (
        <div id="form2container">
            <h1>UNDER CONSTRUCTION</h1>
            <form id="form2" onSubmit={handleChangePassword}>
                <label>
                    Old Password:
                </label>
                <input className="input2" type="text" name="Email" value={oldPassword} onChange={e => setOldPassword(e.target.value)} />

                <label>
                    New Password:
                </label>
                <input className="input2" type="password" name="Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />



                <input className="buttons2" type="submit" value="Change Password" />
                <input className="buttons2" type="button" value="Delete Account" onClick={handleDelete} />
            </form>
        </div>
    )
}

export default withRouter(Course);