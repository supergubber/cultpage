import Button from '../common/Button'
import bothSizeArrow from '../../assets/both size arrow.svg'
import glassroom1 from '../../assets/glassroom1.png'
import sectiononeimg1 from '../../assets/sectiononeimg1.png'
import sectiontwoimg2 from '../../assets/sectiontwoimg2.png'
const SectionTwo = () => {
  return (
    <div className='w-full h-auto'>
      <div className='md:hidden block pt-20'>
        <div className='flex items-center justify-center w-[90%] h-full mx-auto '>
          <div className='bg-[#323A1C] p-3 rounded-l-full rounded-r-full rounded-b-none border-2 border-[#fffaf0] w-fit '>
            <div
              className='p-3 rounded-l-full rounded-r-full rounded-b-none 
              border border-[#ffffff33] backdrop-blur-lg bg-[#ffffff33] 
              shadow-lg shadow-[#00000010] flex flex-col items-center justify-center gap-4 pt-10 px-8 text-white'
            >
              {/* Your content here */}
              <h1>Packages</h1>
              <img src={bothSizeArrow} alt='bothsizearrow' />
              <p>Nov, 2025 - Mar, 2026</p>
              <p>Winter Wellness Escape</p>
              <img src={glassroom1} alt='glassroom1' />
              <div className='flex flex-row gap-4 items-center justify-center'>
                <p>View Detail</p>
                <Button>View Packages</Button>
              </div>
              <div className='flex flex-row items-center justify-center gap-1 mt-3'>
                {Array(3)
                  .fill(0)
                  .map((item, index) => (
                    <div
                      className={`${
                        index === 0
                          ? 'px-4 py-1 rounded-full bg-amber-50'
                          : 'py-1 px-1 rounded-full bg-gray-400'
                      }  `}
                      key={index}
                    ></div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full  flex-wrap-reverse flex flex-row'>
        <div className='md:w-[45%] mx-auto w-full px-10 py-10 pt-20 '>
          <div className='rounded-l-full rounded-r-full rounded-b-none border-2 border-[#333A1B] w-fit m-auto relative'>
            <div
              className='rounded-l-full rounded-r-full rounded-b-none 
              border border-[#ffffff33] shadow-lg shadow-[#00000010] flex flex-col items-center justify-center gap-4 px-3 py-3 text-white'
            >
              <img src={sectiononeimg1} alt='sectiononeimg1' />
            </div>
            <img
              src={sectiontwoimg2}
              alt='sectiontwoimg2'
              className='absolute md:top-22 md:-left-8 top-10 -left-10'
            />
          </div>
        </div>
        <div className='md:w-[55%] mx-auto w-full md:p-0 px-10 py-10 flex items-center justify-start'>
          <div className='md:w-[80%] w-full flex flex-col gap-6 pt-20'>
            <h1 className='font-semibold font-[arial] text-5xl'>
              About Aranyaban
            </h1>
            <p className='font-serif font-stretch-125% md:leading-8 md:tracking-wide text-md'>
              Imagine a retreat where nature and luxury exist in perfect
              harmony. Aranyaban, nestled in the serene Patan region of Satara,
              offers an eco-luxury experience that brings you close to nature
              without sacrificing comfort. Here, you’ll find yourself surrounded
              by the lush greenery and breathtaking biodiversity of the Western
              Ghats, where you can unwind, rejuvenate, and truly reconnect with
              yourself.Imagine a retreat where nature and luxury exist in
              perfect harmony. Aranyaban, nestled in the serene Patan region of
              Satara, offers an eco-luxury experience that brings you close to
              nature without sacrificing comfort. Here, you’ll find yourself
              surrounded by the lush greenery and breathtaking biodiversity of
              the Western Ghats, where you can unwind, rejuvenate, and truly
              reconnect with yourself.
            </p>
            <div className='w-fit'>
              <div className='border-2 border-[#732129] p-1 rounded-full cursor-pointer'>
                <p className='bg-[#732129] px-6 py-2 rounded-full text-white'>
                  About us
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionTwo
