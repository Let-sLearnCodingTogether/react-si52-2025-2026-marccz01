import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button, Form } from "react-bootstrap";
import ApiClient from "../../utils/ApiClient";
import { NavLink } from "react-router";

interface SignInForm {
    email : string,
    password : string
}

function SignIn() {
        const [ form, setForm ] = useState<SignInForm>({
        email : "",
        password : ""
    });

    const onHandleChange = (event : ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setForm({
            ...form,
            [name] : value
        })
    }

    const onSubmit = async (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await ApiClient.post('/signin', form);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return <div className="container mx-auto">
            <h2>Sign In Page</h2>
        <Form>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    value={form.email}
                    onChange={onHandleChange}
                    name="email"
                    type="text"
                    placeholder="Email Address"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    value={form.password}
                    onChange={onHandleChange}
                    name="password"
                    type="password"
                    placeholder="Password Address"/>
            </Form.Group>
            <Button type="submit" variant="primary">
                MASOK LAH CEPET
            </Button>
            <NavLink to='/signUp' className="btn btn-link">
                KALO BLOM PUNYO SIGN UP COY
            </NavLink>
        </Form>
        </div>
}

export default SignIn;