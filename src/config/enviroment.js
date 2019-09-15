export const env = () => {
    const data = 'dev';
    switch (data) {
        case 'prod':
            return "https://backendapollotest.herokuapp.com/"
        case 'hml':
            return "https://backendapollotest.herokuapp.com/"
        case 'dev':
            return "https://backendapollotest.herokuapp.com/"
        case 'docker':
            return "http://backend:4000"
        default:
            return "https://backendapollotest.herokuapp.com/"
    }
}