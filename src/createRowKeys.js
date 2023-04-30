import { addSpecClass } from "./addSpecClass";
export function createRowKeys(rowKey, i) {
    const rowKeys = document.createElement('div');
    document.querySelector('.keyboard').append(rowKeys);
    rowKeys.classList.add('row');
    rowKeys.classList.add(`row-${i}`);
    rowKey.forEach((elKey) => {
        const digital = document.createElement('div');
        rowKeys.append(digital);
        digital.classList.add('key');
        digital.innerHTML = `${elKey}`;
        addSpecClass(digital);
    });  
}