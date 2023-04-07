import React from "react";
import Logo from './Logo';
import SearchBarComponent from "./SearchBarComponent";
import Button from './Button'
import Links from './Links'
import { useState } from 'react' ;

function SearchSection() {
  const [searchValue, setSearchValue] = useState('');

  const getInputValue = (valueFromInput) => {
    setSearchValue(valueFromInput)
  }
  return (
    <div className ='Search'>
        <Logo />
        <SearchBarComponent  showValue = {getInputValue} />
        <div className = 'Buttons'>
          <Button title = {'Google Search'}/>
          <Button title = {'I\'m Feeling Lucky'} />
        </div>

        <div className ='links'>
          <p>Google offered in:</p>
          <Links title= {'Hausa'}/>
          <Links title= {'Igbo'} />
          <Links title= {'EdeYoruba'} />
          <Links title= {'Hausa'} />
          <Links title= {'Nigerian Pidgin'} />
        </div>
        {searchValue && <div style = {{color: 'red'}}>{searchValue}</div> }

    </div>
  )
}
export default SearchSection;
