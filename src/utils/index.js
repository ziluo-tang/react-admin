export default {
    handleLocalStorage: {
        set(key, value, exprid=99999999) {
            let data = {
                value, 
                expirse: Date.now() + exprid
            };
            localStorage.setItem(key, JSON.stringify(data));
        },
        get(key) {
            let value = JSON.parse(localStorage.getItem(key));
            if(value.expirse>=Date.now()){
                const { expirse, ...data } = value;
                return data;
            }else{
                localStorage.removeItem(key);
                return;
            }
        },
        removeItem(key) {
            localStorage.removeItem(key);
        },
        clear() {
            localStorage.clear();
        }
    }
}