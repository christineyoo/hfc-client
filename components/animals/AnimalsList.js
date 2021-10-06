import AnimalItem from './AnimalItem';
import animalStyles from '../../styles/Item.module.css'

const AnimalsList = ({ animals }) => {
  return (
    <div className={animalStyles.grid}>
      {animals.map((animal) => (
        <AnimalItem key={animal.animal_id} animal={animal} />
      ))}
    </div>
  );
};

export default AnimalsList;
