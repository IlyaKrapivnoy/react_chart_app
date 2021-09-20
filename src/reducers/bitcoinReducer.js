const initialState = {
    loading: false,
};

const bitcoinReducer = (state = initialState, action) => {
    const { type, payload } = action;

    return state;
};

export default bitcoinReducer;
