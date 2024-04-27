import "./BottomItem.css";

export default function BottomItem({ image, text, isExtended }) {
  return (
    <div className="bottom">
      <div className="bottom-item">
        <img src={image} />
        {isExtended ? <p>{text}</p> : null}
      </div>
    </div>
  );
}
