import { useState } from "react";
import Button from 'react-bootstrap/Button'

export default function SearchBox({onSearch, onClose, isSearching}) {
  const [searchText, setSearchText] = useState("");

  const handleSearchClick = () => {
    setSearchText("");
    onClose();
  }

  return (
    <div className="search-box">
      <h2 className="search-box-title text-light">Search Name</h2>
      <div className="search-box-button">
        <label>
          <input
            value={searchText}
            onChange={({ target: { value } }) => setSearchText(value)}
            className="search-box-input mr-2"
          ></input>
        </label>
        <Button variant="success" className="mr-2" onClick={() => onSearch(searchText)} disabled={!searchText.length}>Search</Button>
        {isSearching && <Button variant="secondary" onClick={handleSearchClick}  disabled={!searchText.length}>Close</Button>}
      </div>
    </div>
  );
}
