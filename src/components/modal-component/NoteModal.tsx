import React, { useState } from 'react'

type OrderNoteModal  = {
    onAddNote:(addNote:string)=>void;
    onClose: () =>void;
}

const NoteModal = ({onAddNote, onClose}:OrderNoteModal) => {
  const [addNote, setAddNote] = useState('');
  const handleAddNote = () => {
    onAddNote(addNote)
    onClose()
  }
  return (
    <>
    {
       <div  className="bg-black flex justify-center items-center p-3 bg-opacity-30 fixed top-0 left-0 w-full h-screen z-[9999]">
       <div className="p-6 bg-white ">
         <h1>Order Notes</h1>
         <form className="">
         <textarea value={addNote} onChange={(e)=> setAddNote(e.target.value)} name="note" id="note" placeholder="Type here" className="w-full h-20 border-[#d7d7d7] p-4 placeholder:text-neutral-400"></textarea>
         <button type="submit" onClick={handleAddNote} className="w-full p-3 text-center text-white bg-green-700">Add note</button>
         <span onClick={onClose}></span>
         </form>
         
       </div>
     </div>  
    }
    </>
  )
}

export default NoteModal