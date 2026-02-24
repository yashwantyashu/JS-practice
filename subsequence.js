function isSubSequence(s1,s2){
    let i=0;
    let j=0;

    while(i < s1.length && j < s2.length){
        if(s1[i] === s2[j]){
            i++
        }
        j++;
    }
    return i === s1.length;
}

console.log(isSubSequence('abc','awert'));

//subsequence is not substring
//two pointers
//gpt explained below
// Two indices

// Moving independently

// Used to avoid nested loops

// Linear time instead of quadratic

// Here:

// i walks through s1

// j walks through s2

// They move at different speeds depending on match

// That’s textbook two-pointer.

//same direction two pointer
