import React, { useContext } from 'react';
import Input from './Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { UseContextApi } from '../App';


const SearchBox = () => {

  const { inputSearchData, setInputSearchData } = useContext(UseContextApi);

  return (
    <>
        <div className="searchBoxContainer">
            <div className="searchBox">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <Input text="text" placeholder="Search Your Title ..." value={inputSearchData} onChange={setInputSearchData} />
            </div>
        </div>
    </>
  )
}

export default SearchBox