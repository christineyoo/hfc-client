import AnimalsList from '../components/animals/AnimalsList'

export default function Home({animals}) {
  return (
    <div>
      <AnimalsList animals={animals} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:8000/api/animals`)
  const animals = await res.json()

  return {
    props: {
      animals
    }
  }
}