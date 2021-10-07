import Cookies from "js-cookie";
import axios from "./axios";

const CONFIG_HEADERS = {
    headers: { "X-Requested-With": "XMLHttpRequest" },
};

class API {

    async loginUser(email, pass, onResult, onError) {
        axios.post("/login", {
            email: email,
            password: pass,
        }, CONFIG_HEADERS)
            .then((result) => onResult(result))
            .catch((error) => {
                console.log(error);
                onError(error);
            });
    }

    authoriseLogin(user, token) {
        Cookies.set('auth', token);
        Cookies.set('user', user);
    }

    async registerUser(user, onResult, onError) {


        console.log(user);
        axios.post("/signup", {

            username: user.username,
            email: user.email,
            password: user.password,
            accountType: user.accountType,
            photoUrl: user.photoUrl,
            discipline: user.discipline,
            studentClass: user.studentClass,
            confirmed: user.confirmed

        }, CONFIG_HEADERS)
            .then((result) => onResult(result))
            .catch((error) => {
                console.log(error);
                onError(error);
            });

    }

}

export default new API();
