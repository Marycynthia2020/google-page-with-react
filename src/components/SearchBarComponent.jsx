import { useState } from "react";

const SearchBarComponent = ({ showValue }) => {
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const enterKeyPressed = (event) => {
    if (event.key === "Enter") {
      showValue(searchValue);
      setSearchValue('');
    }
  };

  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <div className="searchicons">
        <input
          type="text"
          placeholder="Search Google or type a URL"
          value={searchValue}
          onChange={handleChange}
          onKeyDown={enterKeyPressed}
        />
      </div>
    </div>
  );
};

export default SearchBarComponent;
