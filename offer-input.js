$('input[type="checkbox"]').click(function(source) {
      if (this.getAttribute('data-name') == 'Ingredients') {
        if (this.checked) {
          // Unhide Ingredient Question Component
          document.getElementById("ingredients-container").style = "display: -webkit-box;\
                                                                  display: -webkit-flex;\
                                                                  display: -ms-flexbox;\
                                                                  display: flex;\
                                                                  margin-top: 15px;\
                                                                  margin-bottom: 15px;\
                                                                  padding: 20px;\
                                                                  -webkit-box-orient: vertical;\
                                                                  -webkit-box-direction: normal;\
                                                                  -webkit-flex-direction: column;\
                                                                  -ms-flex-direction: column;\
                                                                  flex-direction: column;\
                                                                  border-style: solid;\
                                                                  border-width: 1px;\
                                                                  border-color: #ccc;\
                                                                  border-radius: 10px;"
        } else {
          // Hide Ingredient Question Component and Uncheck all checkboxs
          var container = document.querySelector("#ingredients-container");
          var checkboxesAll = container.querySelectorAll('input[type="checkbox"]');
          checkboxesAll.forEach(checkbox => {
            if (checkbox.checked) {
              checkbox.click()
            }
          });
          document.getElementById("ingredients-container").style = "display: none;"
          
        }
    
    } else {
      var divId = this.getAttribute('name')
      if (this.checked) {
          // Unhide Ingredient Question Component
          document.getElementById(divId).style = "display: -webkit-box;\
                                                  display: -webkit-flex;\
                                                  display: -ms-flexbox;\
                                                  display: flex;\
                                                  margin-top: 15px;\
                                                  margin-bottom: 15px;\
                                                  padding: 20px;\
                                                  -webkit-box-orient: vertical;\
                                                  -webkit-box-direction: normal;\
                                                  -webkit-flex-direction: column;\
                                                  -ms-flex-direction: column;\
                                                  flex-direction: column;\
                                                  border-style: solid;\
                                                  border-width: 1px;\
                                                  border-color: #ccc;\
                                                  border-radius: 10px;"
        } else {
          document.getElementById(divId).style = "display: none;"
        }
      }
    })
