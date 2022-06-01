import { writable } from "svelte/store";

export let ModalStore = Modal(null)
export let UserStore = Model('User')
export let TaskStore = Model('Task')
export let SubtaskStore = Model('Subtask')

export let TasksStore = Collection('Tasks')
export let SubtasksStore = Collection('Subtasks')

function Collection(name, state = []) {

    const {subscribe, update, set} = writable(state)

    function append(data) {
        return update(elements => {
            elements.unshift(data)
            return elements
        })
    }

    function replace(data) {
        return update(elements => {
            return elements.map(element => element._id === data._id ? data : element)
        })
    }

    function remove(dataId) {
        return update(elements => {
            return elements.filter(item => item._id != dataId)
        })
    }

    return {
        set,
        remove,
        append,
        update,
        replace,
        subscribe,
    }
}

function Model(name, state = null) {

    const {subscribe, update, set} = writable(state)

    function modalCreate(data = null) {
        ModalStore.set(`${ name }Create`)
        if(data) set(data)
    }

    function modalRead(data = null) {
        ModalStore.set(`${ name }Read`)
        if(data) set(data)
    }

    function modalUpdate(data = null) {
        ModalStore.set(`${ name }Update`)
        if(data) set(data)

        console.log(`${ name }Update`, data)
    }

    function modalDelete(data = null) {
        ModalStore.set(`${ name }Delete`)
        if(data) set(data)
    }

    function modalOpen(modalName, data = null) {
        ModalStore(`${ name }${ modalName }`)
        if(date) set(data)
    }

    function modalClose() {
        ModalStore.close()
        set(null)
    }

    return {
        set,
        update,
        subscribe,
        modalRead,
        modalOpen,
        modalClose,
        modalCreate,
        modalUpdate,
        modalDelete
    }
}

function Modal(state = null) {

    const {subscribe, update, set} = writable(state)

    function close() {
        set(null)
    }

    function open(action) {
        set(action)
        console.log(action)
    }

    return {
        set,
        open,
        close,
        update,
        subscribe
    }
}
