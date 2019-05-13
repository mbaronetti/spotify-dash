//Helpers
export const getHashParams = () => {
    var hashParams = {}
    var e,
        r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1)
    while ((e = r.exec(q))) {
        hashParams[e[1]] = decodeURIComponent(e[2])
    }
    return hashParams
}

export const redirectToAuth = val => {
    if (val) window.location = 'http://localhost:8888'
}
