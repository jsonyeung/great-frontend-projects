import { useState } from "react";

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

function App() {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("#10b982");
  const [size, setSize] = useState("xs");

  function handleAddToCart(e) {
    e.preventDefault();
    alert(
      JSON.stringify({
        quantity,
        color,
        size,
      })
    );
  }

  return (
    <PageContainer>
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
            <span className="text-xl text-neutral-900">4.1</span>
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
        <form className="mt-8 mb-3" onSubmit={handleAddToCart}>
          <label className="block text-sm text-neutral-500">
            Available Colors
          </label>
          <ColorListOptions
            value={color}
            onSelect={setColor}
            options={[
              { label: "green", value: "#10b982" },
              { label: "yellow", value: "#ca8a04" },
            ]}
          />

          <label className="block mt-4 text-sm text-neutral-500">
            Available Sizes
          </label>

          <MenuListOptions
            value={size}
            onSelect={setSize}
            options={[
              { label: "XS", value: "xs" },
              { label: "S", value: "s" },
              { label: "M", value: "m" },
              { label: "L", value: "l" },
              { label: "XL", value: "xl" },
            ]}
          />

          <label
            htmlFor="quantity"
            className="block mt-4 mb-5 text-sm text-neutral-500"
          >
            Quantity
          </label>

          <CounterInput
            id="quantity"
            value={quantity}
            min={1}
            max={10}
            onChange={setQuantity}
          />

          <button
            type="submit"
            className="mt-8 w-full rounded-md transition-colors bg-indigo-600 hover:bg-indigo-700 p-3 text-white md:p-4 md:text-lg"
          >
            Add to Cart
          </button>
        </form>

        <Accordion
          data={[
            {
              id: 0,
              title: "Features",
              content: (
                <ul className="list-inside list-disc text-gray-600">
                  <li>Designed for comfort and durability.</li>
                  <li>
                    Soft, breathable fabric ideal for travel and adventure.
                  </li>
                  <li>Lace front procket and adjustable hood.</li>
                  <li>Minimalist design pairs well with any style.</li>
                  <li>Made with eco-conscious materials.</li>
                </ul>
              ),
            },
            {
              id: 1,
              title: "Fabric & Care",
              content: (
                <ul className="list-inside list-disc text-gray-600">
                  <li>Machine wash cold on a gentle cycle.</li>
                  <li>
                    Tumble dry on low heat with tennis balls to maintain loft.
                  </li>
                  <li>Do not iron; steam if necessary.</li>
                  <li>Can be dry cleaned if preferred</li>
                </ul>
              ),
            },
            {
              id: 2,
              title: "Shipping",
              content: (
                <ul className="list-inside list-disc pr-10 text-gray-600">
                  <li>
                    Free standard shipping on all orders - no minimum spend
                    required.
                  </li>
                  <li>Expedited shipping available at an additional cost.</li>
                  <li>
                    Packaged in biodegradable materials to reduce environmental
                    impact
                  </li>
                </ul>
              ),
            },
          ]}
        />
      </section>
    </PageContainer>
  );
}

export default App;
