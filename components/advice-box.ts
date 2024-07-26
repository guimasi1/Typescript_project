import Component from "./component-model.js";

import Advice from "../models/advice.js";
import getAdvice from "../fetches/get-advice.js";

export default class AdviceBox extends Component<HTMLDivElement, HTMLElement> {
  advice: Advice;

  constructor() {
    super("advice-box-container", "div", true, "advice");
    this.advice = new Advice(0, "Loading...");
    this.createContent();
    this.retrieveAdvice();
  }

  async retrieveAdvice() {
    try {
      const data = await getAdvice();
      this.advice = new Advice(data.id, data.advice);
      this.createContent();
    } catch (err) {
      console.log(err);
    }
  }

  configure(): void {}

  createContent(): void {
    this.element.innerHTML = `<p class="cool-font">${this.advice.advice}</p>`;
  }
}
