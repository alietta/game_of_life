import { State } from '@/rdx/reducer';
import { useSelector } from 'react-redux';

export function useStoreSelector <TResult>(selector: (state: State) => TResult) {
  return useSelector(selector);
}
