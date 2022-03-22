import regions from "./regions.json";

async function getCities({ region_id }) {
    try {
        const res = await fetch(`https://bandaultralarga.italia.it/wp-json/bul/v1/region/${region_id}/cities`)
        return await res.json();
    } catch (e) {
        console.log("Error retrieving cities: ", e);
        return null;
    }
}

async function searchAddress({ region_name }, { city_id }, address) {
    const params = new URLSearchParams({
        region: region_name,
        city: city_id,
        address: address
    });
    try {
        const res = await fetch(`https://bandaultralarga.italia.it/wp-json/bul/v1/address-search?${params}`);
        return await res.json();
    } catch (e) {
        console.log("Error retrieving address: ", e);
        return null;
    }
}

function getUrl({ region_id }, { city_id }, { id_egon }) {
    return `https://bandaultralarga.italia.it/indirizzo/?address=region-${region_id}_city-${city_id}_street-${id_egon}`
}

export { regions, getCities, searchAddress, getUrl };