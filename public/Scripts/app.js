// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');
        
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")) 
                {
                    event.preventDefault();
                    window.location.assign('/survey-app');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();
// generate a function for alphabetical sorting
function compare(a, b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

    // generate a function for numerical sorting
    function compareNumerical(a, b) {
        if (a.age < b.age)
          return -1;
        if (a.age > b.age)
          return 1;
        return 0;
      }