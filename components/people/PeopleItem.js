import peopleItemStyles from '../../styles/PeopleItem.module.css'

const PeopleItem = ({person}) => {
    return (
        <div className={peopleItemStyles.card}>
            <h1>{person.fname} {person.lname}</h1>
            <p>Favorite Fruit: {person.favorite_fruit}</p>
        </div>
    )
}

export default PeopleItem