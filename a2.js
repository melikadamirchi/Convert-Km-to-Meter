document.querySelector("#btn").addEventListener('submit', func);

function func(e) {
    e.preventDefault();

    const txt = parseFloat(document.querySelector("#txt").value);
    const content = document.querySelector("#content");
    if (txt) {
        const conv = (txt * 1000).toFixed(2);

        content.innerHTML = `${txt} km is equal to ${conv}`;

    } else {
        content.innerHTML = "enter number"
    }

}