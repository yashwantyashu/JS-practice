/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timerId;
    return function(...args) {
        if(timerId){
            clearTimeout(timerId);
        }
            
        timerId = setTimeout(()=>{
                fn(...args);
        },t)
    console.log(timerId)
    }

};

  const log = debounce(console.log, 900);
  log('Hello1'); // cancelled
  log('Hello2'); // cancelled
 log('Hello3'); // Logged at t=100ms
