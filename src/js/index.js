let host = "https://api-iem.herokuapp.com/"

var checkEntry = false

function testEntry(entry) {
    const regex = /^[IVXLCDM]+$/
    if (entry.match(regex)) {
        checkEntry = true
        fetch(host + "api/number", {
            method: "POST",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify({ data: entry }),
        })
            .then((response) => response.json())
            .then((json) => {
                let result = json.data
                let displayResult = document.getElementById("result")
                displayResult.textContent = result
            })
            .catch((error) => error)
    } else {
        checkEntry = false
        let message =
            "Veuillez entrer un nombre correct en chiffre romain, MAJUSCULES"
        let displayResult = document.getElementById("result")
        displayResult.textContent = message
        return checkEntry
    }
}

async function main(e) {
    e.preventDefault()
    let entry = document.getElementById("entry").value
    await testEntry(entry)
}
