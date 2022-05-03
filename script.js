let url = "https://data.cityofchicago.org/resource/xzkq-xp2w.json";

fetch (url)
  .then ( (response) => {
    return response.json();
  })
  .then ( (json) => {
    console.log(json)

    json.forEach (item => {
      // clone the template
      let clone = document.querySelector("div.card.template").cloneNode(true);

      // update values in the clone
      clone.querySelector("h5.card-title").innerText = item.name;

      // let title = clone.querySelector("p.card-text").innerText = item.job_titles; 

      let title  = item.job_titles;
      let salary  =  item.annual_salary; 


      let join  = title + " "  +  salary;

      clone.querySelector("p.card-text").innerText =  join;
      

      
      //  clone.querySelector("p.card-text").innerText = item.annual_salary ;
      
      // remove hidden 

      clone.removeAttribute("hidden");
      clone.classList.remove("template");

      // insert clone into DOM
      document.body.append(clone);

    });

  })

console.log("code after the fetch statement")