import {
    Resolver,
    Query,
    Arg} from "type-graphql";
import SearchApiService from "../services/searchApiService";


import { Item} from "../types/item";


@Resolver(of => Item)
export class ItemResolver  {
    
    @Query(returns => [Item], { description: "Get Search Api Results " })
    async items(@Arg("query") query: string): Promise<Item[]> {
        const searchApiService: SearchApiService = new SearchApiService();
        return searchApiService.find(query);
    }    
}