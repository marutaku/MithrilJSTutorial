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
                    User.list= result.data
                })
        }
}
;

module.exports = User;
