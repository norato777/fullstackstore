import React, { useState } from "react";
import Header from "../Header/Header";
import NavbarMain from "../NavbarMain/NavbarMain";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import s from './UserProfile.module.css'
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, putUser, signIn, logOut } from "../../Redux/action";

const UserProfile = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const users = useSelector(state => state.users)
    const theUser = users.filter(u => u.email === user.email)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(theUser[0]._id)
    console.log(user)
    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = () => {
        const sign = {
            email: email,
            password: password,
        };
        dispatch(putUser(sign));
        dispatch(logOut())
        dispatch(signIn(sign));
        setEmail("");
        setPassword("");
    };

    return (
        <>
            <Header />
            <NavbarMain />
            <div className={s.containerForm}>
                {user &&
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"
                                placeholder={user.email}
                                {...register("name", { required: true })}
                                onChange={emailChangeHandler}
                                value={email} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password"
                                placeholder="*****"
                                {...register("password", { required: true })}
                                onChange={passwordChangeHandler}
                                value={password} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Modificar
                        </Button>
                    </Form>
                }
            </div>
        </>
    )
}

export default UserProfile;