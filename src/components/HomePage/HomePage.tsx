import {useEffect, useState} from 'react'

const HomePage = () => {

    useEffect(()=>{
        
    }, []) // LISTA DEPENDENCJI

    // montowanie = wysietlenie
    // odmontowanie = znikniecie
    // zmiane wartosci (zmiana propsa w kompencie, zmiana stanu w komponencie, zmiana jakiejkolwiek wartosci)

    // 1. Nie podawac w ogole
    // 2. Podac pusta liste
    // 3. Podac zapelniona liste

  return (
    <div>HomePage</div>
  )
}

export default HomePage

// Ściąganie newsów z API oraz ich wyświetlenie
// useEffect
// axios



// Praca z API w React
// fetch, axios, React Query?
