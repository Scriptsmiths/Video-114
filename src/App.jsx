import React from "react";
import Navbar from "./components/navbar";
const App = () => {
    const handleDelete = () => {
        
    }
    const handlEdit = () => {

    }
    const handleAdd = () => {

    }
  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="">
          <div className="addtodo">
            <h1  className="text-lg font-bold">Add a Todo</h1>
            <input className="bg-amber-50 w-80" type="text" />
            <button onClick={handleAdd} className="bg-violet-800 hover:bg-violet-950 p-2 py-1 font-bold text-white rounded-md mx-6 my-5">Submit</button>
          </div>
          <h2 className="text-lg font-bold">Your Todos</h2>
          <div className="todo">
            <div className="todo flex">
              <div className="text">Learn how to use git hub.</div>
              <div className="buttons">
                <button onClick={handlEdit} className="bg-violet-800 hover:bg-violet-950 p-2 py-1 font-bold text-white rounded-md mx-1" >edit</button>
                <button onClick={handleDelete} className="bg-violet-800 hover:bg-violet-950 p-2 py-1 font-bold text-white rounded-md mx-1" >Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
