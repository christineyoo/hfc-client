import Link from 'next/link';
import { useRouter } from 'next/router'

const Genre = ({ person }) => {
    const router = useRouter()
    const {id} = router.query

  return (
    <>
      <h1>Individual Person page</h1>
      <h2>
        {person.fname} {person.lname}
      </h2>
      <h3>ID: {id}</h3>
      <p>Favorite Fruit: {person.favorite_fruit}</p>

      <Link href='/'>
        <button>Go Back</button>
      </Link>
    </>
  );
};

export default Genre;

export const getStaticProps = async (context) => {
  console.log('in getStaticProps', context);
  const res = await fetch(
    `http://localhost:8000/api/people/${context.params.id}`
  );
  const person = await res.json();

  return {
    props: {
      person
    }
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:8000/api/people`);
  const people = await res.json();
  const ids = people.map((person) => person.person_id);
  console.log(ids);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false
  };
};
