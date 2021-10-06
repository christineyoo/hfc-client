import CreatePeople from '../components/people/CreatePeople'
import AnimalsList from '../components/animals/AnimalsList';
import PeopleList from '../components/people/PeopleList';

export default function Home({ animals, people }) {
  

  return (
    <div>
      <CreatePeople />
      <AnimalsList animals={animals} />
      <PeopleList people={people} />
    </div>
  );
}

export const getStaticProps = async () => {
  const animalRes = await fetch(`http://localhost:8000/api/animals`);
  const animals = await animalRes.json();

  const peopleRes = await fetch(`http://localhost:8000/api/people`);
  const people = await peopleRes.json();

  return {
    props: {
      animals,
      people
    }
  };
};
