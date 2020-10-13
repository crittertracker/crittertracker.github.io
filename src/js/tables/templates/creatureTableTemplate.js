function creatureTableTemplate(
  name,
  image,
  link,
  spawnRate,
  price
) {
    let template = '';
    let infoIcon = `<img src="https://img.icons8.com/flat_round/24/000000/info.png"/>`;
  
    template = `<tr><td><b> ${name} </b><br /><img src="${image}" class="img-fluid" alt="responsive image">
          <br /><a href="https://animalcrossing.fandom.com/wiki/${link}" target="_blank" class="btn btn-info my-1" role="button">
          Wiki ${infoIcon}</a><hr /><i>Spawn Rate:</i><b> ${spawnRate} </b></td><td> ${price} </td></tr>`;
  
    return template;
}