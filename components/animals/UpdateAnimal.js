import { useState } from 'react';

const UpdateAnimal = ({ animal }) => {
  const [type, setType] = useState(animal.animal_type);
  const [description, setDescription] = useState(animal.animal_description);
  const [belonging, setBelonging] = useState(animal.belongs_to_pid);

  const editAnimal = async (e) => {
    e.preventDefault();
      const response = await fetch(
        `http://localhost:8000/api/animals/${animal.animal_id}`,
        {
          method: 'PATCH',
          body: JSON.stringify({
            animal_id: animal.animal_id,
            animal_type: type,
            animal_description: description,
            belongs_to_pid: belonging
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      const data = await response.json();
      window.location.reload(true)
  };

  return (
    <>
      <p><strong>Update Comment</strong></p>
      <form>
        <label htmlFor='type'>Type</label>
        <input
          type='text'
          name='type'
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <br />
        <label htmlFor='description'>Description</label>
        <input
          type='text'
          name='type'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <label htmlFor='belonging'>Belonging to ID#</label>
        <input
          type='text'
          name='belonging'
          value={belonging}
          onChange={(e) => setBelonging(e.target.value)}
        />
        <button onClick={(e) => editAnimal(e)}>Update</button>
      </form>
    </>
  );
};

export default UpdateAnimal;
