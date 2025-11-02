const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupDesc = document.getElementById("popupDesc");
const popupLoc = document.getElementById("popupLoc");
const closeBtn = document.getElementById("closeBtn");

const countryInfo = {
  brazil: {
    title: "Бразил",
    desc: "Самба хөгжим, хөлбөмбөг, баяр хөөрөөр дүүрэн соёлтой улс. Хүмүүс баяраар бүжиглэж, хөгжимдөж, амьдралын өнгийг мэдрүүлдэг.",
    loc: "Байрлал: [энд сургуулийн танхимын байршил бичнэ үү]"
  },
  egypt: {
    title: "Египет",
    desc: "Эртний соёл иргэншил, пирамид, урлаг, халуун зочломтгой зан нь Египетийн бахархал юм.",
    loc: "Байрлал: [энд бичнэ үү]"
  },
  qatar: {
    title: "Катар",
    desc: "Катар улс нь орчин үеийн архитектур болон бедуин уламжлалыг хослуулсан өвөрмөц соёлтой.",
    loc: "Байрлал: [энд бичнэ үү]"
  },
  morocco: {
    title: "Марокко",
    desc: "Араб, Бербер, Францын нөлөөтэй соёл. Мозайк урлаг, амттай цайгаар алдартай.",
    loc: "Байрлал: [энд бичнэ үү]"
  },
  slovenia: {
    title: "Словени",
    desc: "Байгаль, урлаг, ардын дуу, бүжгээрээ бахархдаг улс. Хүмүүс байгалиа хамгаалахыг чухалчилдаг.",
    loc: "Байрлал: [энд бичнэ үү]"
  },
  greece: {
    title: "Грек",
    desc: "Домог, философи, уран барилга, баярын бүжгээрээ алдартай.",
    loc: "Байрлал: [энд бичнэ үү]"
  }
};

document.querySelectorAll(".country-card").forEach(card => {
  card.addEventListener("click", () => {
    const data = countryInfo[card.dataset.country];
    popupTitle.textContent = data.title;
    popupDesc.textContent = data.desc;
    popupLoc.textContent = data.loc;
    popup.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
