const loadLessons = ()=>{
     fetch("https://openapi.programming-hero.com/api/levels/all") // promise of response

     .then(res=> res.json()) //promise of json data
     .then((json) => displayLessons(json.data))
};

 const loadLevelWord=(id)=>{
       const url = `https://openapi.programming-hero.com/api/level/${id}`
    //    console.log(url);
     fetch(url)
     .then((res) => res.json())
     .then((data) => displayLevelWord(data.data));
 };

 const displayLevelWord = (words) => {
    // 1. get the container and empty
       const wordContainer = document.getElementById("word-container");
       wordContainer.innerHTML = "";

       //2.get inti every word
         words.forEach((word) => {
              console.log(word);
            //3. create element
               
              const card = document.createElement("div");
              card.innerHTML = `
                    <div class="bg-white rounded-xl shadow-sm text-center py-20 px-5 space-y-4">
                    <h2 class="text-2xl font-bold">${word.word}</h2>
                     <p class="font-semibold">Meaning /Pronunciation</p>
                    <div class="text-2xl font-bold font-bangla text-[#18181B]">"${word.meaning} / ${word.pronunciation}"</div>
                    <div class="flex justify-between items-center">
                    <button class="btn bg-[#1A91FF10]  hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
                    <button class="btn bg-[#1A91FF10]  hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
                </div>
                </div>
              `;
             wordContainer.append(card);
         });
 };   
       
const displayLessons=(lessons)=>{
     //1. Get the container & empty
       
     const levelContainer = document.getElementById("level-container");
     levelContainer.innerHTML = "";
      
     //2.get into every lessons
        for(let lesson of lessons){
               //3. create element
            //  console.log(lesson);
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