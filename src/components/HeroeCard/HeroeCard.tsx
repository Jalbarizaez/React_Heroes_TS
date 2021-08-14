import { HeroesResponse } from "../../interfaces/heroesInterfaces";
import Like from '../../assets/medium-filled-heart/medium-filled-heart.svg';
import styles from "./HeroeC.module.css";
export function MovieCard({ id ,name, biography, images, powerstats }: HeroesResponse) {
    
    return (
    <li className="card ms-3 animate__animated animate__fadeIn" key = {id} style={{ 
        backgroundImage: `url(${images.lg})`,
        

            }}>
        <div style={{ position: 'relative' }}>
                    <img src={ images.md } className="card-img" alt={ name }style={{ 
                     }} />
                    <img src={Like} className="HomeScreen-icon" style={{ border: 50, width: 30, color: 'white' }}/>
        </div>
                <div className="col-md">
                    
                    <div className="card-body">
                        <h5 className="card-title"> { name } </h5>
                        {
                            (biography.fullName.length > 1)
                            ? <p className="card-text">Real Name: {  biography.fullName  }</p>
                            : <p className="card-text">Real Name: { '-' }</p>
                        }
                        <p className="card-text">{ ((powerstats.combat+powerstats.durability+powerstats.intelligence
                            +powerstats.power+powerstats.speed+powerstats.strength)/6/10).toFixed(2)   }/10 </p>
                        
                    </div>

                </div>
    </li>
  );
}

