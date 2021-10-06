import itemStyles from '../../styles/Item.module.css';
import { useState } from 'react';
import UpdateAnimal from './UpdateAnimal'

const AnimalItem = ({ animal }) => {
    const [isEditing, setIsEditing] = useState(false)

  const showEditForm = () => {
      setIsEditing(true)
  };

  return (
    <div className={itemStyles.card}>
      <h1>{animal.animal_type}</h1>
      <p>{animal.animal_description}</p>
      <p>Animal ID: {animal.animal_id}</p>
      <p>I belong to hooman #{animal.belongs_to_pid}</p>
      <button onClick={showEditForm}>Edit</button>
      {isEditing ? <UpdateAnimal animal={animal} /> : ''}
    </div>
  );
};

export default AnimalItem;
