(function () {
  const coypDom = document.querySelector(".copywriteColor");
  const pcikDom = document.querySelector(".nfColorPickBox");
  const nfColorPick = document.getElementById("nfColorPick");
  const resetDom = document.querySelector(".reset");
  const confirmDom = document.querySelector(".confirm");
  const backgroundDom = document.getElementById(
    "relate_special_article_jump_color"
  );
  const backgroundText = document.getElementById(
    "relate_special_article_jump_color_text"
  );
  let defaultValue = "#3983E8";
  // 默认hsv值
  const defaultHSV = {
    h: 360,
    s: 1,
    v: 1,
    a: 1,
  };
  if (!$('#relate_special_article_jump_color').val()) {
    backgroundText.style.backgroundColor = defaultValue;
    $('#relate_special_article_jump_color').attr('value', defaultValue);
  }
  coypDom.addEventListener("click", function () {
    pcikDom.style.display = "block";
    document.getElementById("colorInput").innerText = backgroundDom.val
      ? backgroundDom.val
      : defaultValue;
  });
  resetDom.addEventListener("click", function () {
    let colorVal = backgroundText.getAttribute("data-color")
      ? backgroundText.getAttribute("data-color")
      : defaultValue;
    document.getElementById("colorInput").innerText = colorVal;
    backgroundText.style.backgroundColor = colorVal;
    $('#relate_special_article_jump_color').attr('value', colorVal);
  });
  confirmDom.addEventListener("click", function () {
    pcikDom.style.display = "none";
  });
  const instance = new MoColorPicker(nfColorPick, {
    value: defaultValue,
    change(color, colors) {
      run(this, colors);
    },
  });
  function run(instance, colors) {
    const color = instance.getValue("hex");
    document.getElementById("colorInput").innerText = color;
    backgroundText.style.backgroundColor = color;
    $('#relate_special_article_jump_color').attr('value', color);
  }
})();
