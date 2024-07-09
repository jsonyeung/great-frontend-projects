import { RiStarFill } from "react-icons/ri";
import { RiAddCircleLine } from "react-icons/ri";
import { RiCheckLine } from "react-icons/ri";
import { RiAddFill, RiSubtractFill } from "react-icons/ri";

import Badge from "./components/Badge";

import "@fontsource-variable/noto-sans";
import "./app.css";

import img from '../designs/Empty - Desktop.jpg'

function Rating({ value, maxStars }) {
  return (
    <div className="inline-block relative">
      <div className="flex gap-1">
        {new Array(maxStars).fill(null).map(() => (
          <RiStarFill className="size-5 fill-neutral-200" />
        ))}
      </div>

      <div
        className="flex gap-1 absolute inset-0"
        style={{ clipPath: `rect(0px ${(value / maxStars) * 100}% 100% 0)` }}
      >
        {new Array(maxStars).fill(null).map(() => (
          <RiStarFill className="size-5 fill-yellow-400" />
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] p-4">

      {/* 375px */}
      {/* <img src={img} className='w-[1440px] absolute inset-0 opacity-20' style={{ filter: 'sepia(20px)' }}/> */}
      {/* <img src={img} className='absolute inset-0 opacity-20' style={{ filter: 'sepia(20px)' }}/> */}


      <div className='m-auto max-w-[1440px] lg:grid grid-cols-2 bg-white shadow-md rounded-lg pt-10 pb-4 lg:p-20'>
        <div className="mx-4 my-2 md:my-4">
          <div className='lg:max-h-[800px] md:max-h-[810px] rounded-lg overflow-hidden'>
            <img className='aspect-[2/3]' src="https://e-commerce-smoky-ten.vercel.app/_next/image?url=https%3A%2F%2Fvaqybtnqyonvlwtskzmv.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fe-commerce-track-images%2Fvoyager-hoodie%2Fvoyager-hoodie-1.jpg&w=1920&q=75"/>
          </div>

          <div className="flex gap-4 overflow-hidden mt-6 mb-12">
            <div className="lg:w-[160px] md:w-[185px] md:h-[185px] lg:h-[190px] w-[80px] h-[120px] shrink-0">
              <img className='w-full h-full rounded-lg' src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg"/>
            </div>
            <div className="lg:w-[160px] md:w-[185px] md:h-[185px] lg:h-[190px] w-[80px] h-[120px] shrink-0">
              <img className='w-full h-full rounded-lg' src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg"/>
            </div>
            <div className="lg:w-[160px] md:w-[185px] md:h-[185px] lg:h-[190px] w-[80px] h-[120px] shrink-0">
              <img className='w-full h-full rounded-lg' src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg"/>
            </div>
            <div className="lg:w-[160px] md:w-[185px] md:h-[185px] lg:h-[190px] w-[80px] h-[120px] shrink-0">
              <img className='w-full h-full rounded-lg' src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg"/>
            </div>
          </div>
        </div>

        <div className="mx-4 my-4">
          <div className='mb-7'>
            <h1 className="md:text-5xl text-3xl font-semibold mb-5">Voyager Hoodie</h1>

            <div className="text-3xl font-medium mb-2">
              $76
              <span className="ml-2 text-lg line-through">$95</span>
            </div>

            <div>
              <div className='mb-4'><Badge>20% OFF</Badge></div>
              
              {/* Rating */}
              <div className="flex items-center gap-2.5">
                <span className='text-gray-700 text-xl'>4.1</span> 
                <Rating value={4.5} maxStars={5} />
                <a href='#' className='text-indigo-600 text-sm font-semibold tracking-tight'>See all 62 reviews</a>
              </div>

              <p className='md:mt-8 mt-7'>The Voyager Hoodie is for the explorer at heart. Its durable fabric and
              roomy pockets are perfect for those who are always searching for the
              next adventure.</p>
            </div>
          </div>

          <form>
          {/* Color Selector */}

            <fieldset>
              <legend className='pt-2 text-sm'>Available Colors</legend>

              <div className="flex gap-8 py-6 px-2">

                <div className="size-10 relative">
                  <input type="radio" className="appearance-none rounded-full border-green-800 border" />
                  <span className="absolute inset-0 rounded-full bg-blue-800"></span>
                  <RiCheckLine className="absolute size-7 inset-center fill-white" />
                </div>

                <div className="size-10 relative">
                  <input type="radio" className="appearance-none rounded-full border-green-800 border" />
                  <span className="absolute inset-0 rounded-full bg-blue-800"></span>
                  <RiCheckLine className="absolute size-7 inset-center fill-white" />
                </div>
              </div>
            </fieldset>

          {/* Size Selector */}
          <fieldset>
            <legend className='pt-4 text-sm'>Available Sizes</legend>
            
            <div className='flex flex-wrap md:gap-3.5 gap-4 py-4'>
              <button className="bg-transparent w-16 h-12 text-black font-medium rounded-sm border border-indigo-600">XS</button>
              <button className="bg-transparent w-16 h-12 text-black font-medium rounded-sm border border-indigo-600">S</button>
              <button className="bg-transparent w-16 h-12 text-black font-medium rounded-sm border border-indigo-600">M</button>
              <button className="bg-transparent w-16 h-12 text-black font-medium rounded-sm border border-indigo-600">L</button>
              <button className="bg-transparent w-16 h-12 text-black font-medium rounded-sm border border-indigo-600">XL</button>
            </div>
          </fieldset>

          {/* Quantity Selector */}
          <fieldset className="mt-4">
            <legend className='text-sm mb-4'>Quantity</legend>

            <div className="inline-flex bg-neutral-50 overflow-hidden rounded-md border border-neutral-400">
              <button className='size-8 flex justify-center items-center'><RiSubtractFill /></button>
              <input type="number" value={88} className="w-[3.6rem] bg-transparent text-center text-sm font-medium appearance-textfield"/>
              <button className='size-8 flex justify-center items-center'><RiAddFill className='-mr-1' /></button>
            </div>
          </fieldset>

          {/* Button */}
            <button className='md:text-lg mt-8 mb-4 w-full bg-indigo-600 text-white rounded-md p-3 md:p-4'>Add to Cart</button>
          </form>

          {/* Accordian */}
          <div>

            <div className="border-b last:border-none border-neutral-300">
              <div className='flex justify-between items-center pt-6 pb-6'>
                <h3 className='text-lg font-medium'>Features</h3>
                <RiAddCircleLine size={'1.5rem'}/>
              </div>

              <div className='mt-2'>
                <ul className="list-disc list-inside text-gray-600">
                  {/* <li>Designed for comfort and durability.</li> */}
                </ul>
              </div>
            </div>

            <div className="border-b last:border-none border-neutral-300">
              <div className='flex justify-between items-center pt-6 pb-6'>
                <h3 className='text-lg font-medium'>Fabric & Care</h3>
                <RiAddCircleLine size={'1.5rem'}/>
              </div>

              <div className='mt-2'>
                <ul className="list-disc list-inside text-gray-600">
                  {/* <li>Designed for comfort and durability.</li> */}
                </ul>
              </div>
            </div>

            <div className="border-b last:border-none border-neutral-300">
              <div className='flex justify-between items-center pt-6 pb-6'>
                <h3 className='text-lg font-medium'>Shipping</h3>
                <RiAddCircleLine size={'1.5rem'}/>
              </div>

              <div className='mt-2'>
                <ul className="list-disc list-inside text-gray-600">
                  {/* <li>Designed for comfort and durability.</li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
