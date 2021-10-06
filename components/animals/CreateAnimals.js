import { useState } from 'react'

const CreateAnimals =() => {
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [belonging, setBelonging] = useState('')

    const handlePost = async (e) => {
        e.preventDefault()
        const res = await fetch('http://localhost:8000/api/animals', {
            method: 'POST',
            body: JSON.stringify({ animal_type: type, animal_description: description, belongs_to_pid: belonging }),
            headers: {
                "content-type": 'application/json'
            }
        })
        const data = await res.json()
        console.log(data)
        setType('')
        setDescription('')
        setBelonging('')
        window.location.reload(true)
    }

return (
    <>
    <h1>Create an Animal</h1>
    <form>
        <label htmlFor="type">Animal Type (cat or dog)</label>
        <input type='text' name="type" value={type} onChange={e => setType(e.target.value)}/>
        <br />
        <label htmlFor="description">Animal Description</label>
        <input type='text' name="description" value={description} onChange={e => setDescription(e.target.value)}/>
        <br />
        <label htmlFor="belonging">Belongs to Person ID</label>
        <input type='text' name="belonging" value={belonging} onChange={e => setBelonging(e.target.value)}/>
        <br />
        <button onClick={e => handlePost(e)}>Submit</button>
    </form>
    </>
)
}

export default CreateAnimals