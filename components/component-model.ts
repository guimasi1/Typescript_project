export default abstract class Component<
  T extends HTMLElement,
  U extends HTMLElement
> {
  hostElement: T;
  element: U;

  constructor(
    hostId: string,
    elementTag: string,
    insertAtStart: boolean,
    newElementId?: string
  ) {
    this.hostElement = document.getElementById(hostId)! as T;
    this.element = document.createElement(elementTag)! as U;
    if (newElementId) {
      this.element.id = newElementId;
    }

    this.attach(insertAtStart);
  }
  private attach(insertAtBeginning: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtBeginning ? "afterbegin" : "beforeend",
      this.element
    );
  }

  abstract configure(): void;
  abstract createContent(): void;
}
