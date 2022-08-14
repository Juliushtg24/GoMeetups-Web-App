import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetup/NewMeetupForm";

function NewMeetupsPage() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-meetup-f0c44-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  }
  return (
    <section>
      <h1 className="banner-title">New Meetups</h1>
      <h3 className="banner-desc">Create Your Meetup</h3>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
