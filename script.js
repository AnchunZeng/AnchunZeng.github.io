function checkPasscode() {
    const passcode = document.getElementById('passcode').value;
    const message = document.getElementById('message');
    
    if (passcode === '1018') {
        message.textContent = 'lol'    
    } else if(passcode === '啊！'){
        window.location.href = 's.html';
    } else{
        message.textContent = 'wrong';
    }
}

function showHint() {
    const hint = document.getElementById('hint');
    hint.textContent = 'The passcode is a special date.';
    hint.style.display = 'block';
}