import { useState } from "react";
import { RiAddCircleLine, RiIndeterminateCircleLine } from "react-icons/ri";

function Accordion({ data }) {
  const [openedItems, setOpenedItems] = useState(new Set());

  function handleAccordionItemToggle(itemId) {
    setOpenedItems((prevOpenedItems) => {
      const newOpenedItems = new Set(prevOpenedItems);
      if (newOpenedItems.has(itemId)) {
        newOpenedItems.delete(itemId);
      } else {
        newOpenedItems.add(itemId);
      }
      return newOpenedItems;
    });
  }

  return (
    <div className="accordion">
      {data.map((itemData) => {
        const isExpanded = openedItems.has(itemData.id);
        const headerId = `accordion-header-${itemData.id}`;
        const contentId = `accordion-content-${itemData.id}`;

        return (
          <div
            key={itemData.id}
            className="accordion-item border-b border-neutral-300 last:border-none"
          >
            <h3>
              <button
                id={headerId}
                aria-expanded={isExpanded}
                aria-controls={contentId}
                onClick={() => handleAccordionItemToggle(itemData.id)}
                className="w-full cursor-pointer flex items-center justify-between py-7 text-left"
              >
                <span className="text-lg font-medium">{itemData.title}</span>
                <span className="icon" aria-hidden="true">
                  {isExpanded ? (
                    <RiIndeterminateCircleLine size={"1.5rem"} />
                  ) : (
                    <RiAddCircleLine size={"1.5rem"} />
                  )}
                </span>
              </button>
            </h3>
            <div
              id={contentId}
              role="region"
              aria-labelledby={headerId}
              className={`overflow-hidden transition-all duration-300 ${
                isExpanded ? "h-auto -mt-5 mb-7" : "h-0"
              }`}
              hidden={!isExpanded}
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
