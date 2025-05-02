
export const Tooltip = ({ interactionData }) => {
  if (!interactionData) {
    return null;
  }

  const { xPos, yPos, name, color, x, y, size, author, review } = interactionData;

  return (
    <div
      className="tooltip"
      style={{
        left: xPos,
        top: yPos,
      }}
    >
      <b className="tooltip-title">{name}</b>
      

      <div className="tooltip-row">
        <i>{author}</i>
      </div>

      <div className="tooltip-separator" />

      <div className="tooltip-topHalfContainer" style={{ borderColor: color }}>
        <div className="tooltip-row">
          <span>How Much I Liked It</span>
          <b>{Math.round(x * 100)} / 100</b>
        </div>
        <div className="tooltip-row">
          <span>How Much I Suggest It</span>
          <b>{Math.round(y * 100)} / 100</b>
        </div>
        <div className="tooltip-row">
          <span>Pages</span>
          <b>{size}</b>
        </div>
      </div>

      <div className="tooltip-separator" />

      <div className="tooltip-row">
        {review}
      </div>
    </div>
  );
};
