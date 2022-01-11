import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { heroImgs } from '../../helpers/imgSelector'
import { getHerosById } from '../../Selectors/GetHerosById'

// import batman from '../../assets/heroes/dc-batman.jpg' IMPORTACION DE UN RECUSO ESTATICO


export const HeroScreen = ({ history }) => {

    const { heroeId } = useParams()

    const hero = useMemo(() => getHerosById(heroeId), [heroeId])
    
    if (!hero) {
        return <Redirect to="/" />;
    }

    const handleReturn = () => {
        if (history.length <= 2) {
            history.push('/')
        }
        else {
            history.goBack()
        }
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero


    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    // src={`../assets/heroes/${heroeId}.jpg`} //desde public/assets
                    // src={batman} Cuando tenemos un IMPORT ESTATICO
                    src={heroImgs(`./${heroeId}.jpg`).default}
                    className="img-thumbnail animate__animated animate__fadeInTopLeft"
                    alt={superhero} />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego:</b> {alter_ego}.
                        <br/>
                        <b>Publisher:</b> {publisher}.
                        <br/>
                        <b>First appearance</b> {first_appearance}.
                    </li>
                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>

                <button className="btn-btn-primary" onClick={handleReturn}>
                    return
                </button>

            </div>
        </div>
    )
}
