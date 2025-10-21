export const Tooltip = ({ interactionData }) => {
  if (!interactionData) return null;

  const { xPos, yPos, name, color, x, y, size, author, review } = interactionData;

  // --- Tooltip layout constants ---
  const TOOLTIP_WIDTH = 350;
  const TOOLTIP_HEIGHT = 150;
  const PADDING = 10;

  // --- Default placement (to the right of point, vertically centered) ---
  let left = xPos + 35;
  let top = yPos - TOOLTIP_HEIGHT / 2;

  // --- Flip horizontally if near right edge ---
  if (left + TOOLTIP_WIDTH > window.innerWidth - PADDING) {
    left = xPos - TOOLTIP_WIDTH - 35;
  }

  // --- Clamp horizontally to viewport ---
  if (left < PADDING) left = PADDING;

  // --- Clamp vertically to viewport ---
  if (top < PADDING) top = PADDING;
  if (top + TOOLTIP_HEIGHT > window.innerHeight - PADDING) {
    top = window.innerHeight - TOOLTIP_HEIGHT - PADDING;
  }

  return (
    <div
      className="tooltip"
      style={{
        left,
        top,
        position: "absolute",
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

      <div className="tooltip-row">{review}</div>
    </div>
  );
};
