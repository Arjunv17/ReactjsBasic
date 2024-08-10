import axios from 'axios'
import React, { useState } from 'react'

const UploadImage = () => {
    const token = true;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState(null)
    const [response, setResponse] = useState(null)
    const [error, setError] = useState('')


    const handleFileChange = (event) => {
        let imageFile = event.target.files[0]
        setFile(imageFile);

        //Preivew Url
        let generateUrl = URL.createObjectURL(imageFile);
        setPreview(generateUrl)

    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!file) {
            alert('Please Select Your Image!');
            return
        }

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        formData.append('profile', file);

        try {
            const res = await axios.post('http://localhost:8000/api/users/uploadProfile', formData
                , {
                    headers: {
                        Authorization: token
                    }
                })
            setResponse(res.data)
            alert('File Upload Successfully!!')
        } catch (error) {
            setError('Error Found!!', error)
            setResponse(null)
        }
    }

    return (
        <>
            <h1>Upload Profile</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <span>Email:</span>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <span>Password:</span>
                    <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div>
                    <span>Profile:</span>
                    <input type='file' onChange={handleFileChange} required />
                    {preview && <img alt='Image' src={preview} style={{ width: '100px', height: '100px' }} />}
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

export default UploadImage
