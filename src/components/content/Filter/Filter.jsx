import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {filterAction} from "../../../redux/contacts/contacts-actions";
import {filterSel} from "../../../redux/contacts/contacts-selectors";

function Filter ()  {

    const filterSelector = useSelector(filterSel)
    const dispatch = useDispatch()

    const handleChange = ({target}) =>{
        const {value} = target
        dispatch(filterAction(value))
    }

    return (
        <div>
            <input type={"text"} value={filterSelector} onChange={handleChange}/>
        </div>
    );
};

export default Filter;