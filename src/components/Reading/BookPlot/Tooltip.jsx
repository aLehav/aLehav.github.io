import styles from "./tooltip.module.css";

export const Tooltip = ({ interactionData }) => {
  if (!interactionData) {
    return null;
  }

  const { xPos, yPos, name, color, x, y, size, author, review } = interactionData;

  return (
    <div
      className={styles.tooltip}
      style={{
        left: xPos,
        top: yPos,
      }}
    >
      <b className={styles.title}>{name}</b>
      

      <div className={styles.row}>
        <i>{author}</i>
      </div>

      <div className={styles.separator} />

      <div className={styles.topHalfContainer} style={{ borderColor: color }}>
        <div className={styles.row}>
          <span>How Much I Liked It</span>
          <b>{Math.round(x * 100)} / 100</b>
        </div>
        <div className={styles.row}>
          <span>How Much I Suggest It</span>
          <b>{Math.round(y * 100)} / 100</b>
        </div>
        <div className={styles.row}>
          <span>Pages</span>
          <b>{size}</b>
        </div>
      </div>

      <div className={styles.separator} />

      <div className={styles.row}>
        {review}
      </div>
    </div>
  );
};
