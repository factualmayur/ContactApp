import React from "react";
import { createPortal } from "react-dom";
import { ImCross } from "react-icons/im";

function Modal({ onClose, isOpen, children }) { 
  if (!isOpen) return null; 

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" 
      />

      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-[90%] w-[350px] z-10">
        <ImCross 
          onClick={onClose} 
          className="absolute text-gray-700 cursor-pointer top-3 right-3 hover:text-red-600"
        />
        {children}  
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;
