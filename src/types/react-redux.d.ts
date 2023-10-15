import { TypedUseSelectorHook } from 'react-redux';
import { AppDispatchType, RootState } from '@/redux/store';

declare module 'react-redux' {
  export declare const useDispatch: <AppDispatch extends AppDispatchType = AppDispatchType>() => AppDispatch;
  export declare const useSelector: TypedUseSelectorHook<RootState>;
}
