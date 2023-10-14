const fisrtAdress = "adress31@gmail.com";
let FETCH_TOKEN = "";

function singIn(email, password) {
    return fetch("https://sf-final-project-be.herokuapp.com/api/auth/sign_in", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({
            email: email,
            password: password,
        }), // body data type must match "Content-Type" header
    })
        .then(function (u) {
            return u.json();
        })
        .then(function (json) {
            // ТУТ УСТАНАВЛИВАЕМ ЗНАЧЕНИЕ FETCH_TOKEN
            console.log(json);
            if (json.status === 200) {
                FETCH_TOKEN = json.data.token;
            }

            return json;
        });
}

function report(
    ownerFullName,
    licenseNumber,
    type,
    color,
    date,
    description,
    resolution
) {
    return fetch(
        "https://sf-final-project-be.herokuapp.com/api/public/report",
        {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({
                ownerFullName: ownerFullName,
                licenseNumber: licenseNumber,
                type: type,
                color: color,
                date: date,
                description: description,

                clientId: "0718e5e8-fb23-4947-9f4c-9eea84446cc3",
            }), // body data type must match "Content-Type" header
        }
    )
        .then(function (u) {
            return u.json();
        })
        .then(function (json) {
            // setJsondata(json);
            console.log(json.data);
            return json.data;
        });
}

function officersReportReq(
    ownerFullName,
    licenseNumber,
    type,
    color,
    date,
    description,
    officer
) {
    return fetch("https://sf-final-project-be.herokuapp.com/api/cases/", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${FETCH_TOKEN}`,
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({
            ownerFullName: ownerFullName,
            licenseNumber: licenseNumber,
            type: type,
            color: color,
            date: date,
            description: description,
            officer: officer,
        }), // body data type must match "Content-Type" header
    })
        .then(function (u) {
            return u.json();
        })
        .then(function (json) {
            // setJsondata(json);
            console.log(json.data);
            return json.data;
        });
}

function authorization(authToken) {
    return fetch("https://sf-final-project-be.herokuapp.com/api/auth/", {
        method: "GET",

        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${FETCH_TOKEN}`,
        },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            return json;
        });
}

function getAllCases() {
    return fetch("https://sf-final-project-be.herokuapp.com/api/cases/", {
        method: "GET",

        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${FETCH_TOKEN}`,
        },
    }).then((response) => response.json());
}

function deleteCaseReq(caseId) {
    return fetch(
        `https://sf-final-project-be.herokuapp.com/api/cases/${caseId}`,
        {
            method: "DELETE",
            body: JSON.stringify({
                clientId: "0718e5e8-fb23-4947-9f4c-9eea84446cc3",
            }),

            headers: {
                "Content-type": "application/json; charset=UTF-8",

                Authorization: `Bearer ${FETCH_TOKEN}`,
            },
        }
    )
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function editCaseReq(caseId, jSonObject) {
    let newjSonObject = jSonObject;
    newjSonObject.clientId = "0718e5e8-fb23-4947-9f4c-9eea84446cc3";
    return fetch(
        `https://sf-final-project-be.herokuapp.com/api/cases/${caseId}`,
        {
            method: "PUT",

            headers: {
                "Content-type": "application/json; charset=UTF-8",

                Authorization: `Bearer ${FETCH_TOKEN}`,
            },
            body: JSON.stringify(jSonObject),
        }
    )
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function getAllOfficersreq() {
    return fetch(`https://sf-final-project-be.herokuapp.com/api/officers/`, {
        method: "GET",

        headers: {
            "Content-type": "application/json; charset=UTF-8",

            Authorization: `Bearer ${FETCH_TOKEN}`,
        },
    }).then((response) => response.json());
}
function deleteOfficersreq(officersId) {
    return fetch(
        `https://sf-final-project-be.herokuapp.com/api/officers/${officersId}`,
        {
            method: "DELETE",

            headers: {
                "Content-type": "application/json; charset=UTF-8",

                Authorization: `Bearer ${FETCH_TOKEN}`,
            },
        }
    )
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function editOfficerReq(caseId, jSonObject) {
    let newjSonObject = jSonObject;
    newjSonObject.clientId = "0718e5e8-fb23-4947-9f4c-9eea84446cc3";
    return fetch(
        `https://sf-final-project-be.herokuapp.com/api/officers/${caseId}`,
        {
            method: "PUT",

            headers: {
                "Content-type": "application/json; charset=UTF-8",

                Authorization: `Bearer ${FETCH_TOKEN}`,
            },
            body: JSON.stringify(jSonObject),
        }
    )
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function singupReq(firstName, lastName, email, password, clientId) {
    return fetch("https://sf-final-project-be.herokuapp.com/api/auth/sign_up", {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            clientId: clientId,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
// 👇️ named exports
export {
    singIn,
    singupReq,
    report,
    authorization,
    getAllCases,
    deleteCaseReq,
    editCaseReq,
    getAllOfficersreq,
    deleteOfficersreq,
    editOfficerReq,
    officersReportReq,
};
