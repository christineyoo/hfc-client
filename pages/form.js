import { useState } from 'react'

const Form =() => {
    const [name, setName] = useState('')

    const handlePost = async (e) => {
        e.preventDefault()
        const res = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({ name }),
            headers: {
                "content-type": 'application/json'
            }
        })
        const data = await res.json()
        console.log(data)
    }

return (
    <>
    <h1>Form</h1>
    <form>
        <label htmlFor="name">Name</label>
        <input type='text' name="name" value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={e => handlePost(e)}>Submit</button>
    </form>
    </>
)
}

export default Form