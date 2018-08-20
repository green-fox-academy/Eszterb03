class Thing {
  private name: string;
  private completed: boolean;

  constructor(name: string) {
    this.name = name;
  }

  public complete() {
    this.completed = true;
  }
  public printX() {
    if (this.completed) {
      return 'X';
    } else {
      return '';
    }
  }
  public printOutName() {
    return this.name;
  }
}

export { Thing };