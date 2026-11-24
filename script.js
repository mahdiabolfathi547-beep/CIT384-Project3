var pet_info = {
      name:"Larry",
      weight: 35,
      happiness: 7
    };


$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    //pet information and starting value


    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml("Mochi is ready to start!");
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.rest-button').click(clickedRestButton);

    $(".tip-button").on("click", function () {
      $(".care-tips").slideToggle(300);
    });
})
    function clickedTreatButton() { console.log ("Hello");
      // Increase pet happiness
      // Increase pet weight
      pet_info.happiness += 2;
      pet_info.weight+= 1;
      checkAndUpdatePetInfoInHtml("Mochi is happier after the treat!");
      //showPetMessage("That treat was delicious!");
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      // Decrease pet weight
      pet_info.happiness += 2;
      pet_info.weight -= 1;
      checkAndUpdatePetInfoInHtml("So much fun! Mochi wants to play again");
      //showPetMessage("I had fun playing with you!");
    }

    function message(){
      console.log("Given treat");
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      // Decrease pet weight
      pet_info.happiness -= 2;
      pet_info.weight -= 1;
      checkAndUpdatePetInfoInHtml("Mochi feels stronger after exercise!");
      showPetMessage("I got some good excercise!");
      console.log("Go to sleep");
    }

    //Rest is the new action. It increaes happiness without changing weight.
    function clickedRestButton() {
      pet_info.happiness += 1;
      //checkAndUpdatePetInfoInHtml("Larry feels happier after resting!");
      $('.happiness').text(pet_info.happiness);
    }

    //It increases the Information for happiness when it's given
    function checkAndUpdatePetInfoInHtml(message) {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
      showPetMessage(message)
    }

    function checkWeightAndHappinessBeforeUpdating() {
      /*Add conditional so if weight is lower than zero.*/
      pet_info.weight = Math.max(0, pet_info.weight);
      pet_info.happiness= Math.max(0, Math.min(10, pet_info.happiness));
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info.name);
      $('.weight').text(pet_info.weight);
      $('.happiness').text(pet_info.happiness);
      $('.rest-button').text(clickedRestButton);
      var happinessPercent = pet_info.happiness * 10;
      $(".meter-fill").css("width", happinessPercent + "%");

      $(".pet-image").attr("alt", pet_info.name + " has" + pet_info.happiness + " happiness out of 10");
    }


    function showPetMessage(Message) {
      //hasnt been defined checkPetValues();
      updatePetInfoInHtml();
      $(".pet-message").text(message);
      $(".pet-image").fadeTo(150,0.45).fadeTo(300,1) 
     }