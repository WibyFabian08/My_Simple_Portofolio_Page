import React from 'react';

const CardSkill = ({poto, name}) => {
    return (
        <div className="card-skill text-center">
            <img src={poto} width={200} alt="" />
            <h5 className="mt-3 leading">{name}</h5>
        </div>
    )
}

export default CardSkill;