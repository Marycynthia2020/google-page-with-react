import React from 'react'
import Header from './Header'
import SearchSection from './SearchSection'
import TopFooter from './TopFooter'
import DownFooter from './DownFooter'
import "./index.css"

const GoogleApp = () => {
  return (
    <div>
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