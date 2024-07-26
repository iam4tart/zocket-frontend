class Queue<T> {
  public state: Record<number, T>;
  private front: number;
  private back: number;

  constructor() {
      this.state = {};
      this.front = 0;
      this.back = 0;
  }

  push(val: T): void {
      this.state[this.back] = val;
      this.back += 1;
  }

  pop(): void {
      if (Object.keys(this.state).length === 0) {
          console.log('Empty Queue');
      } else {
          delete this.state[this.front];
          this.front += 1;
      }
  }
}

export default Queue;
