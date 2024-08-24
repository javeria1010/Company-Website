import React from 'react'

const Box_2 = () => {
  return (
    <div className='box-2'>
      <div className="h2-part1">
        <h4 className='text1-h4'>WHAT WE DO</h4>
        <h1 className='text2-h1'>We provide the Perfect Solution to your business growth</h1>
      </div>

      <div className="box2-card">
        {/* card 1 */}
        <div className="card1">
          <div className="card-content">
            <div className="icon">
              <i class="fa-solid fa-chart-line"></i>
            </div>
            <h2>Grow Your Business</h2>
            <p>We help identify the best ways to improve your business</p>
            <button className='card-btn'>Learn More <i class="fa-solid fa-arrow-right"></i></button>
          </div>

        </div>
        {/* Card 2 */}
        <div className="card1">
          <div className="card-content">
            <div className="icon">
              <i class="fa-regular fa-heart"></i>
            </div>
            <h2>Improve Brand Loyalty</h2>
            <p>We help identify the best ways to improve your business</p>
            <button className='card-btn'>Learn More <i class="fa-solid fa-arrow-right"></i></button>
          </div>

        </div>
        {/* card 3 */}
        <div className="card1">
          <div className="card-content">
            <div className="icon">
              <i class="fa-solid fa-briefcase"></i>
            </div>
            <h2>Improve Business Model</h2>
            <p>We help identify the best ways to improve your business</p>
            <button className='card-btn'>Learn More <i class="fa-solid fa-arrow-right"></i></button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Box_2