import {useContext} from 'react'
import FavoritesContext from '../components/store/favorites-context'
import MeetupList from '../components/meetups/MeetupList'

const FavoritesPage = () => {
  const {favorites,totalFavorites} = useContext(FavoritesContext)

  let content
  if ( totalFavorites === 0 ) {
    content = <p>You got no favorites yet, add some</p>
  } else {
    content = <MeetupList meetups={favorites}></MeetupList>
  }

  return (
    <section>
      <h1>Favorites</h1>
      {content}
    </section>
  )
}

export default FavoritesPage
