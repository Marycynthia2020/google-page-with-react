import React from 'react'
import Header from './Header'
import SearchSection from './SearchSection'
import TopFooter from './TopFooter'
import DownFooter from './DownFooter'
import "./index.css"

// import Counter from './Counter'

const GoogleApp = () => {

  return (
    <div className= 'google-app'>
      {/* <Counter /> */}
        <Header />
        <SearchSection />
        <div className = 'all-footers'>
        <TopFooter />
        <DownFooter />
        </div>
        
    </div>
  )
}

export default GoogleApp