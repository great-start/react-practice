import urls from "../configs/url";

const getAll = () => {
    return fetch(urls.users)
        .then(response => response.json())
}

const getId = (id) => {
    return fetch(`${urls.users}/` + id)
        .then(response => response.json());
}

export const userService = {
    getAll,
    getId
}

