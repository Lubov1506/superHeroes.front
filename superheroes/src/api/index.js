import axios from 'axios';
import queryString from 'query-string';

const httpClient = axios.create({
    baseURL: 'http://127.0.0.1:5000/api'
})
export const createHero = data => httpClient.post('/superHeroes', data)

export const getHeroes = ({ limit = 5, offset = 0}) => 
httpClient.get(`/users?${queryString.stringify({ offset, limit })}`);