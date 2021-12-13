import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
import {useContext} from 'react'
import FavoritesContext from '../store/favorites-context'

const MeetupItem = ({id,image,title,address,description}) => {

  const {itemIsFavorite, removeFavorite, addFavorite} = useContext(FavoritesContext)

  const itemStatusIsFavorite = itemIsFavorite(id)

  const toggleFavoriteHandler = () => {
    if(itemStatusIsFavorite) {
      removeFavorite(id)
    } else {
      addFavorite({
        id: id,
        title: title,
        description: description,
        image: image
      })
    }
  }

  return (
    <li className={classes.item}>
      <Card>   
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteHandler}>{itemStatusIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem
