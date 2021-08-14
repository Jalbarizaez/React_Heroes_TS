import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react'
import { heroesAPI } from '../api/heroesAPI'
import { HeroesResponse } from '../interfaces/heroesInterfaces';

export const useHeroes = () => {

    const [heroes, setHeroes] = useState<HeroesResponse[]>([])
    const url = useRef('https://akabab.github.io/superhero-api/api/all.json');

    const loadHeroes = async() => {
        const resp = await heroesAPI.get<HeroesResponse[]>(url.current);
        await setHeroes(resp.data)
    }
    useEffect(() => {
        loadHeroes()
        
    }, [])

    return {
        heroes
    }
}
