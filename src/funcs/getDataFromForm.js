
export const getDataFromForm = () => {
    let obj = {};
    const form = document.getElementById('myForm');
    const formData = new FormData(form);

    for (const [key, value] of formData) {
        obj[key] = `${value}`
    }
    // obj['keywords'] = [obj['category'], obj['city'], obj['country']]
    // obj['userId'] = `${JSON.parse(window.localStorage.getItem('user-id')).id}`
    return obj
}