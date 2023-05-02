import { addActive , removeActive, shiftPressed, shiftUnpressed, capsPressed, capsUnpressed } from './modifierDigitalsFunctions';
import { changeLanguage } from './changeLanguage';

export function action(event) {
    event.preventDefault();
    // console.log(event)
    let input = document.querySelector('.input');
    // console.log(event.preventDefault())
    let backspaceKey = event.currentTarget.querySelector('.backspace');
    let tabKey = event.currentTarget.querySelector('.tab');
    let capsKey = event.currentTarget.querySelector('.caps');
    let phisicalKey = event.key;
    let space = event.currentTarget.querySelector('.space');
    let arrowUpKey = event.currentTarget.querySelector('.arrow-up');
    let arrowDownKey = event.currentTarget.querySelector('.arrow-down');
    let arrowLeftKey = event.currentTarget.querySelector('.arrow-left');
    let arrowRightKey = event.currentTarget.querySelector('.arrow-right');
    //let input = document.querySelector('textarea');
    let arrowKeys = event.currentTarget.querySelectorAll('.arrow');
    
    let shiftKeys = event.currentTarget.querySelectorAll('.shift');
    let arrCurrentTarget = event.currentTarget.querySelectorAll('.key');
    let arrCurrentTargetDigital = event.currentTarget.querySelectorAll('.withTwoValue');
    let ctrlKeys = document.querySelectorAll('.ctrl');
    let altKeys = document.querySelectorAll('.alt');
    let enterKey = document.querySelector('.enter');
    //console.log(arrCurrentTargetDigital);
    let arrDigitals = [];
    arrCurrentTargetDigital.forEach((element) => arrDigitals.push(element.innerHTML));
    console.log((arrCurrentTarget[16].innerHTML === 'Q' || event.target.classList.contains('shift')) && !event.target.classList.contains('caps') && !arrCurrentTarget[30].classList.contains('pressed') && event.type !== "keyup" && event.repeat )
    console.log(event.type, event.repeat)
    if (event.type === 'keydown') {
        console.log('Helli, Peter')
        arrCurrentTargetDigital.forEach((el, i) => {
            if(el.innerHTML === phisicalKey) {
                el.classList.add('pressed');
            }     
    })
}
    if (event.target.classList.contains('shift') && (arrCurrentTarget[16].innerHTML === 'q' || arrCurrentTarget[16].innerHTML === 'й') && !arrCurrentTarget[30].classList.contains('pressed')) {
       shiftPressed(arrCurrentTarget, shiftKeys);
    } else if ((arrCurrentTarget[16].innerHTML === 'Q' || arrCurrentTarget[16].innerHTML === 'Й' || event.target.classList.contains('shift')) && !event.target.classList.contains('caps') && event.target.classList.contains('key') && !arrCurrentTarget[30].classList.contains('pressed') && event.type === "click" && event.repeat !== 'true') {
        console.log('hello, Peter')
        if(event.target.innerHTML !== 'Shift') {
            input.value = input.value + event.target.innerHTML; 
        }
        shiftUnpressed(arrCurrentTarget, shiftKeys);
    } else if (event.target.classList.contains('caps') && !event.target.classList.contains('pressed')) {
        shiftKeys.forEach(el => el.classList.remove('pressed'));
        capsPressed(arrCurrentTarget, capsKey);
    } else if (event.type === 'keydown'&& !['Escape', 'Tab', 'CapsLock', 'Shift', 'Control', 'Meta', 'Alt', 'Enter', 'Backspace', 'Delete'].includes(event.key)) {
        input.value = input.value + event.key;
    } else if (event.target.classList.contains('caps') && event.target.classList.contains('pressed')) {
        capsUnpressed(arrCurrentTarget, capsKey);
    } else if(phisicalKey === 'Shift' && (arrCurrentTarget[16].innerHTML === 'q' || arrCurrentTarget[16].innerHTML === 'й') && !arrCurrentTarget[30].classList.contains('pressed') && event.type === "keydown") {
        shiftPressed(arrCurrentTarget, shiftKeys);
        // event.repeat = 'false'
    } else if(phisicalKey === 'Shift' && event.type === 'keyup') {
        shiftUnpressed(arrCurrentTarget, shiftKeys);
    } else if(event.target.classList.contains('withTwoValue')) {
        input.value = input.value + event.target.innerHTML;
    } else if(event.target.classList.contains('space')) {
        input.value = input.value + event.target.innerHTML;
    } else if (event.target.classList.contains('tab')) {
        input.value = input.value + space.innerHTML.repeat(3);
    } else if (event.target.classList.contains('backspace')) {
        input.value = input.value.slice(0, -1);
    } else if (phisicalKey === 'Backspace' && event.type === 'keydown') {
        input.value = input.value.slice(0, -1);
        backspaceKey.classList.add('pressed');
    } else if (phisicalKey === 'Backspace' && event.type === 'keyup') {
       backspaceKey.classList.remove('pressed');
    } else if(arrDigitals.includes(phisicalKey) && event.type === 'keydown'){
       input.value = input.value + phisicalKey;
       addActive(arrCurrentTargetDigital, phisicalKey, arrDigitals)
    } else if(arrDigitals.includes(phisicalKey) && event.type === 'keyup') {
        removeActive(arrCurrentTargetDigital, phisicalKey, arrDigitals);
    } else if (event.target.classList.contains('arrow'))  {
        input.value = input.value + event.target.innerHTML
    } else if (((phisicalKey === 'ArrowUp' || phisicalKey === 'ArrowDown' || phisicalKey === 'ArrowLeft' || phisicalKey === 'ArrowRight') && event.type === 'keydown')) {
        if(phisicalKey === 'ArrowUp') {
            input.value = input.value + '▲'; 
            arrowUpKey.classList.add('pressed');
        } else if(phisicalKey === 'ArrowDown') {
            input.value = input.value + '▼';
            arrowDownKey.classList.add('pressed');
        } else if(phisicalKey === 'ArrowLeft') {
            input.value = input.value + '◀';
            arrowLeftKey.classList.add('pressed')
        } else if(phisicalKey === 'ArrowRight') {
            input.value = input.value + '▶';
            arrowRightKey.classList.add('pressed');
        }
    } else if ((phisicalKey === 'ArrowUp' || phisicalKey === 'ArrowDown' || phisicalKey === 'ArrowLeft' || phisicalKey === 'ArrowRight') && event.type === 'keyup') {
        if (phisicalKey === 'ArrowUp') {
            arrowUpKey.classList.remove('pressed');
        } else if(phisicalKey === 'ArrowDown') {
            arrowDownKey.classList.remove('pressed');
        } else if(phisicalKey === 'ArrowLeft') {
            arrowLeftKey.classList.remove('pressed')
        } else if(phisicalKey === 'ArrowRight') {
            arrowRightKey.classList.remove('pressed');
        }
    } else if(event.code === 'Space' && event.type === 'keydown') {
        input.value = input.value + ' ';
        space.classList.add('pressed');
    } else if(event.code === 'Space' && event.type === 'keyup'){
        space.classList.remove('pressed');
    } else if(phisicalKey === 'Tab' && event.type === 'keydown') {
        // event.preventDefault();
        input.value = input.value + space.innerHTML.repeat(3);
        tabKey.classList.add('pressed');
    } else if(phisicalKey === 'Tab' && event.type === 'keyup') {
        tabKey.classList.remove('pressed');
    } else if ((event.target.classList.contains('ctrl') || (phisicalKey === 'Control' && event.type === 'keydown')) && !event.target.classList.contains('pressed')) {
        ctrlKeys.forEach(el => el.classList.add('pressed'));
    } else if ((event.target.classList.contains('alt') || (phisicalKey === 'Alt' && event.type === 'keydown'))&& !event.target.classList.contains('pressed')) {
        altKeys.forEach(el => el.classList.add('pressed'));
    } else if ((event.target.classList.contains('ctrl') || (phisicalKey === 'Control' && event.type === 'keyup')) && !document.querySelector('.alt').classList.contains('pressed')) {
        ctrlKeys.forEach(el => el.classList.remove('pressed'));
    } else if ((event.target.classList.contains('alt') || (phisicalKey === 'Alt' && event.type === 'keyup')) && !document.querySelector('.ctrl').classList.contains('pressed')) {
        altKeys.forEach(el => el.classList.remove('pressed'));
    } else if ((event.target.classList.contains('ctrl') || (phisicalKey === 'Control' && event.type === 'keyup')) && document.querySelector('.alt').classList.contains('pressed')) {
        ctrlKeys.forEach(el => el.classList.remove('pressed'));
        altKeys.forEach(el => el.classList.remove('pressed'));
        changeLanguage();
    } else if ((event.target.classList.contains('alt') || (phisicalKey === 'Alt' && event.type === 'keyup')) && document.querySelector('.ctrl').classList.contains('pressed')) {
        ctrlKeys.forEach(el => el.classList.remove('pressed'));
        altKeys.forEach(el => el.classList.remove('pressed'));
        changeLanguage(arrCurrentTarget);
    } else if (event.target.classList.contains('enter')) {
        input.value = input.value + '\n';
    } else if (phisicalKey === 'Enter' && event.type === 'keydown') {
        input.value = input.value + '\n';
        enterKey.classList.add('pressed');
    } else if (phisicalKey === 'Enter' && event.type === 'keyup') {
       enterKey.classList.remove('pressed');
    }
}