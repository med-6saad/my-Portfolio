const toBlackMode=()=>{
    return {
        type:'ACT',
        payload:true
    }
}
const toWhiteMode=()=>{
    return {
        type:'DSC',
        payload:false
    }
}
export {toBlackMode,toWhiteMode};