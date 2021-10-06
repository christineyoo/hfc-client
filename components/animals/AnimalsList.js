import AnimalItem from './AnimalItem';
import animalStyle from '../../styles/Item.module.css'

const AnimalsList = ({ animals }) => {
  return (
    <div className={animalStyle.grid}>
      {animals.map((animal) => (
        <AnimalItem key={animal.animal_id} animal={animal} />
      ))}
    </div>
  );
};

export default AnimalsList;
