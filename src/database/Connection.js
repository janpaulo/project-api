
const mysql = require('mysql')

const dbConfig= {
    host: '127.0.0.1',
    port: "3000",
    user: 'root',
    password: '',
    database: "nodejs-mysql"
}

const db = mysql.createConnection(dbConfig)


module.exports = (query) => {
    return new Promise((reject, resolve) => {

        db.connect(err => {
            if(err) {
                reject(err)
            }else{
                db.query(query, (err, result) => {
                    if (err) {
                        reject(err)
                    }else{
                        resolve(result)
                    }
                })
            }
        })
    })
}