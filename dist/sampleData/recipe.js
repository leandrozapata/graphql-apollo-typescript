"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRecipeSamples = void 0;
const recipe_1 = require("../types/recipe");
function createRecipeSamples() {
    return [
        createRecipe({
            description: "Desc 1",
            title: "Recipe 1",
            ratings: [0, 3, 1],
            creationDate: new Date("2018-04-11"),
        }),
        createRecipe({
            description: "Desc 2",
            title: "Recipe 2",
            ratings: [4, 2, 3, 1],
            creationDate: new Date("2018-04-15"),
        }),
        createRecipe({
            description: "Desc 3",
            title: "Recipe 3",
            ratings: [5, 4],
            creationDate: new Date(),
        }),
    ];
}
exports.createRecipeSamples = createRecipeSamples;
function createRecipe(recipeData) {
    return Object.assign(new recipe_1.Recipe(), recipeData);
}
//# sourceMappingURL=recipe.js.map