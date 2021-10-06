import itemStyles from '../../styles/Item.module.css'

const AnimalItem = ({animal}) => {
    return (
        <div className={itemStyles.card}>
            <h1>{animal.animal_type}</h1>
            <p>{animal.animal_description}</p>
            <p>Animal ID: {animal.animal_id}</p>
            <p>I belong to hooman #{animal.belongs_to_pid}</p>
        </div>
    )
}

export default AnimalItem