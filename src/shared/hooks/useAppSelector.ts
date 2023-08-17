import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState } from '@/app/providers/config/store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppSelector };
