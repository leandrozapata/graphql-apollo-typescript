import { Address, Item } from "../types/item";
import axios from 'axios';

const fetcher = async (url: string) => axios.get(url).then(res => res.data)

export default class SearchApiService {
    async find(query: String): Promise<Item[]> {
        let items: Item[] = new Array<Item>();
        const response = await fetcher(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);

        response?.results.forEach((item: { id: string; currency_id: string; price: number; title: string; thumbnail: string; site_id: string; address: { state_id: string; city_name: string; state_name: string; }; }) => {
            const itemToAdd = new Item();
            itemToAdd.id = item.id;
            itemToAdd.currencyId = item.currency_id;
            itemToAdd.price = item.price;
            itemToAdd.title = item.title;
            itemToAdd.thumbail = item.thumbnail;
            itemToAdd.siteId = item.site_id;
            itemToAdd.address = new Address()
            itemToAdd.address.stateId = item.address.state_id;
            itemToAdd.address.cityName = item.address.city_name;
            itemToAdd.address.stateName = item.address.state_name;
            items.push(itemToAdd);
        });
        return items;
    }
}