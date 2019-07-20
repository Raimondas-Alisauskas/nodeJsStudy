const hello = (delay) =>{
    setTimeout(() =>{
        console.log('hello')
        hello(delay + 1000);
    }, delay)
}

hello(1000);
