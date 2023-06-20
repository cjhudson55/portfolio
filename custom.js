const chooseProj1 = document.getElementById("arrow1");
const chooseProj2 = document.getElementById("arrow2");
const chooseProj3 = document.getElementById("arrow3");

// add event listeners to all the arrows
chooseProj1.addEventListener('click', showDetails1);
chooseProj2.addEventListener('click', showDetails2);
chooseProj3.addEventListener('click', showDetails3);

// function to display the details of project 1
function showDetails1() {
    const projDetails1 = document.getElementById("project1");
    project1.innerHTML = "";
    project1.innerHTML += `
        <div class="col-12 align-right pb-4 pr-4 pt-4 mt-4 border-line">
            <button class="button-style" id="close1">
                <i class="fas fa-4x fa-xmark"></i>
            </button>
        </div>
        <div class="col-4 px-1">
            <img src="/assets/image1.png" alt="">
        </div>
        <div class="col-4 px-1">
            <img src="/assets/image2.png" alt="">
        </div>
        <div class="col-4 px-1">
            <img src="/assets/image3.png" alt="">
        </div>
        <div class="col-12 pb-4">
            <div class="box">
                <h5 class="title-1 inline-h5">01. </h5>
                <h5 class="title-2 inline-h5">North Tourism</h5>
                <p class="para-style mt-2">North is an accomodation booking application designed for a fictious accomodation provider.<br><br>North focuses on providing a range of accomodation options located in the far North of Aotearoa, New Zealand. Customers can set a number of filtering options to search for the accomodation that suits their needs.</p>
            </div>
        </div>   
        <div class="col-12 pt-4 border-line">
            <p></p>
        </div>

    `
    // add event listener to close button of project 1
    const closeProj1 = document.getElementById("close1");
    closeProj1.addEventListener('click', closeDetails1);

    // functio to clear the details of project 1 on click of the close button
    function closeDetails1() {
        project1.innerHTML = "";
    }
}

// function to display the details of project 2
function showDetails2() {
    const projDetails2 = document.getElementById("project2");
    project2.innerHTML = "";
    project2.innerHTML += `
        <div class="col-12 align-right pb-4 pr-4 pt-4 mt-4 border-line">
            <button class="button-style" id="close2">
                <i class="fas fa-4x fa-xmark"></i>
            </button>
        </div>
        <div class="col-4 px-1">
            <img src="/assets/image3.png" alt="">
        </div>
        <div class="col-4 px-1">
            <img src="/assets/image1.png" alt="">
        </div>
        <div class="col-4 px-1">
            <img src="/assets/image2.png" alt="">
        </div>
        <div class="col-12 pb-4">
            <div class="box">
                <h5 class="title-1 inline-h5">02. </h5>
                <h5 class="title-2 inline-h5">Salty Pidgin</h5>
                <p class="para-style mt-2">Salty Pidgin is an upmarket suburban restaurant.</p>
            </div>
        </div>   
        <div class="col-12 pt-4 border-line">
            <p></p>
        </div>

    `
    // add event listener to close button of project 2
    const closeProj2 = document.getElementById("close2");
    closeProj2.addEventListener('click', closeDetails2);

    // functio to clear the details of project 1 on click of the close button
    function closeDetails2() {
        project2.innerHTML = "";
    }
}

// function to display the details of project 3
function showDetails3() {
    const projDetails3 = document.getElementById("project3");
    project3.innerHTML = "";
    project3.innerHTML += `
        <div class="col-12 align-right pb-4 pr-4 pt-4 mt-4 border-line">
            <button class="button-style" id="close3">
                <i class="fas fa-4x fa-xmark"></i>
            </button>
        </div>
        <div class="col-4 px-1">
            <img src="/assets/image2.png" alt="">
        </div>
        <div class="col-4 px-1">
            <img src="/assets/image3.png" alt="">
        </div>
        <div class="col-4 px-1">
            <img src="/assets/image1.png" alt="">
        </div>
        <div class="col-12 pb-4">
            <div class="box">
                <h5 class="title-1 inline-h5">03. </h5>
                <h5 class="title-2 inline-h5">Flur Pastry Shop</h5>
                <p class="para-style mt-2">Flur Pastry Shop is a boutique patisserie and catering business.</p>
                <br><br>
                <a href="https://github.com/cjhudson55/summative4Pastry" target="_blank">
                    <i class="fa-brands fa-github fa-2xl"></i>
                </a>
                <a href="https://summative4-pastry.vercel.app/#/" target="_blank" class="pl-2 para-style nav-to-site">
                    Go to website
                </a>
            </div>
        </div>   
        <div class="col-12 pt-4 border-line">
            <p></p>
        </div>

    `
    // add event listener to close button of project 3
    const closeProj3 = document.getElementById("close3");
    closeProj3.addEventListener('click', closeDetails3);

    // functio to clear the details of project 1 on click of the close button
    function closeDetails3() {
        project3.innerHTML = "";
    }
}