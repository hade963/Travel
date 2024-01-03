import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import SectionTitle from '../../components/sectiontitle/sectiontitle'
import './about.css'

export default function About() { 
  return(
    <>
    <Header />
    <div className='about-landing'>
      <p>About Us</p>
    </div>
    <div className='promotion'>
      <div className='left-side'>
      <SectionTitle sectionName="promotion" sectionTitle="We Provide You Best Europe Sightseeing Tours"/>
      <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
      <button>View Packages</button>
      </div>
    <div className='right-side'>
      <img src="/assets/images/promotion_img.png" alt="promotion" />
    </div>
      </div>
    <div className='banner'>
      <h2>Wanderlust</h2>
    </div>
    <div className='tours'>
    <div className="image">
      <img src="/assets/images/TourPlans-img.png" alt="" />
    </div>
    <div className='content'>
      <SectionTitle sectionName='trend' sectionTitle='Our Popular Tour Plans'/>
      <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium.</p>
      <div className='stat-holder'>
        <div className='stat'>
          <span>78%</span>
          <p>vacations</p>
        </div>
        <div className='stat'>
          <span>55%</span>
          <p>Honeymoon</p>
        </div>
      </div>
    </div>
    </div>
    <Footer />
    </>
  );
}