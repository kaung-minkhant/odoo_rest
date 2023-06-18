const { Router } = require('express')
const { local_odoo } = require('../config/odoo_config')

const router = Router();

router.get('/search/pagination/:offset?/:limit?',
    (req, res) => {
        console.log(req.params)
        // const { offset, limit } = req.params;
        // local_odoo.connect(function (err) {
        //     if (err) { return console.log(err); }
        //     console.log('Connected to Odoo server.');
        //     let params = [];
        //     params.push([[]]) //[[domain]]
        //     params.push({
        //         'offset': offset,
        //         'limit': limit
        //     })
        //     // params.push({
        //     //     fields: ['name', 'is_child', 'doctor_id'],
        //     //     limit: 2
        //     // })
        //     local_odoo.execute_kw('hospital.patient', 'search',
        //         params, (err, value) => {
        //             if (err) { return console.log(err); }
        //             res.send({
        //                 patient: value
        //             })
        //         }
        //     );
        // });
    }
)

router.get('/search_count',
    (req, res) => {
        local_odoo.connect(function (err) {
            if (err) { return console.log(err); }
            console.log('Connected to Odoo server.');
            let params = [];
            params.push([[]]) //[[domain]]
            // params.push({
            //     fields: ['name', 'is_child', 'doctor_id'],
            //     limit: 2
            // })
            local_odoo.execute_kw('hospital.patient', 'search_count',
                params, (err, value) => {
                    if (err) { return console.log(err); }
                    res.send({
                        patient: value
                    })
                }
            );
        });
    }
)

router.get('/check_access/:access',
    (req, res) => {
        const { access } = req.params
        local_odoo.connect(function (err) {
            if (err) { return console.log(err); }
            console.log('Connected to Odoo server.');
            let params = [];
            params.push([access])
            params.push({ 'raise_exception': false })
            local_odoo.execute_kw('hospital.patient', 'check_access_rights',
                params, (err, value) => {
                    if (err) { return console.log(err); }
                    res.send({
                        access: value
                    })
                }
            );
        });
    }
)

module.exports = router;