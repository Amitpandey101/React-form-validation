import React from "react";
import { useState } from "react";

const Form = () => {
    const [nameerr, setnameerr] = useState(false);
    const [emailerr, setemailerr] = useState(false);
    const [gendererr, setgendererr] = useState(false);
    const [numbererr, setnumbererr] = useState(false);
    const [passworderr, setpassworderr] = useState(false);
    const [mandatoryerr, setmandatoryerr] = useState(false);
    const [numberlengtherr, setnumberlengtherr] = useState(false)
    const [show, setShow] = useState(true)
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        gender: "",
        number: "",
        password: "",
    });
    console.log(userData);

    const handleSubmit = () => {
        if (
            userData.username === "" ||
            userData.email === "" ||
            userData.number === "" ||
            userData.password === ""
        ) {
            setmandatoryerr(true);
        }
        const format = /[!@#$%^&*0-9()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if (format.test(userData.username)) {
            setnameerr(true);
        }

        if (userData.email && !userData.email.includes("@")) {
            setemailerr(true);
        }
        if (userData.gender === "") {
            setgendererr(true);
        }
        if (userData.password.length < 6) {
            setpassworderr(true);
        }

        if (!userData.number) {
            setnumbererr(true)
        }
        let mynumber = "" + userData.number
        if (mynumber.length !== 10) {

            setnumberlengtherr(true)
        }
        else {

            setShow(!show)

        }

    };
    return (
        <>
            <nav class="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        myForm
                    </a>
                </div>
            </nav>

            {!show && <div class="card">

                <div class="card-body">
                    <h5 class="card-title">Welcome {userData.username}</h5>
                    <p class="card-text">Form validation is successfull</p>
                    <a href="/#" class="btn btn-primary" onClick={() => [setShow(!show), setUserData({
                        username: "",
                        email: "",
                        gender: "",
                        number: "",
                        password: ""

                    })]}>Go to form page</a>
                </div>
            </div>}





            {show && <div className="container sm" style={{ width: "500px", height: "400px" }}>
                <h1>Form Validation</h1>
                {mandatoryerr && (
                    <p style={{ color: "red" }}> All fields are mandatory !</p>
                )}
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        onChange={(e) => [
                            setUserData({ ...userData, username: e.target.value }),
                            setmandatoryerr(false),
                            setnameerr(false),
                        ]}
                    />
                    {nameerr && (
                        <p style={{ color: "red" }}>
                            {" "}
                            alphanumeric characters are not allowed in username!
                        </p>
                    )}
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        class="form-control"
                        onChange={(e) => [
                            setUserData({ ...userData, email: e.target.value }),
                            setmandatoryerr(false),
                            setemailerr(false),
                        ]}
                    />
                    {emailerr && <p style={{ color: "red" }}>email must contain @ !</p>}
                </div>
                <select
                    class="form-select"
                    aria-label="Default select example"
                    onChange={(e) => [
                        setUserData({ ...userData, gender: e.target.value }),
                        setmandatoryerr(false),
                        setgendererr(false),
                    ]}
                >
                    <option selected>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                </select>
                {gendererr && (
                    <p style={{ color: "red" }}>
                        {" "}
                        Please identify as male, female or others !
                    </p>
                )}
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        onChange={(e) => [
                            setUserData({ ...userData, number: parseInt(e.target.value) }),
                            setmandatoryerr(false),
                            setnumbererr(false),
                            setnumberlengtherr(false)
                        ]}
                    />
                    {numbererr && <p style={{ color: "red" }}>Please Enter a valid number!</p>}
                    {numberlengtherr && <p style={{ color: "red" }}>number length should be of 10 digits !</p>}
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        class="form-control"
                        onChange={(e) => [
                            setUserData({ ...userData, password: e.target.value }),
                            setmandatoryerr(false),
                            setpassworderr(false),
                        ]}
                    />
                    {passworderr && (
                        <p style={{ color: "red" }}> Password must be 6 character long !</p>
                    )}
                </div>
                <button type="button" onClick={handleSubmit} class="btn btn-info">
                    Submit
                </button>
            </div>}
        </>
    );
};

export default Form;
