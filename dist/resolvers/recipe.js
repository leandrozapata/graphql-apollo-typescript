"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeResolver = exports.RecipeInput = void 0;
const type_graphql_1 = require("type-graphql");
const recipe_1 = require("../types/recipe");
const recipe_2 = require("../sampleData/recipe");
let RecipeInput = class RecipeInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], RecipeInput.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], RecipeInput.prototype, "description", void 0);
RecipeInput = __decorate([
    type_graphql_1.InputType()
], RecipeInput);
exports.RecipeInput = RecipeInput;
let RecipeResolver = class RecipeResolver {
    constructor() {
        this.items = recipe_2.createRecipeSamples();
    }
    recipe(title) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.items.find(recipe => recipe.title === title);
        });
    }
    recipes() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.items;
        });
    }
    recipesByTitles(recipeTitles) {
        return __awaiter(this, void 0, void 0, function* () {
            let recipes = new Array();
            recipeTitles.forEach(title => {
                const rc = this.items.find(recipe => recipe.title === title);
                if (rc)
                    return recipes.push(rc);
            });
            return recipes;
        });
    }
    addRecipe(recipeInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const recipe = Object.assign(new recipe_1.Recipe(), {
                description: recipeInput.description,
                title: recipeInput.title,
                ratings: [],
                creationDate: new Date(),
            });
            yield this.items.push(recipe);
            return recipe;
        });
    }
    ratingsCount(recipe, minRate) {
        return recipe.ratings.filter(rating => rating >= minRate).length;
    }
};
__decorate([
    type_graphql_1.Query(returns => recipe_1.Recipe, { nullable: true }),
    __param(0, type_graphql_1.Arg("title")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecipeResolver.prototype, "recipe", null);
__decorate([
    type_graphql_1.Query(returns => [recipe_1.Recipe], { description: "Get all the recipes from around the world " }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecipeResolver.prototype, "recipes", null);
__decorate([
    type_graphql_1.Query(returns => [recipe_1.Recipe], { description: "Get all the recipes from around the world " }),
    __param(0, type_graphql_1.Arg("recipeTitles", type => [String])),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], RecipeResolver.prototype, "recipesByTitles", null);
__decorate([
    type_graphql_1.Mutation(returns => recipe_1.Recipe),
    __param(0, type_graphql_1.Arg("recipe")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RecipeInput]),
    __metadata("design:returntype", Promise)
], RecipeResolver.prototype, "addRecipe", null);
__decorate([
    type_graphql_1.FieldResolver(),
    __param(0, type_graphql_1.Root()),
    __param(1, type_graphql_1.Arg("minRate", type => type_graphql_1.Int, { defaultValue: 0.0 })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [recipe_1.Recipe, Number]),
    __metadata("design:returntype", Number)
], RecipeResolver.prototype, "ratingsCount", null);
RecipeResolver = __decorate([
    type_graphql_1.Resolver(of => recipe_1.Recipe)
], RecipeResolver);
exports.RecipeResolver = RecipeResolver;
//# sourceMappingURL=recipe.js.map