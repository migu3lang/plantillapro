
export const loginType = "login";
export const logOutType = "logOut";

export const login = (tokenParam) => ({
    type: loginType,
    token: tokenParam
});

export const logOut = () => ({
    type: logOutType
});