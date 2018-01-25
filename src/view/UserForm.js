const m = require('mithril');
const User = require('../models/User')


module.exports = {
    oninit: (vnode) => {User.load(vnode.attrs.id)},
    view: () => {
        return m('form', {
            onsubmit: function (e) {
                e.preventDefault();
                User.save()
            }
        }, [
            m("label.label", "First name"),
            m("input.input[type=text][placeholder=First name]", {
                oninput: m.withAttr("value", (value) => {User.current.firstName = value}),
                value: User.current.firstName
            }),
            m("label.label", "Last name"),
            m("input.input[placeholder=Last name]", {
                oninput: m.withAttr("value", function(value) {User.current.lastName = value}),
                value: User.current.lastName
            }),
            m("button.button[type=submit]", "Save"),
        ])
    }
};