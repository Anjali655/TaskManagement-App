import React, { useState } from "react";
import tick from "../assets/tick.png";
import notTick from "../assets/not_tick.png";
import deleteIcon from "../assets/delete.png";
import editIcon from "../assets/edit.png"; // Add an edit icon

const TodoItems = ({
  text,
  id,
  isComplete,
  isEditing,
  deleteTodo,
  toggle,
  editTodo,
  toggleEdit,
}) => {
  const [newText, setNewText] = useState(text);

  const handleEdit = (e) => {
    setNewText(e.target.value);
  };

  return (
    <div className="flex items-center my-3 gap-2">
      {isEditing ? (
        <div className="flex flex-1 items-center">
          <input
            value={newText}
            onChange={handleEdit}
            className="border-2 border-gray-400 p-1 flex-1"
            autoFocus
          />
          <button
            onClick={() => editTodo(id, newText)}
            className="ml-2 text-sm bg-green-500 text-white px-2 py-1 rounded"
          >
            Save
          </button>
          <button
            onClick={() => toggleEdit(id)}
            className="ml-2 text-sm bg-gray-500 text-white px-2 py-1 rounded"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div
          onClick={() => toggle(id)}
          className="flex flex-1 items-center cursor-pointer"
        >
          <img className="w-7" src={isComplete ? tick : notTick} alt="" />
          <p
            className={`text-slate-700 ml-4 text-[17px] decoration-slate-500
            ${isComplete ? "line-through" : ""}`}
          >
            {text}
          </p>
        </div>
      )}

      {/* Edit and Delete icons */}
      {!isEditing && (
        <>
          <img
            onClick={() => toggleEdit(id)}
            className="w-6 cursor-pointer"
            src={editIcon}
            alt="Edit"
          />
          <img
            onClick={() => deleteTodo(id)}
            className="w-6 cursor-pointer"
            src={deleteIcon}
            alt="Delete"
          />
        </>
      )}
    </div>
  );
};

export default TodoItems;
