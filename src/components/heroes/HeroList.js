import React, { useMemo } from 'react'
import { getHerosByPublisher } from '../../Selectors/GetHerosByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const heroes =  useMemo(() => getHerosByPublisher( publisher ), [publisher])
    

    return (
        <div className="row row-cols-1 row-cols-md-5 g-4 animate__animated animate__bounceInLeft">
           {
               heroes.map(hero=>(
                   <HeroCard key={hero.id} className="card-body"
                        {...hero}
                    />
            
               ))

           } 
        </div>
    )
}
