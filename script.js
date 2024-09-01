const input = document.getElementsByClassName("form-control")[0];
const wrapContainer = document.getElementsByClassName("wrapContainer")[0];

const addItem = (event) => {
    // creating elements
    const listContainer = document.createElement("div");
    listContainer.classList.add("listContainer");
    const span = document.createElement("span");
    span.classList.add("text");
    //<i class="fa-solid fa-trash"></i>
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-trash");

    //getting value from input
    const inputText = "- " + event.target.value;

    //appending elements
    span.append(inputText);
    listContainer.append(span , icon);
    wrapContainer.append(listContainer);

    //mark as purchased
    span.addEventListener("click", ()=>{
        const isPurchased = span.classList.contains("purchased");

        if(isPurchased === true){
            span.classList.remove("purchased");
        }else{
            span.classList.add("purchased");
        }
    })

    //delete item
    icon.addEventListener("click", ()=>{
        listContainer.remove();
    })

    input.value = "";

}

input.addEventListener("change", addItem);