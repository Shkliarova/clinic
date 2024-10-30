const team = [
    {
        name: "Грушанський Олександр Володимирович",
        position: "лікар-кардіолог",
        href: ""
    },
    {
        name: "Грушанська Віолета Вікторівна",
        position: "сімейний лікар, педіатр, консультант з грудного вигодовування",
        href: ""
    },
    {
        name: "Козлов Михайло Степанович",
        position: "сімейний лікар",
        href: ""
    },
    {
        name: "Єрохіна Аліна Андріївна",
        position: "майстер масажу",
        href: ""
    },
    {
        name: "Ельнікова Діана Олександрівна",
        position: "медсестра загальної практики",
        href: ""
    },
    {
        name: "Левицька Катерина Іванівна",
        position: "медсестра загальної практики",
        href: ""
    },
]

const teamCard = document.querySelector(".team-list");


// ПОФІКСИТИ РЕНДЕР СОЦ ІКОНОК
const teamMarkup = team.map(elem => {
    return `
    <li class="team-item">
        <img src="" alt="Team member" width="264"/>
        <div class="team-item-text">
            <h3 class="text-title">${elem.name}</h3>
            <p class="simple-text">${elem.position}</p>
            <ul class="list soc-icon-list"></ul>
        </div>
    </li>`
}).join("");

teamCard.innerHTML = teamMarkup;