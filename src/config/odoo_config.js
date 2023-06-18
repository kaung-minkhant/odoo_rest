const Odoo = require('odoo-xmlrpc')

const local_host = 'http://localhost';
const server_host = 'http://172.18.17.82'

const local_odoo = new Odoo({
    url: local_host,
    port: 8069,
    db: `odoo`,
    username: `admin`,
    password: `admin`
})

const server_odoo = new Odoo({
    url: server_host,
    port: 8069,
    db: `odoo`,
    username: `admin`,
    password: `admin`
})

module.exports = { local_odoo, server_odoo }