import { useState } from "react";
import { RiAddCircleLine, RiIndeterminateCircleLine } from "react-icons/ri";

function Accordion() {
  const [isOpened, setIsOpened] = useState(new Set());

  const data = [
    {
      id: 0,
      title: "Features",
      content: (
        <ul className="list-inside list-disc text-gray-600">
          <li>Designed for comfort and durability.</li>
          <li>Soft, breathable fabric ideal for travel and adventure.</li>
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
          <li>Tumble dry on low heat with tennis balls to maintain loft.</li>
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
            Free standard shipping on all orders - no minimum spend required.
          </li>
          <li>Expedited shipping available at an additional cost.</li>
          <li>
            Packaged in biodegradable materials to reduce environmental impact
          </li>
        </ul>
      ),
    },
  ];

  function handleAccordionItemToggle(itemData) {
    const results = new Set(isOpened);

    if (!results.has(itemData.id)) {
      results.add(itemData.id);
    } else {
      results.delete(itemData.id);
    }

    setIsOpened(results);
  }

  return (
    <div>
      {data.map((itemData) => {
        return (
          <div className="border-b border-neutral-300 last:border-none">
            <div
              onClick={() => handleAccordionItemToggle(itemData)}
              className="cursor-pointer flex items-center justify-between py-7"
            >
              <h3 className="text-lg font-medium">{itemData.title}</h3>

              {isOpened.has(itemData.id) ? (
                <RiIndeterminateCircleLine size={"1.5rem"} />
              ) : (
                <RiAddCircleLine size={"1.5rem"} />
              )}
            </div>

            <div
              className={`overflow-hidden ${isOpened.has(itemData.id) ? "h-auto -mt-5 mb-7" : "h-0"}`}
            >
              {itemData.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
