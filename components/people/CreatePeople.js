import { useState } from 'react'

const CreatePeople =() => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [fruit, setFruit] = useState('')

    const handlePost = async (e) => {
        e.preventDefault()
        const res = await fetch('http://localhost:8000/api/people', {
            method: 'POST',
            body: JSON.stringify({ fname, lname, favorite_fruit: fruit }),
            headers: {
                "content-type": 'application/json'
            }
        })
        const data = await res.json()
        setFname('')
        setLname('')
        setFruit('')
    }

return (
    <>
    <h1>Create a Person</h1>
    <form>
        <label htmlFor="fname">First Name</label>
        <input type='text' name="fname" value={fname} onChange={e => setFname(e.target.value)}/>
        <br />
        <label htmlFor="lname">Last Name</label>
        <input type='text' name="lname" value={lname} onChange={e => setLname(e.target.value)}/>
        <br />
        <label htmlFor="fruit">Favorite Fruit</label>
        <input type='text' name="fruit" value={fruit} onChange={e => setFruit(e.target.value)}/>
        <br />
        <button onClick={e => handlePost(e)}>Submit</button>
    </form>
    </>
)
}

export default CreatePeople