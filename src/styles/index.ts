import { onDestroy } from 'svelte/internal';
import { writable } from 'svelte/store';

const globalPrefixConfig = writable('o');

export const usePrefix: () => string = () => {
  let $value;
  const unsubscribe = globalPrefixConfig.subscribe(v => {
    $value = v;
  });
  onDestroy(() => {
    unsubscribe();
  });
  return $value;
};
