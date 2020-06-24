export default class Category {
    public _id: string;
    public title: string;
    public description: string;
    public parent: string | null;
    public products: [string]
}