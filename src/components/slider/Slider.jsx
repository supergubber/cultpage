import React, { useState, useEffect } from 'react'
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti'
import './Slider.css'
import { sectionsevenData } from '../../data/menu'
import sectionsevenbgimage from '../../assets/sectionsevenbgimage.png'

const CARDS = 10
const MAX_VISIBILITY = 3
const AUTO_SCROLL_INTERVAL = 2000 // Changed to 2 seconds (2000ms)

const Card = ({ title, content, index }) => (
  <div
    className='card'
    aria-labelledby={`card-title-${index}`}
    style={{
      backgroundImage: `url(${sectionsevenbgimage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom 12% right',
      backgroundSize: '120px',
    }}
  >
    {/* <h2 id={`card-title-${index}`}>{title}</h2> */}
    <p>{content.desc}</p>

    <div className='flex flex-row mt-10 gap-3'>
      <div className='w-fit rounded-full overflow-hidden border-2 shadow-xl shadow-orange-100'>
        <img src={content.img} className='rounded-full' />
      </div>
      <div>
        <p className='text-lg font-medium'>{content.name}</p>
        <p className='text-sm'>{content.city}</p>
      </div>
    </div>
  </div>
)

const Carousel = ({ children }) => {
  const [active, setActive] = useState(0)
  const count = React.Children.count(children)
  //   console.log(count)
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true)

  const handlePrev = () => {
    setAutoScrollEnabled(false)
    setActive((prev) => Math.max(0, prev - 1))
    setTimeout(() => setAutoScrollEnabled(true), AUTO_SCROLL_INTERVAL * 2)
  }

  const handleNext = () => {
    setAutoScrollEnabled(false)
    setActive((prev) => (prev < count - 1 ? prev + 1 : 0))
    setTimeout(() => setAutoScrollEnabled(true), AUTO_SCROLL_INTERVAL * 2)
  }

  useEffect(() => {
    if (!autoScrollEnabled) return

    const interval = setInterval(() => {
      handleNext()
    }, AUTO_SCROLL_INTERVAL)

    return () => clearInterval(interval)
  }, [autoScrollEnabled, count])

  const handleMouseEnter = () => setAutoScrollEnabled(false)
  const handleMouseLeave = () => setAutoScrollEnabled(true)

  return (
    <div
      className='carousel'
      role='region'
      aria-label='Card carousel'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {active > 0 && (
        <button
          className='nav left'
          onClick={handlePrev}
          aria-label='Previous card'
        >
          <TiChevronLeftOutline />
        </button>
      )}

      <div className='carousel-container'>
        {React.Children.map(children, (child, i) => {
          const offset = (active - i) / 3
          const absOffset = Math.abs(active - i) / 3
          const direction = Math.sign(active - i)
          const isVisible = Math.abs(active - i) < MAX_VISIBILITY

          return (
            <div
              className='card-container'
              style={{
                '--active': i === active ? 1 : 1,
                '--offset': offset,
                '--direction': direction,
                '--abs-offset': absOffset,
                pointerEvents: active === i ? 'auto' : 'none',
                opacity: isVisible ? 1 : 0,
                display: isVisible ? 'block' : 'none',
              }}
              aria-hidden={!isVisible}
            >
              {React.cloneElement(child, { index: i })}
            </div>
          )
        })}
      </div>

      <div className='card-indicator flex flex-row gap-1 py-1'>
        {sectionsevenData.map((item, index) => (
          <div
            key={`indicator-${index}`}
            className={`rounded-full ${
              index === active
                ? 'px-3 py-1 bg-[#C1B08D] transition-normal' // Active dot (larger and different color)
                : 'p-1 bg-[#E8DDC8]' // Inactive dot
            }`}
            // aria-current={index === active}
            // aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {active < count - 1 && (
        <button
          className='nav right'
          onClick={handleNext}
          aria-label='Next card'
        >
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  )
}

const Slider = () => {
  return (
    <div className='carousel-wrapper'>
      <Carousel>
        {sectionsevenData?.map((items, i) => (
          <Card key={`card-${i}`} title={`Card ${i + 1}`} content={items} />
        ))}
      </Carousel>
    </div>
  )
}

export default Slider
