import axios from 'axios'

const baseUrl = 'https://mern-simple-todo-list-backend.onrender.com'

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data ==> ', data)
            setToDo(data)
        })
}

const addToDo = (text, setText, setToDo) => {
    axios
        .post(`${baseUrl}/save`, { text })
        .then((data) => {
            console.log(data);
            setText('')
            getAllToDo(setToDo)
        })

}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    axios
        .patch(`${baseUrl}/update`, { _id: toDoId, text })
        .then((data) => {
            setText('')
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))
}

const deleteToDo = (_id, setToDo) => {
    axios
        .delete(`${baseUrl}/delete`, { _id })
        .then((data) => {
            console.log(data)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))
}

export { getAllToDo, addToDo, updateToDo, deleteToDo }