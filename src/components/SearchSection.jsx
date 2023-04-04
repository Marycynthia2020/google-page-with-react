import React from "react";
import Logo from './Logo';
import "./index.css"
import SearchBarComponent from "./SearchBarComponent";
import Button from './Button'
import Links from './Links'

function SearchSection() {
  return (
    <div className ='Search'>
        <Logo />
        <SearchBarComponent/>

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

    </div>
  )
}
export default SearchSection;
