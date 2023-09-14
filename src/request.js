const FETCH_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDRmMDUxODY3ZjNjNzUyM2M3MTNmNCIsImlhdCI6MTY5NDM1MjExNSwiZXhwIjoxNjk0OTU2OTE1fQ.zblqGh-0Ae65eepBhot6QHWOTlf6IT6ORq64dk7V2B4";

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
            // setJsondata(json);
            console.log(json);
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

                clientId: "b5813d16-20bc-4e8e-97ad-ff92cc9532c2",
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
    newjSonObject.clientId = "b5813d16-20bc-4e8e-97ad-ff92cc9532c2";
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

// 👇️ named exports
export {
    singIn,
    report,
    authorization,
    getAllCases,
    deleteCaseReq,
    editCaseReq,
};
