import {
  arrSymbolKeysEn, arrSymbolKeysEnUp, arrSymbolKeysRu, arrSymbolKeysRuUp,
} from './arrSymbols';

function addActive(arrCurrentTargetDigital, phisicalKey, arrDigitals) {
  arrDigitals.map((el, index) => {
    if (el === phisicalKey) {
      arrCurrentTargetDigital[index].classList.add('pressed');
    }
  });
}
function removeActive(arrCurrentTargetDigital, phisicalKey, arrDigitals) {
  arrDigitals.map((el, index) => {
    if (el === phisicalKey) {
      arrCurrentTargetDigital[index].classList.remove('pressed');
    }
  });
}
function shiftPressed(arrCurrentTarget, shiftKeys) {
  if (arrCurrentTarget[16].innerHTML === 'q') {
    arrCurrentTarget.forEach((el, i) => { el.innerHTML = arrSymbolKeysEnUp.flat()[i]; });
  } else if (arrCurrentTarget[16].innerHTML === 'й') {
    arrCurrentTarget.forEach((el, i) => { el.innerHTML = arrSymbolKeysRuUp.flat()[i]; });
  }
  shiftKeys.forEach((el) => el.classList.add('pressed'));
}

function shiftUnpressed(arrCurrentTarget, shiftKeys) {
  if (arrCurrentTarget[16].innerHTML === 'Q') {
    arrCurrentTarget.forEach((el, i) => { el.innerHTML = arrSymbolKeysEn.flat()[i]; });
  } else if (arrCurrentTarget[16].innerHTML === 'Й') {
    arrCurrentTarget.forEach((el, i) => { el.innerHTML = arrSymbolKeysRu.flat()[i]; });
  }
  shiftKeys.forEach((el) => el.classList.remove('pressed'));
}

function capsPressed(arrCurrentTarget, capsKey) {
  if (arrCurrentTarget[16].innerHTML === 'q') {
    arrCurrentTarget.forEach((el, i) => { el.innerHTML = arrSymbolKeysEnUp.flat()[i]; });
  } else if (arrCurrentTarget[16].innerHTML === 'й') {
    arrCurrentTarget.forEach((el, i) => { el.innerHTML = arrSymbolKeysRuUp.flat()[i]; });
  }
  capsKey.classList.add('pressed');
}
function capsUnpressed(arrCurrentTarget, capsKey) {
  if (arrCurrentTarget[16].innerHTML === 'Q') {
    arrCurrentTarget.forEach((el, i) => { el.innerHTML = arrSymbolKeysEn.flat()[i]; });
  } else if (arrCurrentTarget[16].innerHTML === 'Й') {
    arrCurrentTarget.forEach((el, i) => { el.innerHTML = arrSymbolKeysRu.flat()[i]; });
  }
  capsKey.classList.remove('pressed');
}

export {
  addActive, removeActive, shiftPressed, shiftUnpressed, capsPressed, capsUnpressed,
};
