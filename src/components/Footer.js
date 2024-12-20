import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">hillsend🏔️</h1>
                <p className="footer-text">
                Where Every Stay Feels Like Home
        
                </p>
              </div>
              {/* <div className="col-md-3">
                <p className="footer-title">Important Link</p>
                <ul>
                  <li>
                  <Link   
                         spy={true}
                         smooth={true}
                         duration={1000}
                         to="headerbg"
                  > Home </Link>
                  </li>
                  <li>
                  <Link to="services" spy={true} smooth={true} duration={1000} > Services </Link>
                  </li>
                  <li>
                  <Link to="about-scroll" spy={true} smooth={true} duration={1000}>About Us  </Link>
                  </li>
                  <li>
                  <Link to="contact" spy={true} smooth={true} duration={1000}> Contact  </Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <Link to="#" >hillsendvilla@gmail.com</Link><br></br>
                    <Link to="#" >anujamahagamage303gmail.com</Link><br></br>
                    <Link to="#" >amarashantha64@gmail.com</Link><br></br>
                    
                    <Link to="#" >+94 77 358 9181 </Link><br></br>
                    <Link to="#" >+94 760312178 </Link><br></br>
                                      
                   </li>
              
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Social Media</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://web.whatsapp.com/" > Whatsapp</a>
                  </li>
              
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://web.facebook.com/profile.php?id=61570984074200">Facebook</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
