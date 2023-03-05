import React from 'react'
import '../styles/panelView.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const PanelView = ({quantity, setView, sortResults, setSortResults}) => {
  return (
    <div className='panel-view'>
        <span className='quantity'>Available Deals: {quantity}</span>
        <div className='panel-controls'>
            <div className='view-buttons'>
                <FontAwesomeIcon className='view-button' onClick={() => setView("grid")} size='2x' icon={icon({name: 'grip', style: 'solid'})} />
                <FontAwesomeIcon className='view-button' onClick={() => setView("list")} size='2x' icon={icon({name: 'list-dots', style: 'solid'})} />
            </div>
            <select value={sortResults} onChange={(e) =>{
                setSortResults(e.target.value) }
                    } 
                >
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="Lowest to Heighest">Lowest to Heighest</option>
                <option value="Heighest to Lowest">Heighest to Lowest</option>
            </select>
        </div>
    </div>
  )
}

export default PanelView