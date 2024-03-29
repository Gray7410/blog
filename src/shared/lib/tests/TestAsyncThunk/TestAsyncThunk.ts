import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios, { AxiosStatic } from 'axios';

type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) =>
    AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

export const TestAsyncThunk = <Return, Arg, RejectedValue>(
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
    state?: DeepPartial<StateSchema>,
) => {
    const mockedAxios = jest.mocked(axios, true);
    const api : jest.MockedFunctionDeep<AxiosStatic> = mockedAxios;
    const navigate : jest.MockedFn<any> = jest.fn();
    const dispatch: jest.MockedFn<any> = jest.fn();
    const getState: () => StateSchema = jest.fn(() => state as StateSchema);

    const callThunk = async (arg: Arg) => {
        const action = actionCreator(arg);
        const result = await action(dispatch, getState, { api, navigate });
        return result;
    };

    return {
        dispatch,
        getState,
        actionCreator,
        callThunk,
        api,
    };
};
