import {
    Resolver,
    Query,
    FieldResolver,
    Arg,
    Root,
    Mutation,
    Int,
    ResolverInterface,
    InputType,
    Field
} from "type-graphql";

import { Recipe } from "../types/recipe";
import { createRecipeSamples } from "../sampleData/recipe";

@InputType()
export class RecipeInput implements Partial<Recipe> {
    @Field()
    title: string;

    @Field({ nullable: true })
    description?: string;
}

@Resolver(of => Recipe)
export class RecipeResolver implements ResolverInterface<Recipe> {
    private readonly items: Recipe[] = createRecipeSamples();

    @Query(returns => Recipe, { nullable: true })
    async recipe(@Arg("title") title: string): Promise<Recipe | undefined> {
        return await this.items.find(recipe => recipe.title === title);
    }

    @Query(returns => [Recipe], { description: "Get all the recipes from around the world " })
    async recipes(): Promise<Recipe[]> {
        return await this.items;
    }

    @Query(returns => [Recipe], { description: "Get all the recipes from around the world " })
    async recipesByTitles(@Arg("recipeTitles", type => [String]) recipeTitles: [String]): Promise<Recipe[]> {
        let recipes: Recipe[] = new Array<Recipe>();
        recipeTitles.forEach(title => {
            const rc: Recipe | undefined = this.items.find(recipe => recipe.title === title);
            if (rc) return recipes.push(rc);
        });
        return recipes;
    }

    @Mutation(returns => Recipe)
    async addRecipe(@Arg("recipe") recipeInput: RecipeInput): Promise<Recipe> {
        const recipe = Object.assign(new Recipe(), {
            description: recipeInput.description,
            title: recipeInput.title,
            ratings: [],
            creationDate: new Date(),
        });
        await this.items.push(recipe);
        return recipe;
    }

    @FieldResolver()
    ratingsCount(
        @Root() recipe: Recipe,
        @Arg("minRate", type => Int, { defaultValue: 0.0 }) minRate: number,
    ): number {
        return recipe.ratings.filter(rating => rating >= minRate).length;
    }
}