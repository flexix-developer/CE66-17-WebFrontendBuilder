import React, { useState, useEffect } from "react";
import WidgetsTitle from "../toolboxWidgets/ToolboxWidgetsTitle";
import { useDispatch, useSelector } from "react-redux";
import { EditName } from "../../features/counter/counterSlice";
import { parse } from "node-html-parser";

const PropertiesOptionsForm = () => {

  const dispatch = useDispatch();
  const counterState = useSelector((state) => state.counter);

  const [nameValue, setNameValue] = useState("");

  useEffect(() => {
    const targetNode = parse(counterState.value).querySelector(
      `input${counterState.currentFocus}`
    );
    if (targetNode) {
      setNameValue(targetNode.getAttribute("name"));
    } else {
      setNameValue("");
    }
  }, [counterState.currentFocus, counterState.value]);

  const handleEditName = (event) => {
    dispatch(EditName(event.target.value));
  };

  //   const methodOption = [
  //   { value: "GET", label: "GET" },
  //   { value: "POST", label: "POST" },
  //   { value: "PUT", label: "PUT" },
  //   { value: "DELETE", label: "DELETE" },
  // ];

  // const subPageOption = [
  //   { value: "null", label: "null" },
  //   { value: "black page", label: "black page" },
  // ];


  // const [isBlockOptionVisible, setBlockOptionVisible] = useState(true);
  // const handleWidgetsToggle = (widgetType, isOpen) => {
  //   switch (widgetType) {
  //     case "Block Option":
  //       setBlockOptionVisible(isOpen);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row pl-4 py-2 text-lg">
        <p>Name</p>
      </div>
      <div className="flex flex-row pl-4 pb-2">
        <input
          className="w-11/12 p-1 pl-2 bg-neutral-700 rounded border-2 border-neutral-600 resize-none"
          value={nameValue}
          onChange={handleEditName}
        />
      </div>
      <div className="flex flex-row pl-4  pb-1 text-xs w-full text-neutral-400">
        <p>Every input in a form needs a unique name describing what it get, e.g. “email”</p>
      </div>
      {/* <div className="flex flex-row pl-4 py-2 text-lg">
        <p>Action</p>
      </div>
      <div className="flex flex-row pl-4 pb-4">
        <input
          className="w-11/12 p-1 pl-2 bg-neutral-700 rounded border-2 border-neutral-600 resize-none"
          placeholder="url/product/all"
        />
      </div>
      <WidgetsTitle
        title="Advanced Option"
        onToggle={(isOpen) => handleWidgetsToggle("Block Option", isOpen)}
      />
      {isBlockOptionVisible && (
        <div className="py-2">
          <div className="flex flex-row pl-4 py-2 text-lg">
            <p>Method</p>
          </div>
          <div className="flex flex-row pl-4 pb-2 text-black">
            <select className="MethodInputChange">
              {methodOption.map((Option) => (
                <option key={Option.value} value={Option.value}>
                  {Option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      <WidgetsTitle
        title="Advanced Option"
        onToggle={(isOpen) => handleWidgetsToggle("Block Option", isOpen)}
      />
      {isBlockOptionVisible && (
        <div>
          <div className="flex flex-row pl-4 py-2 text-lg">
            <p>Page</p>
          </div>
          <div className="flex flex-row pl-4 pb-2 text-black">
            <select className="MethodInputChange">
              {subPageOption.map((Option) => (
                <option key={Option.value} value={Option.value}>
                  {Option.label}
                </option>
              ))}
            </select>
            <button className="bg-blue-500 text-white p-1 px-2 rounded ml-2">Setting</button>
          </div>
        </div>
      )} */}
      
    </div>
  );
};

export default PropertiesOptionsForm;
