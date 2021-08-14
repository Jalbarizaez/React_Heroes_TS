import React from 'react'
import Logo from '../assets/logo/logo.svg'
import { useHeroes } from '../hooks/useHeroes';
import { HeroesResponse, Powerstats } from '../interfaces/heroesInterfaces';
import Grid, { GridCellProps } from 'react-virtualized/dist/commonjs/Grid';
import Like from '../assets/medium-heart/medium-heart.svg';

export const HomeScreen = () => {
    const  { heroes }  =  useHeroes()
 
    
    const addFavorito = (id: number) =>{

        
    }

    const renderHero =({ id ,name, biography, images, powerstats }: HeroesResponse) =>{

        
        return(
            <div key={id} className="card ms-3 animate__animated animate__fadeIn" style={ { maxWidth: 540 } }>
            <div className="row row-cols-4">
                <div className="col-md-4">
                    <img src={ images.md } className="card-img" alt={ name } />
                </div>
                <div className="col-md-8">
                    
                    <div className="card-body">
                        <h5 className="card-title"> { name } </h5>
                        {
                            (biography.fullName.length > 1)
                            ? <p className="card-text">Real Name: {  biography.fullName  }</p>
                            : <p className="card-text">Real Name: { '-' }</p>
                        }
                        <p className="card-text">{ ((powerstats.combat+powerstats.durability+powerstats.intelligence
                            +powerstats.power+powerstats.speed+powerstats.strength)/6/10).toFixed(2)   }/10 </p>
                        {/* <button onClick={this.addFavorito(id)}> */}
                        <img 
                            className ="HomeScreen-icon"
                            src = {Like}
                            style = {{
                                borderRadius: 300,
                                height: 50,
                            }}
                            alt = ""
                            
                        />
                        {/* </button> */}
                    </div>

                </div>
            </div>
        </div>

        )
        
    }
    
    
    return (

        <>
            <img 
                src = {Logo}
                style = {{
                    width: 50,
                    margin: 40
                }}
                alt = ""
            />

            <div className="container">
            {
               heroes.map(renderHero)
            } 
            </div>
        </>
    )
}
