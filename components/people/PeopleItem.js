import peopleItemStyles from '../../styles/PeopleItem.module.css'
import Link from 'next/link'

const PeopleItem = ({person}) => {
    return (
        <Link href='/person/[id]' as={`/person/${person.person_id}`}>
        <div className={peopleItemStyles.card}>
            <h1>{person.fname} {person.lname}</h1>
            <p>Favorite Fruit: {person.favorite_fruit}</p>
        </div>
        </Link>
        
    )
}

export default PeopleItem