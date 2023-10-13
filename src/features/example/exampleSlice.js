import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ex1: 'initial',
  ex2: 1,
  isLoading: false,
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    method1(state, action) {
      state.ex1 += ' method1';
      state.ex2 += action.payload;
      state.isLoading = false;
    },

    method2: {
      prepare(payload1, payload2) {
        return {
          payload: { payload1, payload2 },
        };
      },

      reducer(state, action) {
        state.ex1 += ` method2${action.payload.payload1}`;
        state.ex2 += action.payload.payload2;
      },
    },

    fetching(state) {
      state.isLoading = true;
    },
  },
});

export const { method2, fetching } = exampleSlice.actions;

export function method1(amount, currency) {
  if (currency === 'USD') return { type: 'example/method1', payload: amount };
  console.log(amount, currency);

  return async function (dispatch, getState) {
    dispatch({ type: 'example/fetching' });

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`,
    );
    const data = await res.json();
    const converted = data.rates.USD;

    dispatch({ type: 'example/method1', payload: converted });
  };
}

export default exampleSlice.reducer;
