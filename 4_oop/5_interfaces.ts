interface IFE {
  FE(): string[];
}
interface IBE {
  BE(): string[];
}

class FullStack implements IFE, IBE {
  constructor(public name: string, public title: string) {
    this.name = name;
    this.title = title;
  }
  FE(): string[] {
    return ['react', 'js', 'HTML', 'CSS', 'tailwind'];
  }
  BE(): string[] {
    return ['Node', 'js', 'SQL', 'AZURE', 'MongoDb'];
  }
}
