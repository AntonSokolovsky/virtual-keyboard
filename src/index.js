import { createArea } from './createArea';
import './style.css';
import { arrSymbolKeysEn, arrSymbolKeysEnUp, arrSymbolKeysRu, arrSymbolKeysRuUp } from './arrSymbols';
import { createAllKeys } from './createAllKeys';
import { action } from './action';
// import { removeActive, shiftPressed, shiftUnpressed, capsPressed, capsUnpressed } from './modifierDigitalsFunctions';
createArea();
createAllKeys(arrSymbolKeysEn);

document.querySelector('.keyboard').addEventListener('click', action);
document.addEventListener('keydown', action);
document.addEventListener('keyup', action);