function showdesc(imageNumber){
    let photo = document.getElementById(`img${imageNumber}`);
    let description = document.getElementById(`desc${imageNumber}`);
    if (photo && description){
        photo.classList.toggle("hidden");
        description.classList.toggle("hidden");
        description.classList.toggle("desc-align");
    }
}

function showdesc2(imageNumber){
    let photo = document.getElementById(`img${imageNumber}`);
    let description = document.getElementById(`desc${imageNumber}`);
    if (photo && description){
        photo.classList.toggle("hidden");
        photo.classList.toggle("proj-item-wrapper");
        description.classList.toggle("hidden");
        description.classList.toggle("desc-align-projects")
    }
}

function navdesc(iconName){
    let icon = document.getElementById(`icon${iconName}`);
    let iconDesc = document.getElementById(`desc${iconName}`);
    if (icon && iconDesc){
        icon.classList.toggle("hidden");
        iconDesc.classList.toggle("hidden");
    }
}
