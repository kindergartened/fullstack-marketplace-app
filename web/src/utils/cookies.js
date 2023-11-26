let cookie = document.cookie;

export function cookies() {
    return cookie.split("user-session=");
}

export function setCookie(token) {
    document.cookie = "user-session=" + token;
}
