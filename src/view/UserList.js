const m = require('mithril');
const User = require('../models/User');

module.exports = {
    // This means that when the component initializes, User.loadList will be called, triggering an XHR request.
    oninit: User.loadList,
    view: () => {
        //'.user-list' is CSS selector
        return m('.user-list', User.list.map((user) => {
            return m('.user-list-item', `${user.firstName} ${user.lastName}`)
        }))
    }
};