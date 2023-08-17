import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/app/providers/config/store';

const useAppDispatch: () => AppDispatch = useDispatch;

export { useAppDispatch };
