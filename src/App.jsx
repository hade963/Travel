import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/header/header"
import SectionTitle from './components/sectiontitle/sectiontitle'
import Card from './components/service/service'
function App() {
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
  const cards = [
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

  return (
    <>
    <Header />
    <div className='landing'>
      <p>No Matter Where You're Going To, We'll Take You There</p>
    </div>
    <div className='category'>
      <SectionTitle sectionName={sections[0].sectionName} sectionTitle={sections[0].sectionTitle} />
      <div className='container'>
      {cards.map((element, index) => (<Card key={index} {...element} />))}
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
    </div>
    </>
  )
}

export default App
