import { useState } from 'react'
import Link from 'next/link';
import peopleItemStyles from '../../styles/PeopleItem.module.css';
import UpdatePerson from './UpdatePerson'

const PeopleItem = ({ person }) => {
    const [isEditing, setIsEditing] = useState(false)

  const showEditForm = () => {
      setIsEditing(true)
  };

  return (
    <>
      <div className={peopleItemStyles.card}>
        <Link href='/person/[id]' as={`/person/${person.person_id}`}>
          <h1>
            {person.fname} {person.lname}
          </h1>
        </Link>
        <p>Favorite Fruit: {person.favorite_fruit}</p>
        <button onClick={showEditForm}>Edit</button>
        {isEditing ? <UpdatePerson person={person} /> : ''}
      </div>
    </>
  );
};

export default PeopleItem;
