class MemoryDataBase<T> {
  protected items = new Array<T>();
  public addItem(item: T) {
    this.items.push(item);
  }
  public getItemByIndex(index: number): T | undefined {
    return this.items[index];
  }
  public listItems() {
    this.items.forEach((i) => console.log(i));
  }
}

class MemoryDataBaseWithDelete<
  T extends { id: string }
> extends MemoryDataBase<T> {
  public delete(id: string) {
    const index = this.items.findIndex((x) => x.id === id);
    this.items.splice(index, 1);
  }
}

const namesDataBases = new MemoryDataBase<string>();
namesDataBases.addItem('john');
const firstElement = namesDataBases.getItemByIndex(0);

const dataBaseWitId = new MemoryDataBaseWithDelete<{ id: string }>();
dataBaseWitId.addItem({ id: '1' });
const firstId = dataBaseWitId.getItemByIndex(0);
