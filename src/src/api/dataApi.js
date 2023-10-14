import axios from 'axios'

const API = "http://ddragon.leagueoflegends.com/cdn/13.20.1/data/es_MX"

export const champiosAll =()=> axios.get(API + "/champion.json");

export const Datail = (id) => axios.get(API + "/champion/"+id+".json")