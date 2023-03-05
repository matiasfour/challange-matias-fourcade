import '../styles/sidebar.css'

const SideBar = ({filterTypes, setFilterTypes, priceRange, setPriceRange}) => {


  return (
    <div className="sideBar">
        <span className='filters-title'>Filter Results</span>
        <div className='product-types-wrapper'>
            <span>Product type</span>
            <div className='product-types'>
                {
                    filterTypes && Object.keys(filterTypes).map(type => (
                        <label>
                            <input checked={filterTypes[type]} type="checkbox" value={type} onChange={(e) => setFilterTypes({...filterTypes , [type]: e.target.checked})} />
                            {type}
                        </label>
                    ))
                }
            </div>
        </div>
        <div>
            <span>Price range</span>        
            <div>
                <input className='priceRange-input' type="range" min='0' max='500' value={priceRange} onChange={(e) => setPriceRange(e.target.value)} />
                <div className='priceRange-values'>
                    <span>0</span>
                    <span>{priceRange}</span>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default SideBar