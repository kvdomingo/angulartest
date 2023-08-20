import { Component } from "@angular/core";

@Component({
  selector: "app-counter-button",
  templateUrl: "./counter-button.component.html",
  styleUrls: ["./counter-button.component.css"],
})
export class CounterButtonComponent {
  count = 0;

  onClick() {
    this.count++;
  }

  getDouble() {
    return 2 * this.count;
  }
}
