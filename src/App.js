import './App.css';
import { useState } from 'react';

const images ={
  logo:         require('./images/logo.svg').default,
  webDesktop:   require('./images/image-web-3-desktop.jpg'),
  //no need for that.
  //web3Mobile:   require('./images/image-web-3-mobile.jpg'),
  topLaptops:   require('./images/image-top-laptops.jpg'),
  retroPcs:     require('./images/image-retro-pcs.jpg'),
  gamingGrowth: require('./images/image-gaming-growth.jpg'),
  menu:         require('./images/icon-menu.svg').default,
  menuClose:    require('./images/icon-menu-close.svg').default
}



//miss the node modul 


function Header(){

  

  const [state, setState] = useState(false);

  let icon;

  let nav;

  if(state){
    icon = images.menuClose
    nav = 
    (<div className='menu'>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">New</a>
        </li>
        <li>
          <a href="#">Popular</a>
        </li>
        <li>
          <a href="#">Trending</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
      </ul>
      </div>)
    
  } else{
    icon = images.menu
  }


  return (
  <div>
    <header>

      <img src={images.logo} alt="logo" />
      <img src={icon} alt="icon" onClick={()=>setState(!state)}
      />
      <nav>
        <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">New</a>
            </li>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
          </ul>
      </nav>

    </header>
    {nav}
  </div>
  )
}

function Main(){
  return(
    <main>

      <div className='div1'>

        <section className='sec1'>

          <img src={images.webDesktop} alt="web3Desktop" />

          <div className='sec1-div'>

            <h1>  The Bright Future of Web 3.0?</h1>

            <div>

              <p>
                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                But is it really fulfilling its promise?
              </p>

              <button>Read more</button>

            </div>

          </div>

        </section>

        <section className='sec2'>

          <h2> New </h2>
          
          <a href="#"><h3>Hydrogen VS Electric Cars</h3></a>
          <p>
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>

          <a href="#"><h3>The Downsides of AI Artistry</h3></a>
          <p>
            What are the possible adverse effects of on-demand AI image generation?
          </p>

          <a href="#"><h3>Is VC Funding Drying Up?</h3></a>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what that means.
          </p>

        </section>

      </div>
      <div className='div2'>
        <section className='sec3'>

          <div  className='sec3-div'>
            <img src={images.retroPcs} alt="retroPcs" />
            <div>
              <span>01</span>
              <a href="#"><h3>Reviving Retro PCs</h3></a>
              <p>
                What happens when old PCs are given modern upgrades?
              </p>
            </div>
          </div>

          <div className='sec3-div'>
            <img src={images.topLaptops} alt="retroPcs" />
            <div>
              <span>02</span>
              <a href="#"><h3>Top 10 Laptops of 2022</h3></a>
              <p>
                Our best picks for various needs and budgets.
              </p>
            </div>

          </div>

          <div className='sec3-div' >
            <img src={images.gamingGrowth} alt="retroPcs" />
            <div >
              <span>03</span>
              <a href="#"><h3>The Growth of Gaming</h3></a>
              <p>
                How the pandemic has sparked fresh opportunities.
              </p>
            </div>

          </div>
          
        </section>
      </div>

    </main>
  )
}

function App() {
  return (
    <div>
    <Header/>
    <Main/>
    </div>
  );
}

export default App;
