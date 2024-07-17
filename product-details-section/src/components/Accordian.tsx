import { useState } from "react";
import { RiAddCircleLine, RiIndeterminateCircleLine } from "react-icons/ri";

function Accordion({ data }) {
  const [isOpened, setIsOpened] = useState(new Set());

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
