import Header from './Header';
import './App.css';

function App() {

  return (
    <>
      <Header />

      <main>
        <article>
          <section className="section hero">
            <div className="container">
    

              <div className="hero-content">
                <h1 className="h1 hero-title">
                  Godfred Awudi - Developer
                </h1>

                <p className="hero-text">
                  My course of study is Computer Science and I see challenges as an opportunity to learn and grow.
                </p>

                <p className="hero-text">
                  My goal is to become a multidisciplinary developer and designer who can build and design software solutions that can solve the complex problems.
                </p>

                <p className="hero-text">
                  Let's connect on LinkedIn to start something great.
                </p>

                <a href="https://www.linkedin.com/in/godfred-awudi/" target='_blank' rel="noreferrer">
                  <li className="btn btn-secondary has-after">
                    Click Me
                  </li>
                </a>
              </div>

              {/* Profile Picture */}
              <figure className="hero-banner">
                <img src='./hero-img.png' alt="Godfred's Picture" width="510" height="540" />
              </figure>
            </div>
          </section>
        </article>
      </main>
    </>
  )
}

export default App
