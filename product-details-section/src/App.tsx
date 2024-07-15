import Badge from "./components/Badge";
import Rating from "./components/Rating";
import ColorListOptions from "./components/ColorListOptions";
import MenuListOptions from "./components/MenuListOptions";
import CounterInput from "./components/CounterInput";
import PriceTag from "./components/PriceTag";
import Accordion from "./components/Accordian";
import ProductGallery from "./components/ProductGallery";
import PageContainer from "./components/PageContainer";

import "@fontsource-variable/noto-sans";
import "./app.css";

import test from "../designs/Empty - Desktop.jpg";

function App() {
  return (
    <PageContainer>
      {/* <img src={test} className='absolute top-0 left-0 opacity-20'/> */}

      {/* Gallery */}
      <div className="mx-4 my-2 md:my-4">
        <ProductGallery />
      </div>

      {/* Details Section */}
      <section className="mx-4 my-4">
        <div className="mb-7">
          <h1 className="mb-5 text-3xl font-semibold md:text-5xl">
            Voyager Hoodie
          </h1>

          <PriceTag value={"$76"} original={"$95"} />
          <Badge>20% OFF</Badge>

          <div className="mt-4 flex items-center gap-2.5">
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
            The Voyager Hoodie is for the explorer at heart. Its durable fabric
            and roomy pockets are perfect for those who are always searching for
            the next .
          </p>
        </div>

        {/* Add To Cart Form */}
        <form className="mt-8 mb-3">
          <label className="block text-sm text-neutral-500">
            Available Colors
          </label>
          <ColorListOptions />

          <label className="block mt-4 text-sm text-neutral-500">
            Available Sizes
          </label>
          <MenuListOptions />

          <label className="block mt-4 mb-5 text-sm text-neutral-500">
            Quantity
          </label>
          <CounterInput />

          <button className="mt-8 w-full rounded-md bg-indigo-600 p-3 text-white md:p-4 md:text-lg">
            Add to Cart
          </button>
        </form>

        <Accordion />
      </section>
    </PageContainer>
  );
}

export default App;
