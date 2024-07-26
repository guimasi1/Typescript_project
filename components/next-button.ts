import getAdvice from "../fetches/get-advice.js";
import Advice from "../models/advice.js";
import Component from "./component-model.js";

export default class NextButton extends Component<HTMLDivElement, HTMLElement> {
  constructor(public innerButtonText: string) {
    super("advice-box-container", "div", false, "next-button");
    this.innerButtonText = innerButtonText;
    this.createContent();
  }
  configure(): void {}
  createContent(): void {
    this.element.innerHTML = `<button>${this.innerButtonText}</button>`;
    this.element.addEventListener("click", this.fillContent);
  }

  async fillContent() {
    try {
      const data = await getAdvice();
      const adviceDiv = document.getElementById("advice")! as HTMLDivElement;
      adviceDiv.innerHTML = `<p class="cool-font">${data.advice}</p>`;
    } catch (err) {
      console.log(err);
    }
  }
}
