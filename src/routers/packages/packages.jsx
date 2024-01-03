import './packages.css';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import City from '../../components/city/city';
export default function Packages() { 
  const places = [
    {
      people: '30+',
      date: '27, Septemper 2023',
      image: 'assets/images/city-1.png',
      placeName: 'Maldives',
      desc: 'Qui tempore voluptate qui quia commodi rem praesentium alias et.',
      price: '3000',
      rate: '5.0'
    },
    {
      people: '120+',
      date: '13, October 2023',
      image: 'assets/images/city-2.png',
      placeName: 'Switzerland',
      desc: 'Qui tempore voluptate qui quia commodi rem praesentium alias et.',
      price: '1290',
      rate: '4.9'
    },
    {
      people: '139+',
      date: '2, November 2022',
      image: 'assets/images/city-3.png',
      placeName: 'Berlin',
      desc: 'Qui tempore voluptate qui quia commodi rem praesentium alias et.',
      price: '2970',
      rate: '5.0'
    },
    {
      people: '50+',
      date: '14, December 2022',
      image: 'assets/images/city-4.png',
      placeName: 'Torronto',
      desc: 'Qui tempore voluptate qui quia commodi rem praesentium alias et.',
      price: '1110',
      rate: '4.0'
    },
    {
      people: '80+',
      date: '20, Septemper 2022',
      image: 'assets/images/city-5.png',
      placeName: 'Baku',
      desc: 'Qui tempore voluptate qui quia commodi rem praesentium alias et.',
      price: '1220',
      rate: '4.5'
    },
    {
      people: '100+',
      date: '27, Augest 2022',
      image: 'assets/images/city-6.png',
      placeName: 'Chinese',
      desc: 'Qui tempore voluptate qui quia commodi rem praesentium alias et.',
      price: '1290',
      rate: '4.9'
    },
  ];
  return(
    <>
    <Header />
    <div className='packages-landing'>
      <p>Travel With Us</p>
    </div>
    <div className="cards">
      <div className="container">
        {places.map((e, index )=> <City city = {e} key={index } /> )}
      </div>
    </div>
    <Footer />
    </>
  );
}