import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  passwordLength: string = "";
  useLetters: boolean = false;
  useNumbers: boolean = false;
  userSymbols: boolean = false;
  generatedPass: string = "";

  onGeneratePassword() {
    const letters = "qwertyuioplkjhgfdsazxcvbnm";
    const numbers = "0123456789";
    const symbols = "!@~#$%^&*()_+{}:?><";
    let allowedChars = "";
    let myPass = "";

    if (this.useLetters) {
      allowedChars += letters;
    }

    if (this.useNumbers) {
      allowedChars += numbers;
    }

    if (this.userSymbols) {
      allowedChars += symbols;
    }

    for (let i = 0; i < +this.passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * allowedChars.length);
      myPass += allowedChars[randomIndex];
    }

    this.generatedPass = myPass;

  }
}
