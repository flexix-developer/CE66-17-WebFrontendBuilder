import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { parse } from "node-html-parser";
import { EditSrc } from "../../features/counter/counterSlice"

const PropertiesOptionsEmbed = () => {
  const dispatch = useDispatch();
  const counterState = useSelector((state) => state.counter);
  const [embedValue, setEmbedValue] = useState("");

  useEffect(() => {
    const targetNode = parse(counterState.value).querySelector(
      `iframe${counterState.currentFocus}`
    );
    if (targetNode) {
      setEmbedValue(targetNode.getAttribute("src"));
    } else {
      setEmbedValue("");
    }
  }, [counterState.currentFocus, counterState.value]);

  const handleEditSrc = (event) => {
    dispatch(EditSrc(event.target.value));
};

  return (
    <div className="flex flex-col w-full p-2">
      <div className="flex flex-row pl-2 pb-1 text-lg">
        <p>URL</p>
      </div>
      <div className="flex flex-row pl-2 pb-1">
        <input
          type="text"
          placeholder="e.g. https://www.google.com"
          value={embedValue}
          onChange={handleEditSrc}
          className="w-11/12 p-1 pl-2 bg-neutral-700 rounded border-2 border-neutral-600"
        />
      </div>
      <div className="flex flex-row pl-2 pb-1 text-xs w-full text-neutral-400">
        <p>e.g. enter a youtube url, google map, etc</p>
      </div>
      <div className="flex flex-row pl-2 pb-1 text-lg mt-2">
        <p>Link URL</p>
      </div>
      <div className="flex flex-row pl-2 pb-1">
        <input
          type="text"
          placeholder="e.g. https://www.google.com"
          className="w-11/12 p-1 pl-2 bg-neutral-700 rounded border-2 border-neutral-600"
        />
      </div>
      <div className="flex flex-row pl-2 pb-1 text-xs w-full text-neutral-400">
        <p>Set this to make this whole block link somewhere</p>
      </div>
    </div>
  );
};

export default PropertiesOptionsEmbed;
