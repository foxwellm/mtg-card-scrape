(async () => {
  const rarity = "Common";
  // const rarity = "Uncommon";
  // const rarity = "Rare";
  // const rarity = "Mythic+Rare";

  const response = await fetch("https://aetherhub.com/Card/Search", {
    headers: {
      accept: "application/json, text/javascript, */*; q=0.01",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-ch-ua":
        '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
      cookie:
        ".AspNetCore.Antiforgery.RtGCWVXC8-4=CfDJ8NFDIfUfB0BLuAQDCyJzwchhV-I7pm2n9zKqLuSRqxQCyXqIL7yCgjuZ2xLCAV7bMUxOYjYYDTc-v8BlEzPDID9X9Yw0z39zhIL91ZPEeK4qoQHOSlMLL6HOVw9FzSgswjUetjgLt9Cemrna_yJNPkE; ARRAffinity=577fc8b3089dd8bc3185af42126cbc6e84d69f3bf327f00965ce462a5f0f5967; ARRAffinitySameSite=577fc8b3089dd8bc3185af42126cbc6e84d69f3bf327f00965ce462a5f0f5967; __stripe_mid=2cfc8278-dcd2-4a72-8d87-7a1735bded4ff5a14a; __stripe_sid=4e572655-0236-474a-bb9b-de9eab38cc6579b859",
      Referer: `https://aetherhub.com/Card/Search/?name=&format=&color=&conly=false&cop=and&artist=&rarity=Common&text=&set=MKM&stat=cmc&op==&uniq=false&val=&type=`,
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: `name=&type=&text=&set=MKM&format=&rarity=${rarity}&artist=&stat=cmc&op=%3D&val=&color=&conly=false&cop=and&uniq=false`,
    method: "POST",
  });

  const result = await response.json();

  const found = {};

  const filteredCards = result.cards.reduce(
    (acc, { name, img, colorid, cmc }) => {
      if (found[name]) {
        return acc;
      }
      found[name] = true;
      return { ...acc, [name]: { name, img, colorid, cmc, diff: 0 } };
      // return [...acc, { name, img, colorid, cmc, diff: 0 }];
    },
    {}
  );
  console.log("🚀 ~ filteredCards ~ filteredCards:", filteredCards);
})();
