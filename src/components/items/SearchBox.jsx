import { useState, useRef } from "react"

function SearchBox() {
    const submitRef = useRef()
    const searchRef = useRef()
    const [searchInput, setSearchInput] = useState('')

    const handleChange = (e) => {
        setSearchInput(e.target.value);
        submitRef.current.click()
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div className="search">
        <form onSubmit={onSubmit} name="search">
            <input 
                type="text" placeholder="search" 
                value={searchInput} 
                id="search"
                ref={searchRef}
                onChange={handleChange}
            />
            <i 
                className="fa-solid fa-magnifying-glass"
                onClick={() => {searchRef.current.focus()}}></i>
            <button ref={submitRef} type="submit" style={{display: 'none'}}>Submit</button>
        </form>
    </div>
  )
}

export default SearchBox