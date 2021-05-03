import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { userSignUp, restore } from './../redux/actions/main';
import Link from 'next/link';
import { Form, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Head from 'next/head';

function Register(props) {

    const router = useRouter()
    const [form, setFormValue] = useState({})
    const { userInfo, restore } = props

    const register = () => props.userSignUp(form)

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user_info'))
        if (userData) {
            restore(userData)
        }
    }, [])

    useEffect(() => {
        if (userInfo.token) router.push('/')
    }, [register])

    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <title>
                    Registartion form
                </title>
            </Head>
            <Form style={{ maxWidth: '500px' }} className="mx-auto my-4">
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your name" onChange={(e) => setFormValue({ ...form, name: e.target.value })} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setFormValue({ ...form, email: e.target.value })} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                            </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setFormValue({ ...form, password: e.target.value })} />
                </Form.Group>
                <Button
                    variant="primary"
                    className="btn btn-primary w-100 mt-3"
                    onClick={() => register()}
                    disabled={userInfo.loading}>
                    {userInfo.loading ? '...loading' : '  Register'}
                </Button>
                <p className="my-2">Already have an account? <Link href="/login"><a style={{ color: 'crimson' }}>Login now</a></Link></p>

            </Form>
        </div >
    )
}
const mapStateToProps = state => ({
    userInfo: state.main,
})

const mapDispatchToProps = {
    userSignUp, restore
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)

