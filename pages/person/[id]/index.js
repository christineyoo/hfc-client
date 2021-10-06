import Link from 'next/link';
import { useRouter } from 'next/router';
import AnimalItem from '../../../components/animals/AnimalItem';
import personStyles from '../../../styles/Item.module.css';

const Person = ({ person, animals }) => {
  const router = useRouter();
  const { id } = router.query;
  const animalsOwned = animals.filter(
    (animal) => animal.belongs_to_pid == person.person_id
  );

  return (
    <div>
      <h1>Individual Person page</h1>
      <h2>
        {person.fname} {person.lname}
      </h2>
      <h3>ID: {id}</h3>
      <p>Favorite Fruit: {person.favorite_fruit}</p>
      <p>Animal(s) belonging to {person.fname}: </p>
      <div className={personStyles.grid}>
        {animalsOwned.map((animal) => (
          <AnimalItem key={animal.animal_id} animal={animal} />
        ))}
      </div>

      <Link href='/'>
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Person;

export const getStaticProps = async (context) => {
  const res = await fetch(
    `http://localhost:8000/api/people/${context.params.id}`
  );
  const person = await res.json();

  const animalsRes = await fetch(`http://localhost:8000/api/animals`);
  const animals = await animalsRes.json();

  return {
    props: {
      person,
      animals
    }
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:8000/api/people`);
  const people = await res.json();
  const ids = people.map((person) => person.person_id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false
  };
};
