// Code Keypad Component Here
function Keypad() {
    function keyboardChange(){
        console.log('Entering password...')
    }

return (
    <input type="password" onChange={keyboardChange}/>
    )
}

export default Keypad;