let url = "https://kontests.net/api/v1/all"
let p = fetch(url)
p.then((response) => {
    return response.json()
}).then((value) => {
    // console.log(value)
    let ihtml = ""
    for (item in value) {
        // console.log(value[item].duration)

        let image = "";
        if (value[item].site == "HackerRank") {
            image = "https://nicolasliuprojects.files.wordpress.com/2017/10/hackerrank_logo.png"
        }
        else if (value[item].site == "HackerEarth") {
            image = "https://questionpapershub.com/free-job-alert/wp-content/uploads/2021/03/HackerEarth-Logo-1.jpg"
        }
        else if (value[item].site == "CodeForces") {
            image = "https://res.cloudinary.com/practicaldev/image/fetch/s--N2_RJe5R--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cer3l19eex0wy900b101.jpg"
        }
        else if (value[item].site == "CodeChef") {
            image = "https://www.justalternativeto.com/wp-content/uploads/2021/07/CodeChef-735x400.jpg"
        }
        else if (value[item].site == "LeetCode") {
            image = "https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X2pwZy9ENjdwZWNlaWJlSVFJRGRNaWJiYW9kN3ZFaG4xRTN2UFNBMEE4N3ROamNLT0MyRm54WVFoeVJpYm5GeVJ0RWRPNXFzZ1VXMXZReDlZaWFQeHBTdFZwWEM4ZVEvNjQw?x-oss-process=image/format,png"
        }
        else if (value[item].site == "AtCoder") {
            image = "https://th.bing.com/th/id/OIP.6wIIYDHImS7L8spOSn22owAAAA?pid=ImgDet&rs=1"
        }
        else if (value[item].site == "Kick Start") {
            image = "https://th.bing.com/th/id/R.ac5c9a0b19b9d097c3773012af41762f?rik=haRjvpYMcaQIcA&riu=http%3a%2f%2fwww.logoed.co.uk%2fwp-content%2fuploads%2f2014%2f04%2f22.jpg&ehk=hJFp5SP4sK%2b4YQHaawxYkSF1tud6hXng987i9Ii05rQ%3d&risl=&pid=ImgRaw&r=0"
        }
        else {
            image = "https://th.bing.com/th/id/OIP.4ht5Ir66opgXTUjRl8fn7QHaD3?pid=ImgDet&rs=1"
        }


        ihtml += `
  <div id="card" class="card my-3">
    <img src="${image}">
    <div class="card-body">
      <h5 class="card-title">${value[item].name}</h5>
      <p class="card-text">Site: ${value[item].site}</p>
      <p >Start-Time: ${value[item].start_time}</p>
      <p >End-Time: ${value[item].end_time}</p>
      <p >Duration: ${value[item].duration}</p>
      <p >Status: ${value[item].status}</p>
      <a href="${value[item].url}" class="btn btn-dark">Visit the Contest-Site</a>
    </div>
  </div>
    `
    }
    let cardContainer = document.getElementById("cardContainer")
    cardContainer.innerHTML = ihtml
})


// Search

// let searchButton = document.getElementById('search');
// searchButton.onclick = () => {
//   search()
// }

// const card = document.getElementById('cardContainer')


// function search() {
//   let input = document.getElementById('searchbox').value;
//   console.log(input)
//   if (input !== "") {
//     let regExp = new RegExp(input, "gi");
//     card.innerHTML = (card.textContent).replace(regExp, "<mark>$&</mark>");
//   }
// }

// let searchbox = document.getElementById('searchbox')
// let searchBtn = document.getElementById('search')
// searchBtn.addEventListener('click', () => {
//     let inputVal = searchbox.value.toLowerCase()
//     // console.log("fired!", inputVal)
//     let cards = document.getElementsByClassName('card')
//     
//     Array.from(cards).forEach((element)=>{
//         let titleTxt = element.getElementsByClassName('card-title')[0].innerText.toLowerCase()
//         if(titleTxt.includes(inputVal)){
//             element.style.display = 'flex'
//         }else{
//             element.style.display = 'none'
//         }
        // console.log(element)
//     })
// })