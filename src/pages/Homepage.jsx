import images from "../assets/images/images";
const Homepage = () => {
  return (
    <>
      <div class="hero-container">
        <div class="hero-heading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <div class="hero-sub-heading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
          turpis vel ex sodales ornare lacinia sed quam. Suspendisse mollis
          vulputate mauris, vitae vestibulum libero aliquet quis. Etiam ut
          turpis nulla. Donec venenatis semper faucibus.
        </div>
        <div class="hero-action">
          <button class="button">Get Started</button>
        </div>
      </div>
      <div class="main">
        <section class="mission">
          <div class="section-heading">
            <div>
              Our Mission <span class="section-heading-underline"></span>
            </div>
          </div>
          <div class="mission-grid">
            <div class="mission-left">
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                id turpis vel ex sodales ornare lacinia sed quam. Suspendisse
                mollis vulputate mauris, vitae vestibulum libero aliquet quis.
                Etiam ut turpis nulla. Donec venenatis semper faucibus.
              </p>
              <button class="button">Get Started</button>
            </div>
            <div class="mission-right">
              <div class="achivement-container">
                <div class="achivement-box">
                  <div class="inner-box">
                    <h4 class="box-title">110K</h4>
                    <p class="box-text">Tree planted</p>
                  </div>
                </div>
                <div class="achivement-box">
                  <div class="inner-box">
                    <h4 class="box-title">245K</h4>
                    <p class="box-text">Tons of carbon reduced</p>
                  </div>
                </div>
                <div class="achivement-box">
                  <div class="inner-box">
                    <h4 class="box-title">150</h4>
                    <p class="box-text">Project supported</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="what-we-do">
          <div class="section-heading">
            <div>
              What We Do <span class="section-heading-underline"></span>
            </div>
          </div>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
            turpis vel ex sodales ornare lacinia sed quam. Suspendisse mollis
            vulputate mauris, vitae vestibulum libero aliquet quis. Etiam ut
            turpis nulla. Donec venenatis semper faucibus.
          </p>
          <div class="what-we-do-grid">
            <div class="wwd-item nft">
              <div class="wwd-icon">
                <img src={images.icons.nft} alt="" />
              </div>
              <div class="wwd-heading">NFT Marketplace</div>
              <div class="wwd-text">
                Lorem ipsum dolor sit ame, consectetur adipiscing elit. Mauris
                id mi ut dapibus.
              </div>
            </div>
            <div class="wwd-item exchange">
              <div class="wwd-icon">
                <img src={images.icons.center_exchange} alt="" />
              </div>
              <div class="wwd-heading">Centralized Exchange</div>
              <div class="wwd-text">
                Lorem ipsum dolor sit ame, consectetur adipiscing elit. Mauris
                id mi ut dapibus.
              </div>
            </div>
            <div class="wwd-item computers">
              <div class="wwd-icon">
                <img src={images.icons.computers} alt="" />
              </div>
              <div class="wwd-heading">Blockchain Technology</div>
              <div class="wwd-text">
                Lorem ipsum dolor sit ame, consectetur adipiscing elit. Mauris
                id mi ut dapibus.
              </div>
            </div>
            <div class="wwd-item frame">
              <div class="wwd-icon">
                <img src={images.icons.frame} alt="" />
              </div>
              <div class="wwd-heading">Decentralized Exchange</div>
              <div class="wwd-text">
                Lorem ipsum dolor sit ame, consectetur adipiscing elit. Mauris
                id mi ut dapibus.
              </div>
            </div>
          </div>
        </section>
        <section class="why-we-are">
          <div class="why-we-are-grid">
            <div class="why-we-are-left">
              <div class="section-heading">
                <div>
                  Why We Are <span class="section-heading-underline"></span>
                </div>
              </div>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                id turpis vel ex sodales ornare lacinia sed quam. Suspendisse
                mollis vulputate mauris, vitae vestibulum libero aliquet quis.
                Etiam ut turpis nulla. Donec venenatis semper faucibus.
              </p>
              <button class="button">Sign Up</button>
            </div>
            <div class="why-we-are-right">
              <div class="ww-are-item">
                <div class="ww-are-item-heading">Lorem ipsum dolor</div>
                <div class="ww-are-item-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent id rutrum lectus.
                </div>
              </div>
              <div class="ww-are-item">
                <div class="ww-are-item-heading">Lorem ipsum dolor</div>
                <div class="ww-are-item-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent id rutrum lectus.
                </div>
              </div>
              <div class="ww-are-item">
                <div class="ww-are-item-heading">Lorem ipsum dolor</div>
                <div class="ww-are-item-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent id rutrum lectus.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section class="impact-cycle">
        <div class="impact-cycle-heading">Impact Cycle</div>
        <img src={images.icons.group54} width="80%" alt="" />
      </section>
      <div class="main-two">
        <section class="challenges">
          <div class="challenges-grid">
            <div class="challenges-grid-left">
              <div class="section-heading-two">
                <div>Challenges</div>
              </div>
              <div class="challenges-section-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                id turpis vel ex sodales ornare lacinia sed quam. Suspendisse
                mollis vulputate mauris, vitae vestibulum libero aliquet quis.
                Etiam ut turpis nulla. Donec venenatis semper faucibus.
                Pellentesque eu lobortis justo. Maecenas eleifend condimentum
                nisi, vel pulvinar nisl rutrum in.
                <br />
                Integer a arcu nunc. Nunc maximus elementum est, nec fermentum
                dolor lobortis at.
              </div>
            </div>
            <div class="challenges-grid-right">
              <img src={images.icons.challengeSection} alt="" />
            </div>
          </div>
        </section>
        <section class="solutions">
          <div class="section-heading-two">
            <div>Solutions</div>
          </div>
          <div class="solution-section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
            turpis vel ex sodales ornare lacinia sed quam. Suspendisse mollis
            vulputate mauris, vitae vestibulum libero aliquet quis. Etiam ut
            turpis nulla. Donec venenatis semper faucibus. Pellentesque eu
            lobortis justo.
          </div>
          <div class="solution-grid">
            <div class="solution-item solution-item-first">
              <div class="solution-item-heading">Solition 01</div>
              <div class="solution-item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                id turpis vel ex sodales ornare lacinia sed quam. Suspendisse
                mollis vulputate mauris, vitae vestibulum libero aliquet quis.
                Etiam ut turpis nulla.
              </div>
            </div>
            <div class="solution-item solution-item-second">
              <div class="solution-item-heading">Solition 01</div>
              <div class="solution-item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                id turpis vel ex sodales ornare lacinia sed quam. Suspendisse
                mollis vulputate mauris, vitae vestibulum libero aliquet quis.
                Etiam ut turpis nulla.
              </div>
            </div>
            <div class="solution-item solution-item-third">
              <div class="solution-item-heading">Solition 01</div>
              <div class="solution-item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                id turpis vel ex sodales ornare lacinia sed quam. Suspendisse
                mollis vulputate mauris, vitae vestibulum libero aliquet quis.
                Etiam ut turpis nulla.
              </div>
            </div>
            <div class="solution-item solution-item-fourth">
              <div class="solution-item-heading">Solition 01</div>
              <div class="solution-item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                id turpis vel ex sodales ornare lacinia sed quam. Suspendisse
                mollis vulputate mauris, vitae vestibulum libero aliquet quis.
                Etiam ut turpis nulla.
              </div>
            </div>
          </div>
        </section>
        <section class="project">
          <div class="section-heading">
            <div>
              Our Projects <span class="section-heading-underline"></span>
            </div>
          </div>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
            turpis vel ex sodales ornare lacinia sed quam. Suspendisse mollis
            vulputate mauris, vitae vestibulum libero aliquet quis. Etiam ut
            turpis nulla. Donec venenatis semper faucibus.
          </p>
          <div class="project-grid">
            <div class="project-grid-item project-grid-item-first">
              <div class="project-img">
                <img src={images.projects.one} alt="" />
              </div>
              <div class="project-heading">Lorem Ipsum Dorem Sit Amet</div>
              <div class="project-details">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                velit mauris, dictum id ullamcorper vel
              </div>
            </div>
            <div class="project-grid-item project-grid-item-second">
              <div class="project-img">
                <img src={images.projects.two} alt="" />
              </div>
              <div class="project-heading">Lorem Ipsum Dorem Sit Amet</div>
              <div class="project-details">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                velit mauris, dictum id ullamcorper vel
              </div>
            </div>
            <div class="project-grid-item project-grid-item-third">
              <div class="project-img">
                <img src={images.projects.three} alt="" />
              </div>
              <div class="project-heading">Lorem Ipsum Dorem Sit Amet</div>
              <div class="project-details">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                velit mauris, dictum id ullamcorper vel
              </div>
            </div>
          </div>
        </section>
        <section class="join">
          <div class="join-heading">Join the movement with YourWorld3</div>
          <div class="join-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque tincidunt arcu et magna ornare gravida. Mauris a elit
            nec est interdum bibendum.
          </div>
          <div class="join-form">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Email Here"
            />
            <button class="button join-btn">Contact Us</button>
          </div>
        </section>
        <footer>
          <div class="footer-grid">
            <div class="footer-item f-item-one">
              <img src={images.logo} alt="" />
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eu dolor dapibus, mattis sem non, porta odio. Orci
                varius natoque penatibus et magnis dis parturient montes.
              </div>
              <div class="social-icons">
                <div class="icon">
                  <img src={images.icons.insa} alt="" />
                </div>
                <div class="icon">
                  <img src={images.icons.twitter} alt="" />
                </div>
                <div class="icon">
                  <img src={images.icons.youtube} alt="" />
                </div>
              </div>
            </div>
            <div class="footer-item f-item-two">
              <span class="footer-item-heading">Quick Links</span>
              <span>About Us</span>
              <span>Our Mission</span>
              <span>Services</span>
              <span>Solutions</span>
              <span>Our Projects</span>
            </div>
            <div class="footer-item f-item-three">
              <span class="footer-item-heading">Services</span>
              <span>NFT Marketplace</span>
              <span>Centralized Exchange</span>
              <span>Decentralized Exchange</span>
              <span>Blockchain Based Certifications</span>
            </div>
            <div class="footer-item f-item-four">
              <span class="footer-item-heading">Stay up to date</span>
              <span>
                Stay updated with CarbExch's news, zero spam, we promise 🙏
              </span>
              <div class="footer-item-form">
                <input placeholder="your email address" type="text" />
                <span class="footer-item-form-icon">
                  <img src="./images/svg/send.svg" alt="" />
                </span>
              </div>
            </div>
          </div>
          <div class="footer-flex">
            <div>
              © 2022 <span class="site-name">YourWorld3</span>. All rights
              reserved
            </div>
            <div>
              <span>Terms & Conditions</span> | <span>Privacy Policy</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;
