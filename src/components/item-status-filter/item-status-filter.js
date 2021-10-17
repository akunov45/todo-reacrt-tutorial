import React, {useState} from 'react';


const ItemStatusFilter = ({changeStatus,setStatus}) => {

    // const style = {
    //     backgroundColor: done ? 'green' : 'wight',
    // };
    // const style2 = {
    //     backgroundColor: important ? 'green' : 'wight',
    // };
    return (
        <div className="btn-group">
            <button type="button"
                    className="btn btn-info"
                    onClick={(e) => {
                        changeStatus(e.target.innerText)
                    }}
            >All
            </button>
            <button type="button"
                    // style={style2}
                    className="btn btn-outline-secondary"
                    onClick={(e) => {
                        changeStatus(e.target.innerText)
                        setStatus(e.target.innerText)

                    }}
            >Active
            </button>
            <button type="button"
                    // style={style}
                    className="btn btn-outline-secondary"
                    onClick={(e) => {
                        changeStatus(e.target.innerText)
                        setStatus(e.target.innerText)
                    }}
            >Done
            </button>
        </div>
    );
};

export default ItemStatusFilter;
