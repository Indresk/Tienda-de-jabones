export async function getApi(url){
    try{
        let r = await fetch(url)
        if (!r.ok) {
        throw new Error (`Error en la petición: ${r.status} ${r.statusText}`)}
        await new Promise(res=>setTimeout(res,1000))
        return await r.json();
    }
    catch(error){
        console.error('API error: ', error.message);
        throw error;
    }
}