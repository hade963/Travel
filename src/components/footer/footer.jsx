import './footer.css'
export default function footer() { 
  return(
    <footer>
      <img src="/assets/images/footer-bg.png" alt="" />
      <div className='container'>
        <div className='holder'>
        <div>
          <div className="logo">
            <img src="/assets/images/footer-logo.svg" alt="" />
          </div>
          <p>Travel helps companies manage payments easily.</p>
          <div className="icons">
            <img src="/assets/images/linkedin.svg" alt="linkedin"/>
            <img src="/assets/images/messenger.svg" alt="messenger"/>
            <img src="/assets/images/twitter.svg" alt="twitter"/>
            <img src="/assets/images/twoo.svg" alt="twoo"/>
          </div>
        </div>
        <div className='links'>
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blogs</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className='links'>
          <h3>Destinations</h3>
          <ul>
            <li>Maldives</li>
            <li>Los Angelas</li>
            <li>Las Vegas</li>
            <li>Torronto</li>
          </ul>
        </div>
      </div>
      <div className='copy'>Copyright &copy; Xpro 2023 All Rights Reserved.</div>
  </div>
    </footer>
  );
}