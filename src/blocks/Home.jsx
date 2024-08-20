import heroVid from '../images/headerVid.mp4' 

import companyLogo from '../images/logo.png';
import approachIMG from '../images/approachIMGff.jpg'

function Home() {
    return (
      <main>
      <div className="hero container  ">
      <video className='hero-video' autoPlay muted loop playsInline>
          <source src={heroVid}/>
      </video>    
      <div className="hero__main">
          <img
      className="hero__main-image"
      src={companyLogo}
          
      alt="swampy!"
       loading="lazy"
      />
        <div className="hero__main-body">
          <h2 className="hero__main-title">
            Забронировать место
            <br/>
             в самой крутой 
             <br/>
             КИБЕРКВАРТИРА</h2>
          <button className="button hero__main-button ">Забронировать</button>
        </div>
      </div>
  </div>



 <div className="container approach">
  <div className="approach__body">
    <div className="approach__body-main">
    <h1 className='approach__body-main-title'>Новый подход к<br/> киберспортивному<br/> пространству</h1>
  <p className="approach__body-main-description">
  Это стильный, ни на что не похожий интерьер, крутая атмосфера, возможность вкусно перекусить во время игры и отличный сервис во всем.

Возможность прийти одному или командой. Буткемпы, стримерские, турниры разного уровня. Но самое главное, SWAMP – это просто лучшее место для игры. Place to play 24/7.
  </p>
    </div>
   
  <img
      className="approach__body-img"
      src={approachIMG}
          
      alt="approach"
       loading="lazy"
      />
 </div>
 </div>
  {/* <div class="process">
  <ol class="process__list">
    <li class="process__item">
      <details class="process__accordion" open>
        <summary class="process__accordion-header">
          <h3 class="process__accordion-title">Consulvation</h3>
          <span class="process_accordion-indicator"></span>
        </summary>
        <div class="process__accordion-body">
          <p>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p></div>
      </details>
    </li>
    <li class="process__item">
      <details class="process__accordion">
        <summary class="process__accordion-header">
          <h3 class="process__accordion-title">Research and Strategy Development</h3>
          <span class="process_accordion-indicator"></span>
        </summary>
        <div class="process__accordion-body">
          <p>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p></div>
      </details>
    </li>
    <li class="process__item">
      <details class="process__accordion">
        <summary class="process__accordion-header">
          <h3 class="process__accordion-title">Implementation</h3>
          <span class="process_accordion-indicator"></span>
        </summary>
        <div class="process__accordion-body">
          <p>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p></div>
      </details>
    </li>
    <li class="process__item">
      <details class="process__accordion">
        <summary class="process__accordion-header">
          <h3 class="process__accordion-title">Monitoring and Optimization</h3>
          <span class="process_accordion-indicator"></span>
        </summary>
        <div class="process__accordion-body">
          <p>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p></div>
      </details>
    </li>
    <li class="process__item">
      <details class="process__accordion">
        <summary class="process__accordion-header">
          <h3 class="process__accordion-title">Reporting and Communication</h3>
          <span class="process_accordion-indicator"></span>
        </summary>
        <div class="process__accordion-body">
          <p>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p></div>
      </details>
    </li>
    <li class="process__item">
      <details class="process__accordion">
        <summary class="process__accordion-header">
          <h3 class="process__accordion-title">Continual Improvement</h3>
          <span class="process_accordion-indicator"></span>
        </summary>
        <div class="process__accordion-body">
          <p>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p></div>
      </details>
    </li>
  </ol>
</div>       */}
  
  </main>  
    );
  }
  
  export default Home;
  