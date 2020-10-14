function fishTableTemplate(
  name,
  image,
  link,
  rarity,
  price,
  location,
  shadow
) {
  let template = '';
  let infoIcon = `<img src="https://img.icons8.com/flat_round/24/000000/info.png"/>`;

  template = `<tr><td><b> ${name} </b><br /><img src="${image}" class="img-fluid" alt="responsive image">
        <br /><a href="https://animalcrossing.fandom.com/wiki/${link}" target="_blank" class="btn btn-info my-1" role="button">
        Wiki ${infoIcon}</a><hr /><b>Rarity:</b><br /> ${rarity} </td><td> ${price} </td><td> ${location} </td>
        <td> ${shadow} </td></tr>`;

  return template;
}
