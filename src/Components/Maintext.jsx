import React from 'react'

export default function Maintext() {
  return (
    <div className="main-text-container">
      <p className="main-text">
        We make <a href="#">Live</a>, <a href="#">Push</a> and <a href="#">Link</a> — unique software and hardware
        for music creation and performance. With these products, our
        community of users creates amazing things.
      </p>
      <br />
      <p>
        Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used
        by a community of dedicated musicians, sound designers, and artists from across the world.
      </p>
      
      <div className="columns-section">
        <div className="left-column">
          <img 
            src="https://d29rinwu2hi5i3.cloudfront.net/article_media/76f73492-c029-4d98-bc8b-be263aeae558/headline-decap-push-feeling-performance.jpg" 
            alt="Person using Push controller" 
            className="push-image"
          />
        </div>



        <div className="right-column">
          <div className="yellow-background">
            <img 
              src="https://external-preview.redd.it/ableton-released-push-3-v0-05UHHLiMJ5xaVHb1S_vS7xMc3l80DQAZ08nsjVZQcK8.jpg?auto=webp&s=17d12a9c5b1011812496b8a14bee8ce44af4b600" 
              alt="Person walking past bookshelf" 
              className="bookshelf-image"
            />
            <div>
              
            </div>
            

          </div>
        </div>
      </div>

      <div className="main-text-container">
        <p className="main-text">
          Making music isn't easy. It takes time, effort, and learning. But when you're in the flow, it's incredibly rewarding.</p>
          <br />
          We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.
       
      </div>

      <div className='video-container'>

        <iframe
          
          src="https://www.youtube.com/embed/9SbnhgjeyXA"
          title="Why we make music - Ableton"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <p className='video-text'>
          Why we make music - Ableton
        </p>
       

       


      </div>


      <div className="main-text-container">
        <p className="main-text">
         We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.</p>
          <br />
         <p>Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. 
          Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is a shared belief in the potential of music and technology to inspire.
        </p> 
       
      </div>




      <div>
      <div className="columns-section">
        <div className="left-column">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px', background: '#b6ffc0' }}>
            <img 
              src="https://ableton-production.imgix.net/about/photo-3.jpg" 
              alt="Ableton office workspace"
              style={{ width: '80%' }}
            />
            <img 
              src="https://ableton-production.imgix.net/about/photo-4.jpg" 
              alt="Ableton office entrance" 
              style={{ width: '60%' }}
            />
          </div>
        </div>
        <div className="right-column">
          <img 
            src="https://ableton-production.imgix.net/about/photo-5.jpg"
            alt="Ableton studio setup"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
      </div>
         
      <div className="main-text-container">
        <p className="main-text">
         we are passionate about what we do, but we are equally passionate about improving who we are.</p>
          <br />
         <p>we work hard to create a work environment that is both positive and inspiring — a place where we can all grow and thrive as unique individuals, a place where people are free to be themselves.
        </p> 

        <br />

        <p>
          We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.
        </p>
       
      </div>

      

<div className="main-text-container">
  <p className="main-text">
    We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.
  </p>
  <br />
  <p>Most of us are active musicians, producers, and DJs...</p>
</div>

{/* Add the new overlapping images section */}
<div className="purple-section">
  <div className="purple-background">
    <img 
      src="https://i.ytimg.com/vi/CvgnVXOuPO8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC7BKL-Lj2H9bSCnKGnGAynQNHiFA" 
      alt="Office workspace with people at computers" 
      className="left-overlap-image"
    />
    <img 
      src="https://ableton-production.imgix.net/about/photo-7.jpg" 
      alt="Team meeting or presentation" 
      className="right-overlap-image"
    />
  </div>
</div>




      



    </div>

    

  


  )
}
