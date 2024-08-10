import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
    const token = true;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [response, setResponse] = useState(null)
    const [error, setError] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await axios.post('http://localhost:8000/api/users/testUser',
                {
                    email:email,
                    password:password
                }, {
                headers: {
                    Authorization: token
                }
            })
            setResponse(res.data)
        } catch (error) {
            setError('Error Found!!', error)
            setResponse(null)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <span>Email:</span>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <span>Password:</span>
                    <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type='submit'>Submit</button>
            </form>

            {
                response && (
                    <div>
                        <h2>Success</h2>
                        <pre>{JSON.stringify(response, null, 2)}</pre>
                    </div>
                )
            }
             {
                error && (
                    <div>
                        <h2>Error</h2>
                        <pre>{JSON.stringify(error)}</pre>
                    </div>
                )
            }
        </>
    )
}

export default Login
