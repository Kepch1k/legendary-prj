import React from "react";

function Register(props) {
    const handleFormSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        console.log(email, password);
    };
    return (
        <div>
            <div>
                <h1>Log in to your account 🔐</h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            placeholder='Your Email'
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            placeholder='Your Password'
                        />
                    </div>

                    <div>
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default Register;
