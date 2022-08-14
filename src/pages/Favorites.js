import { useContext } from "react";
import FavoriteContext from "../store/favorite-context";
import MeetupList from "../components/meetup/MeetupList";

function FavoritesPage() {
  const favoriteCtx = useContext(FavoriteContext);

  let content;

  if (favoriteCtx.totalFavorites === 0) {
    content = (
      <p className="banner-desc">
        You got no favorites yet. Start Adding Meetup!
      </p>
    );
  } else {
    content = <MeetupList meetup={favoriteCtx.favorites} />;
  }

  return (
    <div>
      <h1 className="banner-title">My Favorites</h1>
      {content}
    </div>
  );
}

export default FavoritesPage;
