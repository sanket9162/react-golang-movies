import { useState } from "react"
import Input from "./from/input"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = (event) => {
        event.preventDefault();

        if (email == "admin@sanket.com"){
            return
        }
    }

    return(
        <>
        <div className="col-md-6 offset-md-3">
            <h2>Login</h2>
            <hr />
        <form onSubmit={handleSubmit}>
            <Input
            title="Email Address"
            type="email"
            className="form-control"
            name="email"
            autoComplete="email-new"
            onChange={(event) => setEmail(event.target.value)}

            />
            <Input
            title="Passwrod"
            type="Passwrod"
            className="form-control"
            name="password"
            autoComplete="Passwrod-new"
            onChange={(event) => setPassword(event.target.value)}

            />
            <input type="submit" className="btn btn-primary" value="Login" />

        </form>
        </div>
        </>
    )
}

export default Login