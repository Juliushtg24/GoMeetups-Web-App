import { useContext } from "react";
import styles from "./MeetupItem.module.css";
import FavoriteContext from "../../store/favorite-context";

function MeetupItem(props) {
  const favoriteCtx = useContext(FavoriteContext);
  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

  function toggleFavorite() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={styles.item}>
      <div className={styles.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={styles.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={styles.button}>
        <button onClick={toggleFavorite}>
          {itemIsFavorite ? "Remove Favorite" : "Add Favorite"}
        </button>
      </div>
    </li>
  );
}

export default MeetupItem;
