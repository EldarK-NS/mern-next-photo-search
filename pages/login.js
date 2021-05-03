import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { userSignIn, restore } from './../redux/actions/main';
import { Form, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ModalPage from '../components/Modal';
import Head from 'next/head'

function Login(props) {
    const router = useRouter()
    const [form, setFormValue] = useState({})
    const { userInfo, restore } = props


    const signIn = () => props.userSignIn(form)

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user_info'))
        if (userData) {
            restore(userData)
        }
    }, [])

    useEffect(() => {
        if (userInfo.token) {
            return router.push('/')
        }
    }, [signIn])

    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <title>
                    Sign In
                </title>
            </Head>
            {
                userInfo.error &&
                <ModalPage error={userInfo.error} />
            }
            <Form style={{ maxWidth: '500px' }} className="mx-auto my-4">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={(e) => setFormValue({ ...form, email: e.target.value })} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                            </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setFormValue({ ...form, password: e.target.value })}
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    className="btn btn-primary w-100 mt-3"
                    onClick={() => signIn()}
                    disabled={userInfo.loading}>
                    {userInfo.loading ? '...loading' : 'Sign in'}
                </Button>

                <p className="my-2">You dont't have an account? <Link href="/register"><a style={{ color: 'crimson' }}>Register now</a></Link></p>
            </Form>

        </div >
    )
}
const mapStateToProps = state => ({
    userInfo: state.main
})

const mapDispatchToProps = {
    userSignIn, restore
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

