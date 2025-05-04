const acc = document.querySelectorAll(".accordion");
acc.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("accordion-active");
        let toogleSymbol = item.querySelector(".toggle-symbol");
        let panel = item.querySelector(".accordion-panel");
        toogleSymbol.textContent = toogleSymbol.textContent === "+" ? "–" : "+";
        panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    });
});
