import Superagent from 'superagent';

const conexionError = {
    code: 500,
    key: 'appError',
    message: 'Error en la conexión'
}

export default {
    getSubtask,
    getSubtasks,
    createSubtask,
    deleteSubtask
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

function getSubtasks(query) {
    return new Promise((resolve, reject) => {

        const token = localStorage.getItem('token')

        Superagent
            .get(`http://localhost:7777/subtasks`)
            .set('token', token)
            .query(query)
            .end((error, resp) => {

                if (error)
                    return resolve(resp ? resp.body : conexionError)

                resolve(resp.body)
            })
    })
}

function getSubtask(query) {
    return new Promise((resolve, reject) => {

        const token = localStorage.getItem('token')

        Superagent
            .get(`http://localhost:7777/subtask`)
            .set('token', token)
            .query(query)
            .end((error, resp) => {

                if (error)
                    return resolve(resp ? resp.body : conexionError)

                resolve(resp.body)
            })
    })
}

function deleteSubtask(subtaskId) {
    return new Promise((resolve, reject) => {

        const token = localStorage.getItem('token')

        Superagent
            .delete(`http://localhost:7777/subtask/${subtaskId}`)
            .set('token', token)
            .end((error, resp) => {

                if (error)
                    return resolve(resp ? resp.body : conexionError)

                resolve(resp.body)
            })
    })
}