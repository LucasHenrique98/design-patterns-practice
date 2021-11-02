interface Observer {
  update(...args: unknown[]): void;
}

interface Observable {
  subscribe(...observers: Observer[]): void;
  unsubscribe(observer: Observer): void;

  publish(): void;
}

class InputObservable implements Observable {
  private _subscribedObservers: Observer[] = [];

  constructor(public element: HTMLInputElement) {}

  subscribe(...observers: Observer[]): void {
    observers.forEach((observer) => {
      if (!this._subscribedObservers.includes(observer)) {
        this._subscribedObservers.push(observer);
      }
    });
  }
  unsubscribe(observer: Observer): void {
    const observerIndex = this._subscribedObservers.indexOf(observer);
    if (observerIndex !== -1) {
      this._subscribedObservers.splice(observerIndex, 1);
    }
  }

  publish(): void {
    this._subscribedObservers.forEach((observer) => observer.update(this));
  }
}

class ParagraphObserver implements Observer {
  constructor(public element: HTMLParagraphElement) {}

  update(observable: InputObservable): void {
    this.element.innerText = observable.element.value;
  }
}

// Client code
function makeInput(): HTMLInputElement {
  const input = document.createElement('input');
  document.body.appendChild(input);

  return input;
}

function makeParagraph(): HTMLParagraphElement {
  const p = document.createElement('p');
  document.body.appendChild(p);

  return p;
}

const input1 = new InputObservable(makeInput());
const p1 = new ParagraphObserver(makeParagraph());

input1.subscribe(p1);
input1.element.addEventListener('keyup', () => {
  input1.publish();
});
