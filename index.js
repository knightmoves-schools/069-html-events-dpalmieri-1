function calculateSquare(){
    let value = document.getElementById('number').value;
    let result = document.getElementById('result');

    //add code here
    if(isNaN(value)){
      result.textContent = "Invalid, please enter a number";  
    } else {
      result.textContent = value * value;
    }
    
}
