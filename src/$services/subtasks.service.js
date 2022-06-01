import Superagent from 'superagent';

const conexionError = {
    code: 500,
    key: 'appError',
    message: 'Error en la conexión'
}

export default {
    createSubtask
}

function createSubtask(data) {
    return new Promise((resolve, reject) => {

        const token = localStorage.getItem('token')

        Superagent
            .post('http://localhost:7777/subtask')
            .set('token', token)
            .send(data)
            .end((error, resp) => {

                if (error)
                    return resolve(resp ? resp.body : conexionError)

                resolve(resp.body)
            })
    })
}