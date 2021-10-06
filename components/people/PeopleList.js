import PeopleItem from './PeopleItem';
import peopleStyle from '../../styles/List.module.css'

const PeopleList = ({ people }) => {
  return (
    <div className={peopleStyle.grid}>
      {people.map((person) => (
        <PeopleItem key={person.person_id} person={person} />
      ))}
    </div>
  );
};

export default PeopleList;