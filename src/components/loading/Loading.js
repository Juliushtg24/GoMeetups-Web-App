import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.item}>
      <div className={styles.loading}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h3>Please Wait</h3>
    </div>
  );
}

export default Loading;
