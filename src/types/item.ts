import { Field, ObjectType, Int, Float } from "type-graphql";

@ObjectType({ description: "Object representing a Address" })
export class Address {
  @Field()
  stateId: string;

  @Field()
  stateName: string;

  @Field()
  cityName: string;
}



@ObjectType({ description: "Object representing a search item" })
export class Item {
  @Field()
  id: string;

  @Field()
  siteId: string;

  @Field()
  title: string;

  @Field()
  thumbail: string;

  @Field(type => Int)
  price: number;

  @Field()
  currencyId: string;

  @Field()
  address: Address;

}