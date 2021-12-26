const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("UserEmail");
    localStorage.removeItem("location");
    window.location.href = "/";
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    logout,
    getCurrentUser,
};