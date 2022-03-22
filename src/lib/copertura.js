import regions from "./regions.json";
import { c } from "../../dist/assets/vendor.f7ca7b2c";

async function getCities(regionId) {
    try {
        const res = await fetch(`https://bandaultralarga.italia.it/wp-json/bul/v1/region/${regionId}/cities`)
        return await res.json();
    } catch (e) {
        console.log("Error retrieving cities: ", e);
        return null;
    }
}

async function searchAddress(regionName, cityId, address) {
    const params = new URLSearchParams({
        region: regionName,
        city: cityId,
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

export { regions, getCities, searchAddress };