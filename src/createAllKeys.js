import { createRowKeys } from './createRowKeys';

export function createAllKeys(arrSymbolKeys) {
  arrSymbolKeys.map((rowKey, i) => createRowKeys(rowKey, i));
}
