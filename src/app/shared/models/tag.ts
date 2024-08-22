export class Tag {

    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
    static readonly REACT = new Tag('React', 'blue');
    static readonly NODEJS = new Tag('Node.JS', 'brown');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'orange');
    static readonly MONGODB = new Tag('MongoDB', 'green');
    static readonly EXPRESS = new Tag('Express', 'pink');

    private constructor(private readonly key: string, public readonly color: string){

    }

    toString(){
        return this.key;
    }
}