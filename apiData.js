export async function solicitudUsuario() {
    try{
    const url = "https://randomuser.me/api/"
    const respuesta = await fetch(url)
    const { results } = await respuesta.json()
    const datos = results[0]
    console.log(datos);
    return datos;
    }catch(e){
        console.log(e);
    }
}

const url = 'https://world-time-by-api-ninjas.p.rapidapi.com/v1/worldtime?city=Madrid';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f562416c28msh8e124fc1f5978abp1a9ae2jsncc472730b6b5',
		'X-RapidAPI-Host': 'world-time-by-api-ninjas.p.rapidapi.com'
	}
};


export async function solicitudHora(){
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}