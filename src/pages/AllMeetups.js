import MeetupList from '../components/meetups/MeetupList'
import { useState,useEffect } from 'react'

const AllMeetupsPage = () => {

  const [loading, setLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL).then(response => {
      return response.json()
    }).then(data => {
      const meetups = []
      
      //firebase object with properties -> array of objects
      for(const key in data) {
        const meetup = {
          id: key,
          ...data[key] //copy all k,v pairs of nested obj
        }
        meetups.push(meetup)
      }

      setLoading(false)
      setLoadedMeetups(meetups)
    })
    return () => {
      //! cleanup
    }
  }, []) //! all external values effect relies on except state updating funcs
  //! const url = props.url -> [props]
  
  if (loading) {
    return (<section><p>Loading...</p></section>)
  }

  return (
    <section>
      <h1>All meetups</h1>
      <ul>
      <MeetupList meetups={loadedMeetups} />
      </ul>
    </section>
  )
}

export default AllMeetupsPage
