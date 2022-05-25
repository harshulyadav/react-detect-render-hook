const getData = function(args) {
    console.log('get Data called', args);
}

const debounce = function(fn, delay) {
    let element = document.getElementById('name')
    console.log('val', element.value)
    let timer;
    return function () {
        let context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, [element.value])
        }, delay)
    }
}

let fetchData = debounce(getData, 300);