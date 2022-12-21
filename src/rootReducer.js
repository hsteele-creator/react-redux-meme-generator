const INTIAL_STATE = []

const rootReducer = (state=INTIAL_STATE, action) => {
    switch(action.type) {
        case("ADD_MEME"):
            console.log("add");
            return [
                ...state,
                {image: action.payload.image, 
                top: action.payload.top,
                bottom: action.payload.bottom}
            ]
        case("REMOVE_MEME"):
            return state.filter((m, i ) => i != action.payload.index)
        default:
            return state
    }


}

export default rootReducer