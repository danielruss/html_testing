console.log("hi there");

function getValue(id) {
  let element = document.getElementById(id);
  let x = element.tagName == "INPUT" ? parseInt(element.value) : parseInt(element.innerText);
  return isNaN(x) ? 0 : x;
}

function addup(res, cells) {
  res = document.getElementById(res);
  res.innerText = cells.reduce((acc, x) => (acc = acc + getValue(x)), 0);
}

function topbonus(p) {
  score = getValue(p + "_uts");
  bonus = document.getElementById(p + "_bonus");
  bonus.innerText = score >= 63 ? 35 : "";
}
function valueChanged(event) {
  console.log(event);
  // calculate the total Score...
  addup("p1_uts", ["p1_1", "p1_2", "p1_3", "p1_4", "p1_5", "p1_6"]);
  addup("p2_uts", ["p2_1", "p2_2", "p2_3", "p2_4", "p2_5", "p2_6"]);
  addup("p3_uts", ["p3_1", "p3_2", "p3_3", "p3_4", "p3_5", "p3_6"]);
  addup("p4_uts", ["p4_1", "p4_2", "p4_3", "p4_4", "p4_5", "p4_6"]);

  ["p1", "p2", "p3", "p4"].map(topbonus);

  addup("p1_us", ["p1_uts", "p1_bonus"]);
  addup("p2_us", ["p2_uts", "p2_bonus"]);
  addup("p3_us", ["p3_uts", "p3_bonus"]);
  addup("p4_us", ["p4_uts", "p4_bonus"]);

  addup("p1_lt", ["p1_3oak", "p1_4oak", "p1_fh", "p1_ss", "p1_ls", "p1_ytz", "p1_chance", "p1_yb"]);
  addup("p2_lt", ["p2_3oak", "p2_4oak", "p2_fh", "p2_ss", "p2_ls", "p2_ytz", "p2_chance", "p2_yb"]);
  addup("p3_lt", ["p3_3oak", "p3_4oak", "p3_fh", "p3_ss", "p3_ls", "p3_ytz", "p3_chance", "p3_yb"]);
  addup("p4_lt", ["p4_3oak", "p4_4oak", "p4_fh", "p4_ss", "p4_ls", "p4_ytz", "p4_chance", "p4_yb"]);

  addup("p1_ut", ["p1_us"]);
  addup("p2_ut", ["p2_us"]);
  addup("p3_ut", ["p3_us"]);
  addup("p4_ut", ["p4_us"]);

  addup("p1_gt", ["p1_ut", "p1_lt"]);
  addup("p2_gt", ["p2_ut", "p2_lt"]);
  addup("p3_gt", ["p3_ut", "p3_lt"]);
  addup("p4_gt", ["p4_ut", "p4_lt"]);
}

window.onload = function () {
  inputs = [...document.getElementsByClassName("cellInput")];
  inputs.map((x) => x.addEventListener("change", valueChanged));
};
