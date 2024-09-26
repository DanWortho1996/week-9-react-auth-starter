export const signupFetch = async (username, email, password) => {
    try {
        const response = await fetch("http://localhost:5003/users/signup", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
        });
        const data = await response.json()
        console.log("data in signupFetch: ", data);
        return data;
    } catch (error) {
        console.log(error);
        alert("There is an error. Please check that your console.")
    }
};