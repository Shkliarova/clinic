const footerUL = document.querySelector(".footer-soc-list")
const teamUL = document.querySelector(".soc-icon-list")

const SVGLinks = [
    { href: "", icon: "#viber-icon" },
    { href: "tel:+380683134912", icon: "#tel-icon" }
];
const markup = SVGLinks.map(elem => {
    return`
    <li class="soc-icon-item">
        <a class="link footer-link" href="${elem.href}" target="_blank" rel="noreferrer noopener nofollow">
            <svg class="footer-icon" width="36" height="36">
                <use href="../images/icons.svg${elem.icon}"></use>
            </svg>
        </a>
    </li>`
}).join("");

footerUL.innerHTML = markup;
teamUL.innerHTML = markup;