const m = require('mithril');

const User = {
        list: [],
        loadList: () => {
            return m.request({
                method: 'GET',
                url: "https://rem-rest-api.herokuapp.com/api/users",
                //Using cookie
                withCredentials: true,
            }).then((result) => {
                User.list = result.data
            })
        },
        current: {},
        load: (id) => {
            return m.request({
                method: 'GET',
                url: "https://rem-rest-api.herokuapp.com/api/users/" + id,
                withCredentials: true
            }).then((result) => {
                User.current = result;
            })
        },
        save: () => {
            return m.request({
                method: "PUT",
                url: "https://rem-rest-api.herokuapp.com/api/users/" + User.current.id,
                data: User.current,
                withCredentials: true,
            }).then(_ => alert('Save user!!!'))
        }
    }
;

module.exports = User;
