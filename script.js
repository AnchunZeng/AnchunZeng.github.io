let incorrectAttempts = 0;

function checkPasscode() {
    const passcode = document.getElementById('passcode').value;
    const message = document.getElementById('message');
    const wrongContainer = document.getElementById('wrong-container');
    const wrongText = document.getElementById('wrong-text');
    const wrongImage = document.getElementById('wrong-image');
    
    if (passcode === '1018') {
        message.textContent = '猜得好啊！但今天不是纪念日噢，么么';
        message.classList.add('blink-rainbow');    
    }else if(passcode === '鹌鹑蛋！'){
        message.textContent = '这个密码昨天被泄露了，请找旺仔要新密码';
        message.classList.remove('blink-rainbow');
    } 
    else if(passcode === '3103'){
        window.location.href = 'main.html';
    } else{
        incorrectAttempts++;
        message.textContent = '错了';
        message.classList.remove('blink-rainbow');
        
        if (incorrectAttempts >= 3) {
            message.textContent = '错误次数过多！';
            wrongText.textContent = '胖锤好像在他窝里藏了什么';            
            wrongContainer.style.display = 'block';
        }
    }
}

function showHint() {
    const hint = document.getElementById('hint');
    hint.textContent = '4位噢~~';
    hint.style.display = 'block';
}