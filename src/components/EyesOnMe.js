// Code EyesOnMe Component Here

function EyesOnMe() {

function forFocus(){
    console.log('Good!')
}
function forBlur(){
    console.log('Hey! Eyes on me!')
}
 return (
    <button onFocus={forFocus} onBlur={forBlur}>Eyes on me</button>
 )
    
}

export default EyesOnMe;

