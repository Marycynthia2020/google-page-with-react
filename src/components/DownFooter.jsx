import React from 'react'
import Links from './Links'

const DownFooter = () => {
  return (
    <div className = 'footer'>
        <div className = 'down-footer'>
            <Links  title = {'About'}/>
            <Links  title = {'Advertising'}/>
            <Links  title = {'Bussiness'}/>
            <Links  title = {'How Search Works'}/>
        </div>
        <div className = 'down-footer'>
            <Links title = {'Carbon neutral since 2007'}/>
        </div>
        <div className = 'down-footer'>
            <Links title = {'Privacy'}/>
            <Links title = {'Terms'}/>
            <Links title = {'Settings'}/>
        </div>
    </div>
  )
}

export default DownFooter