import NewMeetupForm from "../components/meetups/NewMeetupForm"
import { useNavigate } from "react-router-dom"

const NewMeetupsPage = () => {
  const navigate = useNavigate()

  const addMeetupHandler = (meetupData) => {
    fetch(process.env.REACT_APP_BACKEND_URL, {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      navigate('/',{replace:true})
    })
  }

  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
  )
}

export default NewMeetupsPage
