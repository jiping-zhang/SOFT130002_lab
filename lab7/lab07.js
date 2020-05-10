const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

const flexContainer=document.getElementsByClassName("flex-container")[0];

for (let i = 0; i < works.length; i++)
{
/*    let h3Element=document.createElement("h3");
    let h3Inner="Genre : "+works[i].tips;
    let h3Node=document.createTextNode(h3Inner);
    h3Element.appendChild(h3Node);

    let innerBox1=document.createElement("div");
    innerBox1.setAttribute("class","inner-box");
    let h4Element=document.createElement("h4");
    let h4Node=document.createTextNode(works[i].author+" ");
    h4Element.appendChild(h4Node);
    let subElement=document.createElement("sub");
    let subNode=document.createTextNode(" lifetime "+works[i].lifetime);
    subElement.appendChild(subNode);
    h4Element.appendChild(subElement);
    innerBox1.appendChild(h4Element);*/

    let h4Element=document.createElement("h4");
    let h4Inner="Genre : "+works[i].tips;
    let h4Node=document.createTextNode(h4Inner);
    h4Element.appendChild(h4Node);

    let innerBox1=document.createElement("div");
    innerBox1.setAttribute("class","inner-box");
    let h3Element=document.createElement("h3");
    let h3Node=document.createTextNode(works[i].author+" ");
    h3Element.appendChild(h3Node);
    let subElement=document.createElement("sub");
    let subNode=document.createTextNode(" lifetime "+works[i].lifetime);
    subElement.appendChild(subNode);
    h3Element.appendChild(subElement);
    innerBox1.appendChild(h3Element);

    let innerBox2=document.createElement("div");
    innerBox2.setAttribute("class","inner-box");
    let h4Element2=document.createElement("h4");
    let h4Node2=document.createTextNode("Popular photos");
    h4Element2.appendChild(h4Node2);
    innerBox2.appendChild(h4Element2);
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