import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'
import { useContext } from 'react'
import FavoritesContext from '../store/favorites-context'

const MainNavigation = () => {
  const {totalFavorites} = useContext(FavoritesContext)
  return (
    <header className={classes.header}>
    <div className={classes.logo}>Meetups</div>
    <nav>
      <ul>
        <li>
          <Link to='/'>All meetups</Link>
        </li>
        <li>
          <Link to='/new-meetup'>Add new meetul</Link>
        </li>
        <li>
          <Link to='/favorites'>My Fav
            <span className={classes.badge}>{totalFavorites}</span>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default MainNavigation
