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

export const debounce = (func, wait, immediate) => {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
