
export const isUserLoggedIn = () => {
    return localStorage.hasOwnProperty('user');
} 


export const toggleInputFocus = (e, inputRef) => {
    if (e.key === 'Enter' && e.altKey === true) {
        if (document.activeElement === inputRef.current) {
            inputRef.current.blur();
        } else {
            inputRef.current.focus();
        }
    }
}

export const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1, word.length);
}