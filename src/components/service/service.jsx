import './service.css'

export default function Card(props) { 
  const {image, title, text} = props;
  return(
    <div className="service">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}