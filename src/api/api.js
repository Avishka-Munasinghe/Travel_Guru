import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary'
const URL2 = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Key': 'your api key',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });

        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getRestaurantsData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL2, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Key': 'your api key',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });

        return data;
    } catch (error) {
        console.log(error);
    }
};
