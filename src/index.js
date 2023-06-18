const express = require('express')
const patientRouters = require('./routes/patient')
const cors = require('cors')

const app = express();
const PORT = 5000;

app.use(cors(
    {
        origin: '*'
    }
))
app.use('/odoo_rest/patients', patientRouters)

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT} ....`)
})
