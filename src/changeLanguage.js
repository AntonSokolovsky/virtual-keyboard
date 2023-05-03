import {
  arrSymbolKeysEn, arrSymbolKeysEnUp, arrSymbolKeysRu, arrSymbolKeysRuUp,
} from './arrSymbols';

export function changeLanguage(arrCurrentTarget) {
  if (arrCurrentTarget[16].innerHTML === 'Q') {
    arrCurrentTarget.forEach((el, i) => { el.innerHTML = arrSymbolKeysRuUp.flat()[i]; });
  } else if (arrCurrentTarget[16].innerHTML === 'q') {
    arrCurrentTarget.forEach((el, i) => { el.innerHTML = arrSymbolKeysRu.flat()[i]; });
  } else if (arrCurrentTarget[16].innerHTML === 'Й') {
    arrCurrentTarget.forEach((el, i) => { el.innerHTML = arrSymbolKeysEnUp.flat()[i]; });
  } else if (arrCurrentTarget[16].innerHTML === 'й') {
    arrCurrentTarget.forEach((el, i) => { el.innerHTML = arrSymbolKeysEn.flat()[i]; });
  }
}
