import './Card.css'

export default function Card({image, para}) {
  return (
    <div className="card">
      <li>
        <p>{para}</p>
        <img src={image} alt="icon"/>
      </li>
    </div>
  );
}