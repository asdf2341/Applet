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
const projectContainer=document.getElementById("project-container")
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}
    function displayArticle(){
projectContainer.innerHTML=""


        shuffleArray(filterProject);
const selectedProjects = filterProject.slice(0, 3);
selectedProjects.forEach((article) => {
                const infoBlock = document.createElement("article");
                infoBlock.classList.add("project-card");
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
     
        }
        displayArticle();
    })
//faq-item

const faqData = [
    {
      question: "Do you develop both websites and mobile apps?",
      answer:
        "Yes, we specialize in developing both websites and mobile applications. Our team ensures that each project is tailored to meet your business goals, whether it’s a website, a web application, or a mobile app for iOS and Android.",
    },
    {
      question: "How long does it take to develop a project?",
      answer:
        "The time required to develop a project depends on its complexity and scope. Generally, smaller projects like landing pages can take a few weeks, while larger projects such as custom web applications or mobile apps may take several months.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use a wide range of technologies depending on the project requirements. This includes HTML, CSS, JavaScript, React, Node.js, Python, and PHP for backend development. For mobile apps, we use Swift for iOS and Kotlin for Android, along with cross-platform frameworks like Flutter or React Native.",
    },
    {
      question: "Can you redesign an existing website or app?",
      answer:
        "Yes, we specialize in redesigning existing websites and mobile apps. Whether it's improving the user interface (UI), updating functionality, or enhancing the overall design, our team can help you modernize your digital presence.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes, we provide comprehensive post-launch support. Our team is available for bug fixes, updates, and additional feature requests to ensure that your project continues to run smoothly after launch.",
    },
    {
      question: "How do I get a quote for my project?",
      answer:
        "To get a quote for your project, simply reach out to us with your project details. We will review your requirements and provide a tailored quote based on the scope of the project and the technologies involved.",
    },
  ];
  
  const faqContainer = document.querySelector(".faq-container");


faqData.map(function(item){
    let faqItem=document.createElement("div")
    faqItem.className="faq-item"
    const markup=`
        <div class="faq-question">
              <span class="questions">${item.question}</span>
              <span class="toggle-container">
              <span class ="expand">
              <img
                class="faq-toggle"
                src="assets/plus-circle.svg"
                alt="Toggle Icon"
              />
              </span>
              <span class="close">
                <img 
                class="faq-toggle"
                src="assets/minus-circle.svg"
                alt="Toggle Icon"
                >
               </span>
        </div>
        <div class="faq-answer">
            <span class="answer">${item.answer}</span>
        </div>
    `
    faqItem.innerHTML=markup;
    faqContainer.append(faqItem)
});

const toggleContainer=document.querySelectorAll(".toggle-container")

toggleContainer.forEach(function(item){
    item.addEventListener("click",function(e){
       const parent= e.currentTarget.parentElement.parentElement
       parent.classList.toggle('show-answer')
    })
})


//slider



const swiper = new Swiper('.swiper', {
    slidesPerView:1,
    spaceBetween:60,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    //   pauseOnMouseEnter: true,
    // },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


  //scroll-to the button


  const button=document.querySelector(".scroll-to-top")
window.addEventListener("scroll",()=>{
 
  if(button){
    if(document.body.scrollTop>300 || document.documentElement.scrollTop>300){
      button.style.display="block"
    }else{
        button.style.display="none"
    }
  }
})
document.addEventListener("DOMContentLoaded", function() {
  
  if (button) {
      button.addEventListener("click", function(e) {
          e.preventDefault();
          window.scrollTo({
              top: 0,
              behavior: "smooth"
          });
      });
  }
});
  

