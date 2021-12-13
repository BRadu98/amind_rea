// import Todo from './components/Todo';
import { Route, Routes } from 'react-router-dom' //,Navigation
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout'

function App() {
  return (
    <Layout>
      {/* <Todo text='Learn React' />
      <Todo text='Learn Next' /> */}
      <Routes>
      <Route path='/' element={<AllMeetupsPage/>}/>
      <Route path='new-meetup' element={<NewMeetupsPage/>}/>
      <Route path='/favorites' element={<FavoritesPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;