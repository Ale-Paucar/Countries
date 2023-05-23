import {
    GET_ALL_COUNTRIES,
    FILTER_COUNTRIES_BY_ACTIVITIES,
    FILTER_COUNTRIES_BY_CONTINENT,
    ORDER_BY_NAME_OR_POPULATION,
    GET_COUNTRY_DETAIL,
    GET_COUNTRY_BY_NAME,
} from '../actions/action-types';

const initialState = {
    countries: [],
    allCountries: [],
    continents: [],
    countryDetail: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return{
                ...state,
                countries: action.payload,
                allCountries: action.payload
            };

        case FILTER_COUNTRIES_BY_CONTINENT:
            const countriesFiltered = 
            (action.payload === "All")
            ? state.allCountries
            : [...state.allCountries].filter(country => country.continent.includes(action.payload))

            return {
                ...state,
                countries: countriesFiltered
            };

        case FILTER_COUNTRIES_BY_ACTIVITIES:
            return{
                ...state
            };

        case ORDER_BY_NAME_OR_POPULATION:
            switch (action.payload) {
                case "A_Z":
                    console.log(action.payload);
                    const sortedCountriesAZ= [...state.countries].sort((a,b)=>{
                        if(a.name<b.name) return -1;
                        if(a.name>b.name) return 1;
                        return 0;
                    });
                    
                    return {
                        ...state,
                        countries: sortedCountriesAZ
                    };
                
                case "Z_A":
                    const sortedCountriesZA = [...state.countries].sort((a,b)=>{
                        if(a.name>b.name) return -1;
                        if(a.name<b.name) return 1;
                        return 0;
                    });
                    return {
                        ...state,
                        countries: sortedCountriesZA
                    };

                case "creciente":
                    const sortedCountriesPopCr = [...state.countries].sort((a,b)=>{
                        if(a.population<b.population) return -1;
                        if(a.population>b.population) return 1;
                        return 0;
                    });
                    return {
                        ...state,
                        countries: sortedCountriesPopCr
                    };
                

                case "decreciente":
                    const sortedCountriesPopDecr = [...state.countries].sort((a,b)=>{
                        if(a.population>b.population) return -1;
                        if(a.population<b.population) return 1;
                        return 0;
                    });
                    return {
                        ...state,
                        countries: sortedCountriesPopDecr
                    };
            
                default:
                    return {
                        ...state,
                        
                    };
            }

        case GET_COUNTRY_DETAIL:

            return {
                ...state,
                countryDetail: action.payload,
            }

        case GET_COUNTRY_BY_NAME:
            
            return{
                ...state,
                countries: action.payload,
            }
    
        default:
            return {...state};
    }
}

export default reducer;