import { useState } from "react";

export default function SearchBox({onSearch, onClose}) {
  const [searchText, setSearchText] = useState("");

  const handleSearchClick = () => {
    setSearchText("");
    onClose();
  }

  return (
    <div className="search-box">
      <h2 className="search-box-title">Personal Search</h2>
      <div className="search-box-button">
        <label>
          <input
            value={searchText}
            onChange={({ target: { value } }) => setSearchText(value)}
            className="search-box-input"
          ></input>
        </label>
        <button onClick={() => onSearch(searchText)}>Search</button>
        <button onClick={handleSearchClick}>Close</button>
      </div>
    </div>
  );
}
