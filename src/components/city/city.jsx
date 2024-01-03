import './city.css'

export default function City(props) { 
  const {people, image, date, placeName, desc, rate, price } = props.city;
  return (
    <div className='city'>
      <div className="image">
        <img src={image} alt={placeName} />
        <div className='stats'>
          <span>{date}</span>
          <span>{people} people</span>
      </div>
        </div>
      <div className="content">
        <h3>{placeName}</h3>
        <p>{desc}</p>
        <div className='price-holder'>
          <span>{price} $</span>
          <span><img src="assets/images/star_2.svg" alt="star" /> {rate}</span>
        </div>
      </div>
    </div>
  );
}