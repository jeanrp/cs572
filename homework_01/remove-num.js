(function () {
    Array.prototype.removeNum = async function (num) {
        try {
            let result = await removeNumPromise(this, num);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    function removeNumPromise(arr, num) {
        return new Promise((resolve, reject) => {
            if (arr.includes(num)) {
                let newArr = arr.filter(function (item) {
                    return item !== num
                });
                resolve(newArr);
            } else {
                reject("It doesn't contain the number inside of the array");
            }
        });
    }


    console.log("Start");
    [1, 2, 3, 4, 5].removeNum(3);
    console.log("Finish");


})();






