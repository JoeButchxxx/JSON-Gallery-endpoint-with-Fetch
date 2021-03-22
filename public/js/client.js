const endpoint = '/api/v0/gallery';

fetch(endpoint)
  .then((response) => {

    if (!response.ok) {
      throw new Error('Not 200 ok');
    }
    return response.json();

  })

  .then((gallery) => {
    const gallery = document.querySelector(".gallery");

    for (let i = 0; i <= imageObject.length; i++) {

      //**FIGURE CREATED TO HOUSE IMAGES**

      const imageFigure = document.createElement("figure");
      gallery.appendChild(imageFigure);

      //**H3 ELEMENT CREATED FOR IMAGE TITLE**

      const imageTitle = document.createElement('h3');
      imageTitle.innerText = `${imageObject[i].title}`;
      imageFigure.append(imageTitle);

      //**ANCHOR ELEMENT CREATED FOR ORIGINAL IMAGE LINK**

      const imageLink = document.createElement('a');
      imageLink.href = `${imageObject[i].linkURL}`;
      imageFigure.append(imageLink);

      //**IMG ELEMENT CREATED TO RETREIVE LOCALY HOSTED IMAGE AND CREATE ALT FOR ACCESIBILITY**

      const figLinkImg = document.createElement('img');
      figLinkImg.src = `${imageObject[i].pathURL}`;
      figLinkImg.alt = `${imageObject[i].description}`;
      imageLink.append(figLinkImg);

      //**FIGCAPTION ELEMENT CREATED TO GIVE CREDIT AND LINK TO THEIR PERSONAL ACCOUNT**

      const imageCaption = document.createElement('figcaption');
      imageFigure.append(imageCaption);
      const figureLink = document.createElement('a');
      figureLink.href = `${imageObject[i].creditURL}`;
      figureLink.innerText = `Photographer credit: ${imageObject[i].credit}`;
      imageCaption.append(figureLink);
    };
  })

  .catch((err) => {
    console.log(err);
  });

//**FOR LOOP TO CREATE GALLERY INSIDE index.html DIV**


