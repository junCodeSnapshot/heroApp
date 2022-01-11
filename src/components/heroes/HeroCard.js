import React from 'react'
import { Link } from 'react-router-dom'
import { heroImgs } from '../../helpers/imgSelector'


export const HeroCard = ({
    id,
    superhero,
    alter_ego,
}) => {

    return (

        <Link to={`./hero/${id}`}>
            <div className=" card bg-dark ms-3 ps-1 pe-1 pt-1 pb-1 " style={{ maxWidth: "640px", color: '#ffc107' }}>
                <img src={heroImgs(`./${id}.jpg`).default} className="card-img " alt={superhero} style={{ position: 'relative' }} />
                <div className="card-img-overlay" style={{marginTop:"250px",textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>
                    <h5 className=" card-title fs-4">{superhero}</h5>
                    <p className="card-text" style={{color:"white"}}>Alterego: {alter_ego}</p>
                    {/* {
                        (alter_ego !== characters)
                        && <p className="card-text" style={{color:"white"}} >{characters}</p>
                    } */}
                </div>
            </div>
        </Link>


    )
}
