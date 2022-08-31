const initialState={
    blackMode:false
}
const coloring=(state=initialState,action)=>{
    switch(action.type){
        case 'ACT':return {
            ...state,
            blackMode:true
        };
        case 'DSC':return{
            ...state,
            blackMode:false
        };
        default:return state
    }
}
export default coloring;