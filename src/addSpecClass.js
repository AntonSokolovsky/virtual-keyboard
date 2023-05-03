export function addSpecClass(digital) {
  if (digital.innerHTML === '⟵') {
    digital.classList.add('backspace');
  } else if (digital.innerHTML === 'Esc') {
    digital.classList.add('esc');
  } else if (digital.innerHTML === 'Tab') {
    digital.classList.add('tab');
  } else if (digital.innerHTML === 'Del') {
    digital.classList.add('del');
  } else if (digital.innerHTML === 'Caps') {
    digital.classList.add('caps');
  } else if (digital.innerHTML === 'Enter') {
    digital.classList.add('enter');
  } else if (digital.innerHTML === 'Shift') {
    digital.classList.add('shift');
  } else if (digital.innerHTML === 'Fn') {
    digital.classList.add('fn');
  } else if (digital.innerHTML === 'Ctrl') {
    digital.classList.add('ctrl');
  } else if (digital.innerHTML === 'Win') {
    digital.classList.add('win');
  } else if (digital.innerHTML === 'Alt') {
    digital.classList.add('alt');
  } else if (digital.innerHTML === '&#9776') {
    digital.classList.add('menu');
  } else if (digital.innerHTML === '▲') {
    digital.classList.add('arrow-up');
    digital.classList.add('arrow');
    digital.classList.add('withTwoValue');
  } else if (digital.innerHTML === '◀') {
    digital.classList.add('arrow-left');
    digital.classList.add('arrow');
    digital.classList.add('withTwoValue');
  } else if (digital.innerHTML === '▼') {
    digital.classList.add('arrow-down');
    digital.classList.add('arrow');
    digital.classList.add('withTwoValue');
  } else if (digital.innerHTML === '▶') {
    digital.classList.add('arrow-right');
    digital.classList.add('arrow');
    digital.classList.add('withTwoValue');
  } else if (digital.innerHTML === ' ') {
    digital.classList.add('space');
  } else {
    digital.classList.add('withTwoValue');
  }
}
