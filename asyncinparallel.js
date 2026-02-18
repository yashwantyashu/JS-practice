/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {

    return new Promise((resolve, reject)=>{
        const results = new Array(functions.length); //results which is a function length
        let completed = 0; //counter 

        functions.forEach((fn,index)=>{
            fn().then(value =>{
                results[index] = value; //store the resolved values in the results index sequentially
                completed++;

                if(completed === functions.length){
                    resolve(results) //if completed incremented to the number of times the functions length resolve to results
                }
            }).catch(error=>{
                reject(error);  // error here will reject the outer promise
            })
        })
    })
};

const promise = promiseAll([() => { throw new Error("Boom") }])
const promise2 = promiseAll([() => new Promise(resolve => setTimeout(() => resolve(4), 50)), () => new Promise(resolve => setTimeout(() => resolve(10), 150)), () => new Promise(resolve => setTimeout(() => resolve(16), 100))])
promise.then(console.log); // [42]
promise2.then(console.log); //{"t":149,"resolved":[4,10,16]}


//robust version with checks
// functions.forEach((fn, index) => {

//     // Start a promise chain to safely execute fn
//     // Promise.resolve() ensures we enter promise context
//     Promise.resolve()

//         // Execute the function inside .then
//         // If fn throws synchronously, it becomes a rejected promise
//         .then(fn)

//         // Handle successful resolution
//         .then(value => {

//             // Store result at correct index to preserve order
//             results[index] = value;

//             // Increment completed counter
//             completed++;

//             // If all promises have resolved, resolve outer promise
//             if (completed === functions.length) {
//                 resolve(results);
//             }
//         })

//         // If any promise rejects (or fn throws), reject outer promise
//         .catch(error => {
//             reject(error);
//         });

// });
