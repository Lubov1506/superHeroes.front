import React from 'react';
import { useEffect } from 'react';
import {connect} from 'react-redux';
import { getHeroesRequestAction } from '../../actions/actionCreators';

const HeroesList = props => {
    const { heroes, isFetching, error} = props;

    useEffect(()=>{
        props.getHeroesRequestAction({limit:5, offset: 0});
    }, [])

    const loadMore = () =>{
        props.getHeroesRequestAction({
            offset: heroes.length
        })
    }
    return (
        <div>
      {isFetching && <p>Loading....</p>}
      {error && <p>Some error</p>}
      <button onClick={loadMore}>Load Other SuperHeroes</button>
      {heroes.map(hero => {
            return <li key={hero.id}>{JSON.stringify(hero)}</li>;
          })
       } 
        </div>
    );
}
const mapStateToProps = ({hero}) => hero
export default connect(mapStateToProps, {getHeroesRequestAction})(HeroesList);
