function creatureTableTemplate(
  name,
  image,
  link,
  MovementSpeed,
  price,
  Shadow  
) {
    let template = '';
    let infoIcon = `<img src="https://img.icons8.com/flat_round/24/000000/info.png"/>`;
  
    template = `<tr><td><b> ${name} </b><br /><img src="${image}" class="img-responsive">
          <br /><a href="https://animalcrossing.fandom.com/wiki/${link}" target="_blank" class="btn btn-info my-1" role="button">
          Wiki ${infoIcon}</a><hr /><b>Speed:</b><br /> ${MovementSpeed}</td><td> ${price} </td><td> ${Shadow} </td></tr>`;
  
    return template;
}
