import React from 'react';

export default function Login({ isLoggedIn}){
    return(
        <React.Fragment>
            <div className="App-body">
                    <p>Login to access the full dashboard</p>
                    <label htmlFor="Email">Email: </label>
                    <input type="email" id="Email" name="Email"/>
                    <label htmlFor="Password"> Password: </label>
                    <input type="password" id="Password" name="Password"/>
                    <button>Ok</button>
                </div>
            </React.Fragment>
    )
}
