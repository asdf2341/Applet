async function fetchProjects(){
    try{
            const response=await fetch ("./projects.json")
            if(!response.ok){
                throw new Error('HTTP server! Status:${response}')
            }
            const data=await response.json();
            if(!data||typeof data!=="object" || Array.isArray(data.result)){
                throw new Error("Invalid JSON structure: 'results' key missing or not an array");
            }
         
            return data

    }
    catch (error){
            console.error("Error fetching articles:",error)
            return []
    }
}

document.addEventListener("DOMContentLoaded",async()=>{
    let projects=await fetchProjects()
    let filterProject=[...projects]
    const viewAll=document.getElementById("view")
    const website=document.getElementById("web")
    const application=document.getElementById("app")
const projectContainer=document.getElementById("project-container")

    function displayArticle(){
projectContainer.innerHTML=""
        filterProject.forEach((article) => {
    
                const infoBlock = document.createElement("article");
                infoBlock.classList.add("project-card");
                 // optional class for styling
                 let days=article.meta.duration_days
                 let result=""
                 if(days<7){
                     result=days+" days"
                 }else if(days<=31 && days>=7){
                    const week=Math.round(days/6)
                    result=week+" weeks"
                 }else{
                    const month=Math.round(days/30)
                    result=month+" months"
                 }
                infoBlock.innerHTML = `
                <img src="${article.image}" alt="${article.title}">
                  <p class="category">${article.tag}</p>
                  <div class="name">
                    <h3 class="project-name">${article.title}</h3>
                    <img src="assets/arrow-up-right.svg" alt="arrow" />
                  </div>
                  <p class="project-desc">${article.description}</p>
                  
                  <p class="project-info"> ${result} | ${article.meta.technologies} | ${article.meta.works}</p>
                  <p class="project-date">${article.created_at}</p>
                `;

                  
            projectContainer.appendChild(infoBlock)
              })
        UpdateByCat()
        }

    function UpdateByCat(){
        website.addEventListener("click", () => {
            const tabs=document.querySelectorAll(".tab")
            tabs.forEach(tab=>{
                tab.classList.remove("active")
        })
            website.classList.add("active");
            filterProject = projects.filter(p => p.tag === "Website");
            displayArticle();
          });
          
          application.addEventListener("click", () => {
            const tabs=document.querySelectorAll(".tab")
            tabs.forEach(tab=>{
                tab.classList.remove("active")
        })
            application.classList.add("active")
            filterProject = projects.filter(p => p.tag === "Application");
            displayArticle();
          });
          
          viewAll.addEventListener("click", () => {
            const tabs=document.querySelectorAll(".tab")
            tabs.forEach(tab=>{
                tab.classList.remove("active")
        })
            viewAll.classList.add("active");
            filterProject = [...projects];
            displayArticle();
          });
        }
       
          displayArticle()
});