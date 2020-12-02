var startpage = "landing"
var pages = ["landing", "projects", "experience", "bio", "contact"];

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

function goTo(){
    document.getElementById(startpage).addEventListener('keydown', (e) => {
        switch (e.key){
            case "ArrowDown":
                let i = 0;
                let goToPage = startpage;
                for (let page of pages){
                    if (page == startpage){
                        goToPage = pages[i+1];
                        break;
                    }
                    i++;
                }
                document.querySelector(`#${goToPage}`).scrollIntoView(true);
                startpage=goToPage;
        }
    })
}
