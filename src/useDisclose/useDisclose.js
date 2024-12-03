import React, { useState } from "react";

function useDisclose() {
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    console.log("Opened !!!");
    setOpen(true);
  };

  const onClose = () => {
    console.log("Closed !!!");
    setOpen(false);
  };
  return { onClose, onOpen, isOpen };
}

export default useDisclose;
