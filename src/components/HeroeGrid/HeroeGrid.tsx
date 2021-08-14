import { MovieCard } from "../HeroeCard/HeroeCard";
import {useHeroes} from "../../hooks/useHeroes";
import { HeroesResponse } from '../../interfaces/heroesInterfaces';
import styles from "./HeroeGrid.module.css";

export function HeroeGrid() {
    const {heroes} = useHeroes();
  return (
    <ul className={styles.heroesGrid}>
      {heroes.map((heroe: HeroesResponse) => (
        <MovieCard {...heroe} />
      ))}
    </ul>
  );
}
