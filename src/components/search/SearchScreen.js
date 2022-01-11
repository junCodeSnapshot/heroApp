import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useForm } from '../../Hooks/useForm';
// import { heroes } from '../../data/heros'
import { HeroCard } from '../heroes/HeroCard';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../Selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation()

    // console.log(location.search)
    const { q = '' } = queryString.parse(location.search)


    const [{ search: searchWord }, handleInputChange,] = useForm({
        search: q
    })

    const herosFiltered = useMemo(() => getHeroesByName(q), [q])

    // console.log(search); 

    const handleSearch = (e) => {
        e.preventDefault()
        history.push(`?q=${searchWord}`)
    }
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            name="search"
                            placeholder="Find your hero"
                            className="form-control"
                            onChange={handleInputChange}
                            value={searchWord}
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-primary"
                        >
                            Search
                        </button>

                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>

                    {
                    (q === '') ?  
                    <div className="alert alert-info">
                        Search a hero
                    </div>
                    :
                    (q!=='' && herosFiltered.length===0) &&
                    <div className="alert alert-danger">
                    There is no hero with a name of: <b>{q}</b>
                    </div>
                    }



                    {
                        herosFiltered.map(hero => <HeroCard
                            key={hero.id}
                            {...hero}
                        />)
                    }
                    <hr />
                </div>
            </div>
        </div>
    )
}
