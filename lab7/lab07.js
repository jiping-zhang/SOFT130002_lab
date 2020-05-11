const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

const flexContainer=document.getElementsByClassName("flex-container")[0];

for (let i = 0; i < works.length; i++)
{
    let h4Element=document.createElement("h4");
    let h4Inner="Genre : "+works[i].tips;
    let h4Node=document.createTextNode(h4Inner);
    h4Element.appendChild(h4Node);

    let innerBox1=document.createElement("div");
    innerBox1.setAttribute("class","inner-box");
    let h3Element=document.createElement("h3");
    h3Element.style.display="inline";
    let h3Node=document.createTextNode(works[i].author+" ");
    h3Element.appendChild(h3Node);
    let h5Element=document.createElement("h5");
    h5Element.style.display="inline";
    let h5Node=document.createTextNode("lifetime : "+works[i].lifetime);
    h5Element.appendChild(h5Node);
    innerBox1.appendChild(h3Element);
    innerBox1.appendChild(h5Element);

    let innerBox2=document.createElement("div");
    innerBox2.setAttribute("class","inner-box");
    let h3Element2=document.createElement("h3");
    let h3Node2=document.createTextNode("Popular photos");
    h3Element2.appendChild(h3Node2);
    innerBox2.appendChild(h3Element2);
    let photos=works[i].photos;
    for (let j = 0; j < photos.length; j++)
    {
        let imgElement=document.createElement("img");
        imgElement.setAttribute("class","photo");
        imgElement.setAttribute("src",photos[j]);
        innerBox2.appendChild(imgElement);
    }

    let buttonElement=document.createElement("button");
    let buttonNode=document.createTextNode("visit");
    buttonElement.appendChild(buttonNode);

    let itemElement=document.createElement("div");
    itemElement.setAttribute("class","item");
    itemElement.appendChild(h4Element);
    itemElement.appendChild(innerBox1);
    itemElement.appendChild(innerBox2);
    itemElement.appendChild(buttonElement);

    flexContainer.appendChild(itemElement)
}

/*
for (let i = 0; i < works.length; i++)
{

    let item = document.createElement("div");
    item.setAttribute("class", "item");

    let genre = document.createElement("h3");
    item.appendChild(genre);
    genre.innerHTML = "Genre : " + works[i]["tips"];


    let inner_box1 = document.createElement("div");
    item.appendChild(inner_box1);
    inner_box1.setAttribute("class", "inner-box");

    let author = document.createElement("h3");
    inner_box1.appendChild(author);
    author.innerHTML = works[i]["author"];
    author.style.display = "inline";

    let lifetime = document.createElement("h5");
    inner_box1.appendChild(lifetime);
    lifetime.innerHTML = "lifetime: " + works[i]["lifetime"];
    lifetime.style.display = "inline";
    lifetime.style.marginLeft = "1em";

    let inner_box2 = document.createElement("div");
    item.appendChild(inner_box2);
    inner_box2.setAttribute("class", "inner-box");

    let Popular_photo = document.createElement("h3");
    inner_box2.appendChild(Popular_photo);
    let popular = document.createTextNode("Popular photos");
    Popular_photo.appendChild(popular);

    for (let j = 0, jmax = works[i]["photos"].length; j < jmax; j++)
    {
        let photo = document.createElement("img");
        inner_box2.appendChild(photo);
        photo.setAttribute("class", "photo");
        photo.src = works[i]["photos"][j];
    }

    let button = document.createElement("button");

    flexContainer.appendChild(item);
}*/
