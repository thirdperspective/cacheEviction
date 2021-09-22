const LRUCache = require("./src/LRUCache");
const MRUCache = require("./src/MRUCache.js");
const prompt = require('prompt-sync')();

var cache = new LRUCache(5);

const strategy = prompt('please enter the cache eviction strategy?(LRU/MRU)');

var cacheSize = prompt('please enter the cachesize?(ex: 5)');
if(isNaN(cacheSize)){
    cacheSize = prompt('please enter numeric value for cachesize?(ex: 5)');
}
if(strategy === "LRU"){
    cache = new LRUCache(cacheSize);
}else if (strategy === "MRU"){
    cache = new MRUCache(cacheSize);
}
var option = prompt('please choose one of the following options\n1.Insert\n2.Get\n3.StateOfCache\nEnter corresponding option number(ex: 2):');
while(true){
    switch(option){
        case '1':
            var key = prompt('please enter the cache key: ');
            var value = prompt('please enter the cache value: ');
            var insertedCache = cache.insert(key,value);
            console.log("The value inserted!")
            break;
        case '2':
            var key = prompt('please enter the cache key: ');
            console.log("the vlaue of key is :" + cache.get(key));
            break;
        case '3':
            console.log("The state of cache is:")
            console.log(cache.stateOfCache());
            break;
    }

    var end = prompt('Do you wanna continue?(Y/N)');
    if(end == "Y" || end == "y"){
        option = prompt('please choose one of the following options\n1.Insert\n2.Get\n3.StateOfCache\nEnter corresponding option number(ex: 2):');
    }
    else{
        break;
    }
    
}