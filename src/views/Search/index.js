import { useState } from "react";
import SearchBox from "./components/SearchBox";
import "./style.css";
import data from "../../data/users.json";

export default function Search() {
  const [isAtTop, setIsAtTop] = useState(false);
   const [userData, setUserData] = useState(data);
  const [results, setResults] = useState([]);

  const handleCloseSearch = () => {
      setIsAtTop(false);
      setResults([]);
  };

  const handleSearchClick = (searchText) => {
    if (userData?.length) {
      const searchTextMinus = searchText.toLowerCase();
      const filteredData = userData.filter(
        (value) =>
          value.name.toLowerCase().includes(searchTextMinus) ||
          value.phone.toLowerCase().includes(searchTextMinus) ||
          value.email.toLowerCase().includes(searchTextMinus) ||
          value.username.toLowerCase().includes(searchTextMinus)
      );
      setResults(filteredData);
    }
  };
  console.log(results);
  return (
    <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
      <SearchBox onSearch={handleSearchClick} onClose={handleCloseSearch} />
    </div>
  );
}
