import { useState } from "react";
import { RiAddCircleLine } from "react-icons/ri";

function Accordion() {
  const [isOpened, setIsOpened] = useState(new Set());

  const data = [
    {
      id: 0,
      title: "Features",
      content: (
        <ul className="list-inside list-disc text-gray-600">
          <li>Designed for comfort and durability.</li>
        </ul>
      ),
    },
    {
      id: 1,
      title: "Specification",
      content: (
        <ul className="list-inside list-disc text-gray-600">
          <li>Designed for comfort and durability.</li>
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
              className="cursor-pointer flex items-center justify-between py-6"
            >
              <h3 className="text-lg font-medium">{itemData.title}</h3>
              <RiAddCircleLine size={"1.5rem"} />
            </div>

            <div
              className={`mt-2 overflow-hidden ${isOpened.has(itemData.id) ? "h-auto" : "h-0"}`}
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
