import { RiStarFill } from "react-icons/ri";
import { RiAddCircleLine } from "react-icons/ri";
import { RiCheckLine } from "react-icons/ri";
import { RiAddFill, RiSubtractFill } from "react-icons/ri";

import Badge from "./components/Badge";

import "@fontsource-variable/noto-sans";
import "./app.css";

import img from "../designs/Empty - Desktop.jpg";

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
      <div className="m-auto max-w-[1440px] rounded-lg bg-white pt-10 pb-4 shadow-md lg:grid lg:grid-cols-2 lg:p-20">
        <div className="mx-4 my-2 md:my-4">
          <div className="lg:max-h-[800px] md:max-h-[810px] overflow-hidden rounded-lg">
            <img
              className="aspect-[2/3]"
              src="https://e-commerce-smoky-ten.vercel.app/_next/image?url=https%3A%2F%2Fvaqybtnqyonvlwtskzmv.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fe-commerce-track-images%2Fvoyager-hoodie%2Fvoyager-hoodie-1.jpg&w=1920&q=75"
            />
          </div>

          <div className="mb-12 mt-6 flex gap-4 overflow-hidden">
            <div className="h-[120px] w-[80px] shrink-0 md:h-[185px] md:w-[185px] lg:h-[190px] lg:w-[160px]">
              <img
                className="h-full w-full rounded-lg"
                src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg"
              />
            </div>
            <div className="h-[120px] w-[80px] shrink-0 md:h-[185px] md:w-[185px] lg:h-[190px] lg:w-[160px]">
              <img
                className="h-full w-full rounded-lg"
                src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg"
              />
            </div>
            <div className="h-[120px] w-[80px] shrink-0 md:h-[185px] md:w-[185px] lg:h-[190px] lg:w-[160px]">
              <img
                className="h-full w-full rounded-lg"
                src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg"
              />
            </div>
            <div className="h-[120px] w-[80px] shrink-0 md:h-[185px] md:w-[185px] lg:h-[190px] lg:w-[160px]">
              <img
                className="h-full w-full rounded-lg"
                src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg"
              />
            </div>
          </div>
        </div>

        <div className="mx-4 my-4">
          <div className="mb-7">
            <h1 className="mb-5 text-3xl font-semibold md:text-5xl">
              Voyager Hoodie
            </h1>

            <div className="mb-2 text-3xl font-medium">
              $76
              <span className="ml-2 text-lg line-through">$95</span>
            </div>

            <div className="mb-4">
              <Badge>20% OFF</Badge>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="text-xl text-gray-700">4.1</span>
              <Rating value={4.5} maxStars={5} />
              <a
                href="#"
                className="text-sm font-semibold tracking-tight text-indigo-600"
              >
                See all 62 reviews
              </a>
            </div>

            <p className="mt-7 md:mt-8">
              The Voyager Hoodie is for the explorer at heart. Its durable
              fabric and roomy pockets are perfect for those who are always
              searching for the next adventure.
            </p>
          </div>

          <form>
            <fieldset>
              <legend className="pt-2 text-sm">Available Colors</legend>

              <div className="flex gap-8 px-2 py-6">
                <div className="relative size-10">
                  <input
                    type="radio"
                    className="w-full h-full appearance-none rounded-full border border-indigo-600"
                  />
                  <span className="absolute inset-1 rounded-full bg-blue-800"></span>
                  <RiCheckLine className="absolute inset-center size-7 fill-white" />
                </div>

                <div className="relative size-10">
                  <input
                    type="radio"
                    className="w-full h-full appearance-none rounded-full border border-green-800 z-10"
                  />

                  <span className="absolute inset-0 rounded-full bg-blue-800"></span>
                  {/* <RiCheckLine className="absolute inset-center size-7 fill-white" /> */}
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend className="pt-4 text-sm">Available Sizes</legend>

              <div className="flex flex-wrap gap-4 py-4 md:gap-3.5">
                <button className="h-12 w-16 rounded-sm border border-indigo-600 bg-transparent font-medium text-black">
                  XS
                </button>
                <button className="h-12 w-16 rounded-sm border border-neutral-200 bg-transparent font-medium text-black">
                  S
                </button>
                <button className="h-12 w-16 rounded-sm border border-neutral-200 bg-transparent font-medium text-black">
                  M
                </button>
                <button className="h-12 w-16 rounded-sm border border-neutral-200 bg-transparent font-medium text-black">
                  L
                </button>
                <button className="h-12 w-16 rounded-sm border border-neutral-200 bg-transparent font-medium text-black">
                  XL
                </button>
              </div>
            </fieldset>

            <fieldset className="mt-4">
              <legend className="mb-4 text-sm">Quantity</legend>

              <div className="inline-flex overflow-hidden rounded-md border border-neutral-200 bg-neutral-50">
                <button className="flex size-8 items-center justify-center">
                  <RiSubtractFill />
                </button>
                <input
                  type="number"
                  value={1}
                  className="w-[3.6rem] appearance-textfield bg-transparent text-center text-sm font-medium"
                />
                <button className="flex size-8 items-center justify-center">
                  <RiAddFill className="-mr-1" />
                </button>
              </div>
            </fieldset>

            <button className="mb-4 mt-8 w-full rounded-md bg-indigo-600 p-3 text-white md:p-4 md:text-lg">
              Add to Cart
            </button>
          </form>

          <div>
            <div className="border-b border-neutral-300 last:border-none">
              <div className="flex items-center justify-between py-6">
                <h3 className="text-lg font-medium">Features</h3>
                <RiAddCircleLine size={"1.5rem"} />
              </div>

              <div className="mt-2">
                <ul className="list-inside list-disc text-gray-600">
                  {/* <li>Designed for comfort and durability.</li> */}
                </ul>
              </div>
            </div>

            <div className="border-b border-neutral-300 last:border-none">
              <div className="flex items-center justify-between py-6">
                <h3 className="text-lg font-medium">Fabric & Care</h3>
                <RiAddCircleLine size={"1.5rem"} />
              </div>

              <div className="mt-2">
                <ul className="list-inside list-disc text-gray-600">
                  {/* <li>Designed for comfort and durability.</li> */}
                </ul>
              </div>
            </div>

            <div className="border-b border-neutral-300 last:border-none">
              <div className="flex items-center justify-between py-6">
                <h3 className="text-lg font-medium">Shipping</h3>
                <RiAddCircleLine size={"1.5rem"} />
              </div>

              <div className="mt-2">
                <ul className="list-inside list-disc text-gray-600">
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
