const initialState = {
    base_url: "http://localhost:5000",
}

export const baseReducer = (state = initialState, action) => {
    switch (action.type) {
        // case "SET_BEARER_TOKEN":
        //     return {
        //         ...state,
        //         bearer_token: action.payload
        //     }

        default:
            return state;

    }
}