export default class APIService {
    static insertFilters(date, location, category, audioLength) {
        return fetch('http://localhost:5000/getArticles', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ date, location, category, audioLength }),
        })
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    static summarize() {
        return fetch('http://localhost:5000/summarize')
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    static process(){
        return fetch('http://localhost:5000/process')
            .then(response => {
                console.log(response);
                return response;
            })
            .catch(error => console.log(error))
    }
}