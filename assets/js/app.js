document.addEventListener("DOMContentLoaded", () => {
  console.log("LawfirmKB 기본 웹 구조 로드 완료");

  const gallery = document.querySelector(".gallery");
  if (!gallery) return;

  const basePath = gallery.dataset.basePath || "assets/img/perpetrator";
  const count = Number(gallery.dataset.count || 10);
  const exts = ["png"];

  for (let i = 1; i <= count; i++) {
    const figure = document.createElement("figure");
    figure.className = "gallery-item";

    const img = document.createElement("img");
    let extIndex = 0;

    const setSrc = () => {
      if (extIndex >= exts.length) {
        figure.remove();
        return;
      }
      const ext = exts[extIndex];
      img.src = `${basePath}/${i}.${ext}`;
    };

    img.alt = `갤러리 이미지 ${i}`;
    img.loading = "lazy";
    img.onerror = () => {
      extIndex += 1;
      setSrc();
    };

    setSrc();

    figure.appendChild(img);
    gallery.appendChild(figure);
  }
});
