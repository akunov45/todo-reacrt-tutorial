import React from 'react';
import './index.css'
const SearchPanel = ({onChange}) => {


    return (
        <div className={'search-panel'}>
            <div>
                <input type="text"
                       className="form-control search-input"
                       placeholder="type to search"
                       onChange={(e) => {
                           onChange(e.target.value)
                       }}/>
            </div>
        </div>
    );
}

export default SearchPanel;
