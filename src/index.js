const m = require('mithril');

const UserList = require('./view/UserList');

m.mount(document.body, UserList);
//The m.mount call renders the specified component (UserList) into a DOM element (document.body), erasing any DOM that was there previously.