const g_httpParams = new URLSearchParams(window.location.search);

// ...Just edit all our `<span>`s:
for (let i of ["name", "age"]) {

	document.getElementById(i).innerHTML = g_httpParams.get(i);

}