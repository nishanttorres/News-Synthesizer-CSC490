export function createConfig(userValue) {

    const dat = {};
    var len = 0;

    userValue.dateValue.forEach(element => {
        dat[len++] = element.format();
    });

    localStorage.setItem('date', JSON.stringify(dat));

    if ((typeof userValue.locationValue) == "string") {
        localStorage.setItem('location', JSON.stringify(userValue.locationValue));
    }
    else {
        const loc = {};
        len = 0;
        // userValue.locationValue.forEach(element => {
        //     loc[len++] = element;
        // });

        localStorage.setItem('location', JSON.stringify(userValue.locationValue));
    }


    if ((typeof userValue.categoryValue) == "string") {
        localStorage.setItem('category', JSON.stringify(userValue.categoryValue));
    }
    else {
        const cat = {};
        len = 0;
        userValue.categoryValue.forEach(element => {
            cat[len++] = element;
        });
        localStorage.setItem('category', JSON.stringify(cat));
    }

}