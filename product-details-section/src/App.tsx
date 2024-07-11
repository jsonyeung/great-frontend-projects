import Badge from "./components/Badge";
import Rating from "./components/Rating";
import ColorListOptions from "./components/ColorListOptions";
import MenuListOptions from "./components/MenuListOptions";
import CounterInput from "./components/CounterInput";
import PriceTag from "./components/PriceTag";
import Accordion from "./components/Accordian";
import ProductGallery from "./components/ProductGallery";

import "@fontsource-variable/noto-sans";
import "./app.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] p-4">
      <div className="m-auto max-w-[1440px] rounded-lg bg-white pt-10 pb-4 shadow-md lg:grid lg:grid-cols-2 lg:p-20">
        {/* Gallery */}
        <div className="mx-4 my-2 md:my-4">
          <ProductGallery />
        </div>

        {/* Details Section */}
        <div className="mx-4 my-4">
          <div className="mb-7">
            <h1 className="mb-5 text-3xl font-semibold md:text-5xl">
              Voyager Hoodie
            </h1>

            <PriceTag value={"$76"} original={"$95"} />

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

          {/* Menu List Options */}
          <form className="pt-2">
            <label className="text-sm text-neutral-500">Available Colors</label>
            <ColorListOptions />

            <fieldset>
              <legend className="pt-4 text-sm text-neutral-500">
                Available Sizes
              </legend>

              <MenuListOptions />
            </fieldset>

            <fieldset className="mt-4">
              <legend className="mb-4 text-sm text-neutral-500">
                Quantity
              </legend>

              <CounterInput />
            </fieldset>

            <button className="mb-4 mt-8 w-full rounded-md bg-indigo-600 p-3 text-white md:p-4 md:text-lg">
              Add to Cart
            </button>
          </form>

          {/* Accordian */}
          <Accordion />
        </div>
      </div>
    </div>
  );
}

export default App;
