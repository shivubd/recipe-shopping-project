export class Ingredient {
    constructor(public name: string, public amount: number) {}
    //by giving access specifier to params in constructor, typescript automatically decalres these varibles,
    // and assigns them value give by params from constructor
}