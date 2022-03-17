import React from 'react';
import getColor from "../../helpers/getColor";

const ProgressBar = ({data}) => {
    const {department, current, total} = data;
    return (
        <div>
            <div className="flex gap-x-4 text-sm mb-3">
                <h5 className="flex-1">{department}</h5>
                <p>
                    <span>{current}</span>
                    <span>/</span>
                    <span>{total}</span>
                </p>
            </div>
            <div className={`h-1.5 overflow-hidden rounded-full bg-${getColor(department)}-100`}>
                <span className={`h-full block rounded-full bg-${getColor(department)}-500`} style={{width: `${Math.round(current * 100 / total)}%`}}/>
            </div>
        </div>
    )
}

export default ProgressBar;