import Fetch from "../helpers/Fetch.js"

export default {
    add : async (title) => {
        const options = {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify({title})
        }

        return await Fetch(import.meta.env.VITE_ADD, options);
    },

    getAll : async () => {
        const options = {
            method : "GET",
        }

        return await Fetch(import.meta.env.VITE_GET_ALL,options);
    },

    update : async (id, title) => {
        const options = {
            method : "PUT",
            headers: {"Content-Type": "application/json"},
            body : JSON.stringify({title})
        }

        return await Fetch(import.meta.env.VITE_UPDATE + `/${id}`, options);
    },

    delete : async (id) => {
        const options = {
            method : "DELETE",
            headers: {"Content-Type": "application/json"}
        }

        return await Fetch(import.meta.env.VITE_DELETE + `/${id}`, options);
    },

    finishTask : async (id) => {
        const options = {
            method : "PUT",
            headers: {"Content-Type": "application/json"}
        }

        return await Fetch(import.meta.env.VITE_FINSIH + `/${id}`, options);
    }
}