function activate() {
    console.log("Worked")
    var title = document.getElementById('title');
    var wrapper = document.getElementById('wrapper');
    wrapper.style.transition = '1s'
    setTimeout(function(){wrapper.style.opacity = 0;}, 3000)
    setTimeout(function(){title.innerHTML = "Welcome"; sub_title.innerHTML=''}, 4500)
    setTimeout(function(){wrapper.style.opacity = 1;}, 5000)
}

var keyCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
var keyIndex = 0

document.addEventListener('keydown', function(e) {
    var key = e.key
    var requiredKey = keyCode[keyIndex];
    console.log(key)
    console.log(requiredKey);
    console.log(keyIndex);
    if (key === requiredKey) {
        keyIndex++;

        if (keyIndex == keyCode.length){
            activate();
        }
    } else {
        keyIndex=0;
    }
})
