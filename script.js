let arr = [];

const getFile = (file) => {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', file);
    xhr.send();

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 400) {

            data3 = JSON.parse(xhr.responseText);
            arr = arr.concat(data3.children);
            console.log(arr);

        }

    });
};



getFile('data.json');
getFile('data2.json');