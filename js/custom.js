document.querySelectorAll(".tabs-trigers__item").forEach((item) =>
    item.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(e.target)
        const id = e.target.getAttribute("href").replace("#", "");

        document
            .querySelectorAll(".tabs-trigers__item")
            .forEach((child) => child.classList.remove("tabs-trigers__item--active"));

        document
            .querySelectorAll(".tabs-content__item")
            .forEach((child) => child.classList.remove("tabs-content__item--active"));

        item.classList.add("tabs-trigers__item--active");
        document.getElementById(id).classList.add("tabs-content__item--active");
    })
);

document.querySelector(".tabs-trigers__item").click();
