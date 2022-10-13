import { fetchData } from "./Actions"

export const mapDispatchToProps = (dispatch) => {
    return{
        fetchingData: () => dispatch(fetchData())
    }
}


export const mapStateToProps = (state) => {
    return {
        ...state,
    }
}