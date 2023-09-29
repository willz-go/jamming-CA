import React from "react";
import styles from '../css/SearchBar.module.css'

const SearchBar =  () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (<>
    <form onSubmit={handleSubmit}>
        <label htmlFor="music-search"></label>
        <input name="music-search" type="text" />
        <button>Search</button>
    </form>
    </>)
}


export default SearchBar