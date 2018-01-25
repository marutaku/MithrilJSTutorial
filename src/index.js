const m = require('mithril');

const UserList = require('./view/UserList');
const UserForm = require('./view/UserForm');
const Layout = require('./view/Layout');

m.route(document.body, '/list', {
    "/list": {
        render: () => {
            return m(Layout, m(UserList))
        }
    },
    "/edit/:id": {
        render: (vnode) => {
            debugger;
            return m(Layout, m(UserForm, vnode.attrs))
        }
    }
});
//The m.mount call renders the specified component (UserList) into a DOM element (document.body), erasing any DOM that was there previously.
//The interesting thing to pay attention to is how components can be used instead of a selector string in a m() call. Here, in the /list route, we have m(Layout, m(UserList)). This means there's a root vnode that represents an instance of Layout, which has a UserList vnode as its only child.