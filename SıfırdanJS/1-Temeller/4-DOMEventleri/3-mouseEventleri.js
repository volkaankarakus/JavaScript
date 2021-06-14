const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

// Mouse Eventleri 
// click
title.addEventListener("click",run);

// double click
title.addEventListener("dblclick",run);

//mouse down
title.addEventListener("mousedown",run);

// mouse up(tiklamadan elimizi cektigimizde)
title.addEventListener("mouseup",run);

//mouse over(uzerine gelmemiz yeterli,tiklamaya gerek yok)
title.addEventListener("mouseover",run);

//mouse out(elementten ciktigimiz zaman calisir)
title.addEventListener("mouseout",run);

function run(e){
    console.log(e.type);
}

