(function () {
    const URL = 'https://randomuser.me/api/';
    const { Observable } = rxjs;
    const { map, filter } = rxjs.operators;

    window.onload = function () {
        let fetchElement = document.getElementById('fetch');
        let asyncElement = document.getElementById('async');
        let observableElement = document.getElementById('observable');

        fetchElement.onclick = fetchOnClick;
        asyncElement.onclick = asyncOnClick;
        observableElement.onclick = observableOnClick;
    }

    function fetchOnClick() {
        fetch(URL).then(response => response.json()).then(data => {
            printArr(data.results);
        }).catch(error => console.log(error));
    }

    function populateResult(str) {
        let result = document.getElementById('result');
        result.innerHTML = str;
    }

    function arrayToString(arr) {
        let res = "";

        arr.forEach((v, i) => {
            res += v + "\n";
        });

        return res;
    }

    async function asyncOnClick() {
        try {
            let result = await getData(); 
            printArr(JSON.parse(result).results);
        } catch (error) {
            console.log(error);
        }
    }

    function printArr(result) {
        var arr = formatResults(result);

        let str = arrayToString(arr);

        populateResult(str);
    }

    function formatResults(result) {
        var arr = result.map((v, i) => {
            return `<br /> <strong>Name:</strong> ${v.name.title +` ` + v.name.first + ` ` + v.name.last} <br /><br /> <strong>Location</strong> <br /> <strong>Street:</strong> ${v.location.street},<br /><strong> City:</strong> ${v.location.city}, <br /><strong> State:</strong> ${v.location.state}`;
        });

        return arr;
    }

    function observableOnClick() {
        const obs$ = Observable.create((observer) => {
            fetch(URL)
                .then(response => response.json())
                .then(data => {
                    observer.next(data);
                    observer.complete();
                })
        });

        obs$.pipe(
            map((v, i) => {
                var arr = formatResults(v.results);
                return {
                    response: arr
                };
            })
        ).subscribe(
            x => {
                let str = arrayToString(x.response);
                populateResult(str);
            },
            err => console.log(err)
        );
    }

    function getData() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", URL);
            xhr.onload = () => resolve(xhr.responseText);
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        });
    }
    
})();
