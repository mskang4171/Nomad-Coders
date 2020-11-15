// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const select = document.querySelector(".js-select");

const COUNTRY_LS = "country";

function saveCountry(countryCode){
    countryCode === ""? localStorage.removeItem(COUNTRY_LS) : localStorage.setItem(COUNTRY_LS, countryCode);
}

function handleChange() {
    const value = select.options[select.selectedIndex].value;
    saveCountry(value);
}

function waitForChange() {
    select.addEventListener("change", handleChange);
}

function setSelected(countryCode){
    const option = select.querySelector(`.${countryCode}`);
    option.selected = true;
}

function loadCountry() {
    const currentCountry = localStorage.getItem(COUNTRY_LS);
    if(currentCountry !== null) setSelected(currentCountry);
    waitForChange();
}

function init() {
    loadCountry();
}

init();
