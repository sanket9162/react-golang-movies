import { useState } from "react"
import Input from "./from/input"
import { useNavigate, useOutletContext } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {setJwtToken} = useOutletContext()
    const {setAlertClassName} = useOutletContext()
    const {setAlertMessage} = useOutletContext()
    const navigate = useNavigate()
    
    const handleSubmit = (event) => {
        event.preventDefault();
        let payload = {
            email: email,
            password: password,
        }

        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(payload),
        }

        fetch(`/authenticate`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    setAlertClassName("alert-danger");
                    setAlertMessage(data.message);
                } else {
                    setJwtToken(data.access_token);
                    setAlertClassName("d-none");
                    setAlertMessage("");
                    navigate("/");
                }
            })
            .catch(error => {
                setAlertClassName("alert-danger");
                setAlertMessage("something wroong");
                throw(error)
            })


        // console.log(email/password)

        // if (email === "admin@sanket.com"){
        //     setJwtToken("abc")
        //     setAlertClassName("d-none")
        //     setAlertMessage("")
        //     navigate("/")
        // }else{
        //     setAlertClassName("alert-danger")
        //     setAlertMessage("Invalid credentials")
        // }
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