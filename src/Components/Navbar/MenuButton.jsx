import React, { useState } from 'react';
import ListItems from './ListItems';

function MenuButton({ buttonText, items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedItems, setDisplayedItems] = useState([]);

  const handleOpen = () => {
    setIsOpen(true);
    setDisplayedItems(items);
  };

  const handleClose = () => {
    setIsOpen(false);
    setDisplayedItems([]);
  };

  return (
    <>
   
      <button className="btn background_clr alignRight m-3" onClick={handleOpen}>Menu</button>
      {isOpen && (
        <div className="card p-4 indexz alignRight mt-3">
          <ListItems  items={displayedItems} />
          <button className="btn background_clr " onClick={handleClose}>Close</button>
        </div>
      
      )}
     
    </>
  );
}

export default MenuButton;
