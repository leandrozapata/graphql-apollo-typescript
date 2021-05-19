"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = require("../types/item");
const axios_1 = __importDefault(require("axios"));
const fetcher = (url) => __awaiter(void 0, void 0, void 0, function* () { return axios_1.default.get(url).then(res => res.data); });
class SearchApiService {
    find(query) {
        return __awaiter(this, void 0, void 0, function* () {
            let items = new Array();
            const response = yield fetcher(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
            response === null || response === void 0 ? void 0 : response.results.forEach((item) => {
                const itemToAdd = new item_1.Item();
                itemToAdd.id = item.id;
                itemToAdd.currencyId = item.currency_id;
                itemToAdd.price = item.price;
                itemToAdd.title = item.title;
                itemToAdd.thumbail = item.thumbnail;
                itemToAdd.siteId = item.site_id;
                itemToAdd.address = new item_1.Address();
                itemToAdd.address.stateId = item.address.state_id;
                itemToAdd.address.cityName = item.address.city_name;
                itemToAdd.address.stateName = item.address.state_name;
                items.push(itemToAdd);
            });
            return items;
        });
    }
}
exports.default = SearchApiService;
//# sourceMappingURL=searchApiService.js.map