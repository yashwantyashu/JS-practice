/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const map = new Map();

    for(const obj of arr1){
        map.set(obj.id, obj);
    }

    for(const obj of arr2){
        if(map.has(obj.id)){
            const merged = {...map.get(obj.id), ...obj};
            map.set(obj.id,merged);
        }else{
            map.set(obj.id,obj);
        }
    }

    return Array.from(map.values()).sort((a,b)=>a.id-b.id);
}

console.log(join([
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
], [
    {"id": 3, "x": 5}
]))

console.log(join( [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6}
],[
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
] ))