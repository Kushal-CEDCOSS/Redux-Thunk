const initialState = {
    data: [],
}

export const fetchReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'Fetch_Data' :
            return {...state, data: action.payload}
        default : return state
    }
}