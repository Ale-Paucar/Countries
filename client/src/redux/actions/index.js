import {  
    GET_ALL_COUNTRIES,
    FILTER_COUNTRIES_BY_ACTIVITIES,
    FILTER_COUNTRIES_BY_CONTINENT,
    ORDER_BY_NAME_OR_POPULATION,
    GET_COUNTRY_DETAIL,
    GET_COUNTRY_BY_NAME
} from "./action-types";

import axios from 'axios';

export const getAllCountries = () => {
    return async function(dispatch){
        let response = await axios('http://localhost:3001/countries');

        return dispatch( { type: GET_ALL_COUNTRIES, payload: response.data } )
    }
}

export const filterCountriesByContinent = (continentName) => {
    return { type: FILTER_COUNTRIES_BY_CONTINENT, payload: continentName }
}

export const filterCountriesByActivities = (activityName) => {
    return { type: FILTER_COUNTRIES_BY_ACTIVITIES, payload: activityName }
}

export const orderByNameOrPopulation = (orderTypeSelected) => {
    return { type: ORDER_BY_NAME_OR_POPULATION, payload: orderTypeSelected }
}

export const getCountryDetail = (countryId) => {
    if(!countryId){
        return { type: GET_COUNTRY_DETAIL, payload: [] }
    }else{
        return async function(dispatch){
            let response = await axios(`http://localhost:3001/countries/${countryId}`);
    
            return dispatch( { type: GET_COUNTRY_DETAIL , payload: response.data } )
        }
    }
}

export const getCountryByName = (countryName) => {
    return async function(dispatch){
        try {
            let response = await axios(`http://localhost:3001/countries/name?name=${countryName}`);
    
            return dispatch( { type: GET_COUNTRY_BY_NAME , payload: response.data } )
        } catch (error) {
            return dispatch( { type: GET_COUNTRY_BY_NAME , payload: [error.response.data] } )
        }
    }
}