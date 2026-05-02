const loadLessons = ()=>{
     fetch("https://openapi.programming-hero.com/api/levels/all") // promise of response

     .then(res=> res.json()) //promise of json data
     .then((json) => displayLessons(json.data))
};

 const loadLevelWord=(id)=>{
       const url = `https://openapi.programming-hero.com/api/level/${id}`
       console.log(url);
 }
const displayLessons=(lessons)=>{
     //1. Get the container & empty
       
     const levelContainer = document.getElementById("level-container");
     levelContainer.innerHTML = "";
      
     //2.get inti every lessons
        for(let lesson of lessons){
               //3. create element
             console.log(lesson);
               const btnDiv = document.createElement("div")
               btnDiv.innerHTML= `
                  <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
                     <i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}
                  </button>
               
               `
         //4. append in to container
           levelContainer.append(btnDiv); 
        }
        
}
loadLessons();