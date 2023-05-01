import { arrSymbolKeysEn, arrSymbolKeysEnUp, arrSymbolKeysRu, arrSymbolKeysRuUp } from './arrSymbols';

function addActive(arrCurrentTargetDigital, phisicalKey, arrDigitals) {
    arrDigitals.map((el, index) => {
        if(el === phisicalKey) {
            arrCurrentTargetDigital[index].classList.add('pressed')
        }})
}
function removeActive(arrCurrentTargetDigital, phisicalKey, arrDigitals) {
    arrDigitals.map((el, index) => {
        if(el === phisicalKey) {
            arrCurrentTargetDigital[index].classList.remove('pressed')
        }})
}
function shiftPressed(arrCurrentTarget, shiftKeys) {
    arrCurrentTarget.forEach((el, i) => {el.innerHTML = arrSymbolKeysEnUp.flat()[i]});
    shiftKeys.forEach(el => el.classList.add('pressed'));
    
}

function shiftUnpressed(arrCurrentTarget, shiftKeys) {
    arrCurrentTarget.forEach((el, i) => {el.innerHTML = arrSymbolKeysEn.flat()[i]})
    shiftKeys.forEach(el => el.classList.remove('pressed'));
}

function capsPressed(arrCurrentTarget, capsKey) {
    arrCurrentTarget.forEach((el, i) => {el.innerHTML = arrSymbolKeysEnUp.flat()[i]});
    capsKey.classList.add('pressed');
}
function capsUnpressed(arrCurrentTarget, capsKey) {
    arrCurrentTarget.forEach((el, i) => {el.innerHTML = arrSymbolKeysEn.flat()[i]})
    capsKey.classList.remove('pressed');
}

export { addActive, removeActive, shiftPressed, shiftUnpressed, capsPressed, capsUnpressed }