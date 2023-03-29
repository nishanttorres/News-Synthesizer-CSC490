export default class APIService{
    static insertFilters(date,location,category){
        return fetch('http://localhost:5000/getArticles', {
            'method': 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({ date, location, category }),
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    static summarize(){
        return fetch('http://localhost:5000/summarize')
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
}