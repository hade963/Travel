import './card.css'

export default function Card(props) { 
  const {image, people, days, title, desc, flag} = props.place;
  return (
    <div className="card">
      <div className="image">
        <img src={image} alt={title} />
        <img src={flag} alt={title + " flag"}/>
      </div>
      <div className='people'>
        <span><img src="/assets/images/uil_calender.svg" alt="calender" /> {days} Days</span>
        <span><img src="/assets/images/user-avatar.svg" alt="calender" /> {people} People Going</span>
      </div>
      <div className='place'>
        <h3>{title}</h3>
        <span>
          <img src="/assets/images/star.svg" alt="star" />
          <img src="/assets/images/star.svg" alt="star" />
          <img src="/assets/images/star.svg" alt="star" />
          <img src="/assets/images/star.svg" alt="star" />
          <img src="/assets/images/star.svg" alt="star" />
        </span>
      </div>
      <p>{desc}</p>
      <button>Explore Now</button>
    </div>
  );

}