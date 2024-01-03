import './root.css'
import { useState } from 'react'
import Header from "../../components/header/header"
import SectionTitle from '../../components/sectiontitle/sectiontitle'
import Service from '../../components/service/service'
import Card from '../../components/card/card'
import Footer from '../../components/footer/footer'

export default function Root() {
  const [count, setCount] = useState(0)
  const sections = [
    {
      sectionName: 'category',
      sectionTitle: 'We Offer Best Services',
    },
    {
      sectionName: 'trendy',
      sectionTitle: 'Our Trending Tour Packages',
    },
  ]
  const Services = [
    {
      image: '/assets/images/service-1.png',
      title: 'Guided Tours',
      text: 'sunt qui repellat saepe quo velit aperiam id aliquam placeat.',
    },
    {
      image: '/assets/images/service-2.png',
      title: 'Best Flights Options',
      text: 'sunt qui repellat saepe quo velit aperiam id aliquam placeat.',
    },
    {
      image: '/assets/images/service-3.png',
      title: 'Religious Tours',
      text: 'sunt qui repellat saepe quo velit aperiam id aliquam placeat.',
    },
    {
      image: '/assets/images/service-4.png',
      title: 'Medical insurance',
      text: 'sunt qui repellat saepe quo velit aperiam id aliquam placeat.',
    },
  ]

  
  const places = [
    {
      image: '/assets/images/n1.png',
      flag: '/assets/images/flag-1.png',
      title: 'Switzerland',
      days: '8',
      people: '30',
      desc: 'Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.',
    },
    {
      image: '/assets/images/n2.png',
      flag: '/assets/images/flag-2.png',
      title: 'Amazon',
      days: '8',
      people: '60',
      desc: 'Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.',
    },
    {
      image: '/assets/images/n3.png',
      flag: '/assets/images/flag-3.png',
      title: 'Giza',
      days: '8',
      people: '120',
      desc: 'Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.',
    },
  ]

  return (
    <>
    <Header />
    <div className='home-landing'>
      <p>No Matter Where You're Going To, We'll Take You There</p>
    </div>
    <div className='category'>
      <SectionTitle sectionName={sections[0].sectionName} sectionTitle={sections[0].sectionTitle} />
      <div className='container'>
      {Services.map((element, index) => (<Service key={index} {...element} />))}
      </div>
      <div className="holder">
      <div className='image-card'>
      <p>PROMOTION</p>
      <h3>Explore Nature</h3>
      <button>View Packages</button>
      </div>
      <div className='image-card'>
      <p>PROMOTION</p>
      <h3>Explore Cities</h3>
      <button>View Packages</button>
      </div>
    </div>
    </div>
    <div className="trendy">
      <SectionTitle sectionName={sections[1].sectionName} sectionTitle={sections[1].sectionTitle}/>
      <div className="container">
      {places.map( (e, index)=> <Card place={e} key={index}/>)}
      </div>
    </div>
    <Footer />
    </>
  )
}