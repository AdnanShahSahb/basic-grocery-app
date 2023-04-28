import React, { useContext, useState } from 'react'
import ContextWrapper from '../ContextApi'

const Search = () => {
    const usingContext = useContext(ContextWrapper)

    return (
        <>
            <form id='searchBar' className="d-flex" style={{ paddingLeft: '0px',marginTop:'20px', marginBottom: '20px', }}>
                <input className="form-control me-2" type="search" placeholder="Search by price or name" aria-label="Search" onChange={(e) => { usingContext.handleSearchFunc(e) }} />
                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                {/* <label>{searchState}</label> */}
            </form>
        </>
    )
}

export default Search