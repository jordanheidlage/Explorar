import React from "react";
import "./FormStyles.css"
function In() {

    return (
        <>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>

                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-check">

                </div>
                <button id="loginButt" type="submit" className="btn btn-outline-warning">Login</button>
            </form>


        </>
    )
}

export default In;