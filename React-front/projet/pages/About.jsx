import {  React,useEffect, useState } from 'react';
import Loading from '../components/Loading.jsx';
import {PortableText} from '../../../sanity-CMS/node_modules/@portabletext/react'
import {getaboutpage} from '../SanityApi/SanityApi';

function About() { 
  const [data , setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getaboutpage().then(data => {
      setData(data);
      setLoading(false);
    }).catch(console.error);
          
  }, []);

  return (
    <>
    {/*
      <div className="about">

        <main>
          <section className="article-grid">
            <div className="row">
              <div className="col">
                <div className="img">
                  <img src="https://fannytexier.com/wp-content/uploads/2023/07/DSC01338-Enhanced-NR-copy-1.jpeg" alt="" width="100%" height="100%" />
                </div>
              </div>
              <div className="col">
                <div className="article">
                  <h3> About Fanny — + —</h3>
                  <div className="description">

                    <p>Fanny Texier is an award-winning director, cinematographer, and editor born in Paris and based in Brooklyn. Fanny is interested in untold stories about women and those underrepresented in traditional media. <span style={{fontWeight: "400"}}>As a documentary filmmaker, Fanny maintains a commitment to telling empowering stories that uplift the spirit, with a particular focus on exploring themes of identity and human coping mechanisms.&nbsp;</span></p>
                    <p>As a freelance video journalist, Fanny has worked for outlets including The New Yorker, BBC, VICE News, The New York Post, AJ+, Business Insider, and French news agency AFP. She has filmed and edited projects for platforms and partners including HBO, Netflix, VICE on Showtime, BET, Facebook Watch, Google. She has also edited projects featuring Lady Gaga, Nas, Teyana Taylor, Kehlani, and Megan Thee Stallion.</p>
                    <p>Most recently, Fanny became an <a style={{color: "#0064ff"}} href="https://creativecloud.adobe.com/discover/article/hone-your-video-style-with-fanny-texier" target="_blank" rel="noopener">ambassador for Adobe</a> and was featured as Documentary Filmmaker of the year. She created tailored editing tutorials for Premiere Pro, and her photography was selected as the software’s Splash Screen for 2023-2024.</p>
                    <p>She earned a Master’s degree from La Sorbonne University in Paris, France, as well as a Journalism degree from the University of Montreal, Canada. She is a proud community organizer for The Video Consortium.</p>
                    <p><em>texier.fanny@gmail.com</em></p>
                    <p><a href="https://vimeo.com/fannytexier" target="_blank" rel="noopener">Vimeo</a> &nbsp;| &nbsp;<a href="http://instagram.com/fanny.texier" target="_blank" rel="noopener">instagram</a></p>

                  </div>
                </div>
              </div>
            </div>


          </section>

          <section className="clients">
            <div className="wrapper">
              <h3>
                — + — Clients
              </h3>
              <div className="items">
                <div className="item">
                  <img src="https://fannytexier.com/wp-content/uploads/2020/05/chase.png" alt="" width="100%" height="auto" />
                </div>
                <div className="item">
                  <img src="https://fannytexier.com/wp-content/uploads/2023/11/images2.png" alt="" width="100%" height="auto" />
                </div>
                <div className="item">
                  <img src="https://fannytexier.com/wp-content/uploads/2020/05/afp.png" alt="" width="100%" height="auto" />
                </div>
                <div className="item">
                  <img src="https://fannytexier.com/wp-content/uploads/2020/05/ajplus.png" alt="" width="100%" height="auto" />
                </div>
                <div className="item">
                  <img src="https://fannytexier.com/wp-content/uploads/2020/05/newyorker.png" alt="" width="100%" height="auto" />
                </div>
                <div className="item">
                  <img src="https://fannytexier.com/wp-content/uploads/2020/05/massappeal.png" alt="" width="100%" height="auto" />
                </div>
                <div className="item">
                  <img src="https://fannytexier.com/wp-content/uploads/2020/05/bric.png" alt="" width="100%" height="auto" />
                </div>
                <div className="item">
                  <img src="https://fannytexier.com/wp-content/uploads/2020/05/pg.png" alt="" width="100%" height="auto" />
                </div>
                <div className="item">
                  <img src="https://fannytexier.com/wp-content/uploads/2023/11/download-1.png" alt="" width="100%" height="auto" />
                </div>
                <div className="item">
                  <img src="https://fannytexier.com/wp-content/uploads/2020/05/bbc.png" alt="" width="100%" height="auto" />
                </div>
                <div className="item">
                  <img src="https://fannytexier.com/wp-content/uploads/2020/05/nypost-copy.png" alt="" width="100%" height="auto" />
                </div>
                <div className="item">
                  <img src="https://fannytexier.com/wp-content/uploads/2020/05/gates.png" alt="" width="100%" height="auto" />
                </div>
                <div className="item">
                  <img src="https://fannytexier.com/wp-content/uploads/2020/05/arte.png" alt="" width="100%" height="auto" />
                </div>
                <div className="item">
                  <img src="https://fannytexier.com/wp-content/uploads/2023/11/showtime-logo2-1536x533.png" alt="" width="100%" height="auto" />
                </div>
                <div className="item">
                  <img src="https://fannytexier.com/wp-content/uploads/2023/11/6439624_sa.jpg" alt="" width="100%" height="auto" />
                </div>
                <div className="item">
                  <img src="https://fannytexier.com/wp-content/uploads/2020/05/hearst.png" alt="" width="100%" height="auto" />
                </div>
                <div className="item">
                  <img src="https://fannytexier.com/wp-content/uploads/2020/05/squarespace.png" alt="" width="100%" height="auto" />
                </div>
                <div className="item">
                  <img src="https://fannytexier.com/wp-content/uploads/2020/05/60second.png" alt="" width="100%" height="auto" />
                </div>
              </div>
            </div>

          </section>

          <section className="images-grid">
            <div className="wrapper">
              <div className="items">
                <div className="item">
                  <img src="https://fannytexier.com/wp-content/uploads/2023/12/DSC00748-fixed-1536x1024.jpeg" alt="" width="100%" height="100%" />

                </div>
                <div className="item">
                  <img src="https://fannytexier.com/wp-content/uploads/2018/05/IMG_6724.jpg" alt="" width="100%" height="100%" />

                </div>
                <div className="item">
                  <img src="https://fannytexier.com/wp-content/uploads/2023/11/IMG_3633-2.jpeg" alt="" width="100%" height="100%" />

                </div>
                <div className="item">
                  <img src="https://fannytexier.com/wp-content/uploads/2023/11/DSC00341-1-1536x1038.jpg" alt="" width="100%" height="100%" />

                </div>
                <div className="item">
                  <img src="https://fannytexier.com/wp-content/uploads/2023/11/DSC00317-8-1536x1032.jpg" alt="" width="100%" height="100%" />

                </div>
                <div className="item">
                  <img src="https://fannytexier.com/wp-content/uploads/2023/11/DSC00727-3-1536x1024.jpg" alt="" width="100%" height="100%" />

                </div>
              </div>
            </div>

          </section>
        </main>
      </div>*/}

       
          
      { !loading ? (  
        <div className="about">
      
      <main>
        <section className="article-grid">
          <div className="row">

            <div className="col">
              <div className="img">
              <img src={data.imageUrl} alt="" width="100%" height="100%" />
              </div>
            </div>

            <div className="col">
              <div className="article">
                <h3> {data.title}</h3>
                <div className="description">
                  <PortableText value={data.body} />
                </div>
              </div>
            </div>

          </div>
        </section>
      
        <section className="clients">
          <div className="wrapper">
            <h3>{data.titleSection2}</h3>
      
            <div className="items">
              { data.gallerySection2?.map((e) =>
                <div className="item">
                  <img src={e} alt="" width="100%" height="auto" />
                </div>
              )} 
            </div>
          </div>
      
        </section>
      
        <section className="images-grid">
          <div className="wrapper">
            <div className="items">
      
              { data.gallerySection3?.map((e) =>
                <div className="item">
                  <img src={e} alt="" width="100%" height="100%" />
                </div>
              )} 
      
            </div>
          </div>
      
        </section>
      </main>
        </div>
      
      
      ):<Loading />}   

    </>
  )
}

export default About
