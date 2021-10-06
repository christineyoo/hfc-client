import { useState } from 'react';

const CreatePeople = ({ person }) => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [fruit, setFruit] = useState('');

  const handlePost = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `http://localhost:8000/api/people/${person.person_id}`,
      {
        method: 'PATCH',
        body: JSON.stringify({ fname, lname, favorite_fruit: fruit }),
        headers: {
          'content-type': 'application/json'
        }
      }
    );
    const data = await res.json();
    window.location.reload(true);
  };

  return (
    <>
      <p>
        <strong>Create a Person</strong>
      </p>
      <form>
        <label htmlFor='fname'>First Name</label>
        <input
          type='text'
          name='fname'
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <br />
        <label htmlFor='lname'>Last Name</label>
        <input
          type='text'
          name='lname'
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <br />
        <label htmlFor='fruit'>Favorite Fruit</label>
        <input
          type='text'
          name='fruit'
          value={fruit}
          onChange={(e) => setFruit(e.target.value)}
        />
        <br />
        <button onClick={(e) => handlePost(e)}>Submit</button>
      </form>
    </>
  );
};

export default CreatePeople;
