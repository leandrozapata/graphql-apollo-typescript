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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
const type_graphql_1 = require("type-graphql");
let Recipe = class Recipe {
    get specification() {
        return this.description;
    }
    get averageRating() {
        const ratingsCount = this.ratings.length;
        if (ratingsCount === 0) {
            return null;
        }
        const ratingsSum = this.ratings.reduce((a, b) => a + b, 0);
        return ratingsSum / ratingsCount;
    }
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Recipe.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true, deprecationReason: "Use `description` field instead" }),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Recipe.prototype, "specification", null);
__decorate([
    type_graphql_1.Field({ nullable: true, description: "The recipe description with preparation info" }),
    __metadata("design:type", String)
], Recipe.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(type => [type_graphql_1.Int]),
    __metadata("design:type", Array)
], Recipe.prototype, "ratings", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], Recipe.prototype, "creationDate", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int),
    __metadata("design:type", Number)
], Recipe.prototype, "ratingsCount", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Float, { nullable: true }),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Recipe.prototype, "averageRating", null);
Recipe = __decorate([
    type_graphql_1.ObjectType({ description: "Object representing cooking recipe" })
], Recipe);
exports.Recipe = Recipe;
//# sourceMappingURL=recipe.js.map