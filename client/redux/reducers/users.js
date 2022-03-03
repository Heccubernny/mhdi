// What reducer is all about
export default (users = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload
            break;

        case 'CREATE':
            return [...users, action.payload]
            break;

        case 'UPDATE':
            return users
            break;
    
        default:
            return users;
    }
}


// i join my types here mainhere

