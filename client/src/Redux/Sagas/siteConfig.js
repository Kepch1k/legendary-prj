import cookie from 'cookie';

export function* setThemeSaga(action) {
    try {
        document.cookie = cookie.serialize('theme', String(action.payload), {
            expire: 2147483647,
            maxAge: 60 * 60 * 24 * 365 // 1 year
        });
    } catch (e) {
        console.error(e);
    }
}