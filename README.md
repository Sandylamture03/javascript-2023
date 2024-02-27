# JavaScript-2023

Code repository for my JavaScript learning series with Hitesh.

## VS Code Shortcuts

**Essential Shortcuts**

* **cntr + B:** Toggle the file explorer sidebar.
* **cntr + `:** Open/close the integrated terminal.
* **cntr + P:** Open the quick open menu (search for files, commands).
* **cntr + \:** Split the current editor window.
* **cntr + W:** Close the current file.

**Editing Shortcuts**

* **cntr + shift + I:** Select all occurrences of the current word/selection and start multi-cursor editing.
* **cntr + D:** Add the next occurrence of the current word/selection to the selection.
* **shift + alt + down:** Duplicate the current line below.

## Code Examples

```javascript
// Basic variable declaration
const name = "Hitesh";
let age = 30;

// Functions
function greet(personName) {
  console.log(`Hello, ${personName}!`);
}

greet(name); // Output: Hello, Hitesh!

// Arrays and loops
const numbers = [1, 2, 3, 4];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2); // Output: 2, 4, 6, 8
}
