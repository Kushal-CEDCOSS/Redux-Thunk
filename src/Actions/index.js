export const fetchData = () => {
    return (dispatch)=>{
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10`).then(data => data.json()).then(result => dispatch({type: 'Fetch_Data', payload: result}));
    }
}