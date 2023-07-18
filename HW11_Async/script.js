//Створіть функцію, яка повертає проміс getRandomChinese(length).
async function getRandomChinese(length) {
    let result = '';
    let i = 0;

    while (i < length) {
        const promise = new Promise(resolve => {
            setTimeout(function() {
                const sign = Number(Date.now().toString().slice(-5));
                let res = String.fromCharCode(sign);
                resolve(res);
            }, 50);
        }).then(response => {
            result += response;
            i++;
        });
        await promise;
    }
    return result;
}

getRandomChinese(4).then(r => console.log('getRandomChinese', r));