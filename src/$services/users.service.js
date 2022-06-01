import Superagent from 'superagent';

const conexionError = {
    code: 500,
    key: 'appError',
    message: 'Error en la conexión'
}

export default {
    userLogin,
    userRegister
}

function userLogin(data) {
    return new Promise((resolve, reject) => {

        Superagent
            // .post(`${ __myapp.env.HOST }/user/login`)
            .post(`http://localhost:7777/user/login`)
            .send(data)
            .end((error, resp) => {

                if (error)
                    return resolve(resp ? resp.body : conexionError)

                resolve(resp.body)
            })
    })
}

function userRegister(data) {
    return new Promise((resolve, reject) => {

        Superagent
            .post(`http://localhost:7777/user`)
            .send(data)
            .end((error, resp) => {

                if (error)
                    return resolve(resp ? resp.body : conexionError)

                resolve(resp.body)
            })
    })
}