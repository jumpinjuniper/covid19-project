$('input[type="checkbox"]').click(function(source) {
      if (this.getAttribute('data-name') == 'Ingredients') {
        if (this.checked) {
            // Unhide Ingredient Question Component
            document.getElementById('ingredient-component').style = "display: -webkit-box;\
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
            var container = document.querySelector('#ingredient-component');
            var checkboxesAll = container.querySelectorAll('input[type="checkbox"]');
            checkboxesAll.forEach(checkbox => {
              if (checkbox.checked) {
                checkbox.click()
              }
            });
            document.getElementById('ingredient-component').style = "display: none;"
            
          }
      }
      var related_question_container = document.getElementById('related-questions')
      var ingredientsChecked = false
      related_question_container.innerHTML = ""
      inputs = document.getElementsByTagName('input');
      for(var i=0, n=inputs.length;i<n;i++) {
        if (inputs[i].type == 'checkbox') {
          if (inputs[i].checked && inputs[i].getAttribute('question') == 'input-offer') {
            var endProduct = inputs[i].getAttribute('data-name')
            var formattedEndProduct = inputs[i].getAttribute('name')
            if (endProduct != 'Ingredients') {
              related_question_container.innerHTML += '<!-- Input Offer Question Group Component -->\
                                                      <div class="group-input-container">\
                                                        <label for="name" class="input-group-label">'+endProduct+'</label>\
                                                        <div class="input-container">\
                                                          <label for="'+formattedEndProduct+'---Description-5" class="input-label">Description of the product/service you are able to produce:</label>\
                                                          <input type="text" class="text-input w-input" maxlength="256" name="'+formattedEndProduct+'---Description" data-name="'+formattedEndProduct+' - Description" placeholder="Your answer" id="'+formattedEndProduct+'---Description-5">\
                                                        </div>\
                                                        <div class="input-container">\
                                                          <label for="'+formattedEndProduct+'---Available-Units" class="input-label">How many units do you currently have available?</label>\
                                                          <input type="text" class="text-input w-input" maxlength="256" name="'+formattedEndProduct+'---Available-Units" data-name="'+formattedEndProduct+' - Available Units" placeholder="Your answer" id="'+formattedEndProduct+'---Available-Units">\
                                                        </div>\
                                                        <div class="input-container">\
                                                          <label for="'+formattedEndProduct+'---Production-Rate" class="input-label">How many units can be produced per week?</label>\
                                                          <input type="text" class="text-input w-input" maxlength="256" name="'+formattedEndProduct+'---Production-Rate" data-name="'+formattedEndProduct+' - Production Rate" placeholder="Your answer" id="'+formattedEndProduct+'---Production-Rate">\
                                                        </div>\
                                                        <div class="input-container">\
                                                          <label for="'+formattedEndProduct+'---Average-Cost" class="input-label">What is the average cost per unit?</label>\
                                                          <input type="text" class="text-input w-input" maxlength="256" name="'+formattedEndProduct+'---Average-Cost" data-name="'+formattedEndProduct+' - Average Cost" placeholder="Your answer" id="'+formattedEndProduct+'---Average-Cost">\
                                                        </div>\
                                                        <div class="input-container">\
                                                          <label for="'+formattedEndProduct+'-Description-2" class="input-label">Add Related File</label>\
                                                          <div class="w-file-upload">\
                                                            <div class="w-file-upload-default">\
                                                              <input type="file" id="'+formattedEndProduct+'---Related-File" name="'+formattedEndProduct+'---Related-File" data-name="'+formattedEndProduct+' - Related File" class="w-file-upload-input">\
                                                              <label for="'+formattedEndProduct+'---Related-File" class="w-file-upload-label">\
                                                                <div class="w-icon-file-upload-icon"></div>\
                                                                <div class="w-inline-block">Upload File</div>\
                                                              </label>\
                                                              <div class="w-file-upload-info">Max file size 10MB.</div>\
                                                            </div>\
                                                            <div class="w-file-upload-uploading w-hidden">\
                                                              <div class="w-file-upload-uploading-btn">\
                                                                <svg class="w-icon-file-upload-uploading" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 30 30">\
                                                                  <path fill="currentColor" opacity=".2" d="M15 30a15 15 0 1 1 0-30 15 15 0 0 1 0 30zm0-3a12 12 0 1 0 0-24 12 12 0 0 0 0 24z"></path>\
                                                                  <path fill="currentColor" opacity=".75" d="M0 15A15 15 0 0 1 15 0v3A12 12 0 0 0 3 15H0z"></path>\
                                                                  <animatetransform attributename="transform" attributetype="XML" dur="0.6s" from="0 15 15" repeatcount="indefinite" to="360 15 15" type="rotate"></animatetransform>\
                                                                </svg>\
                                                                <div class="w-inline-block">Uploading...</div>\
                                                              </div>\
                                                            </div>\
                                                            <div class="w-file-upload-success w-hidden">\
                                                              <div class="w-file-upload-file">\
                                                                <div class="w-file-upload-file-name">fileuploaded.jpg</div>\
                                                                <div class="w-file-remove-link">\
                                                                  <div class="w-icon-file-upload-remove"></div>\
                                                                </div>\
                                                              </div>\
                                                            </div>\
                                                            <div class="w-file-upload-error w-hidden">\
                                                              <div class="w-file-upload-error-msg" data-w-size-error="Upload failed. Max size for files is 10 MB." data-w-type-error="Upload failed. Invalid file type." data-w-generic-error="Upload failed. Something went wrong. Please retry.">Upload failed. Max size for files is 10 MB.</div>\
                                                            </div>\
                                                          </div>\
                                                        </div>\
                                                      </div><br><hr><br>'
            }
          }
          if (inputs[i].checked && inputs[i].getAttribute('question') == 'input-ingredient') {
            var ingredient = inputs[i].getAttribute('data-name')
            var formattedIngredient = inputs[i].getAttribute('name')
            related_question_container.innerHTML += '<!-- Input Ingredient Question Group Component -->\
                                                    <div class="group-input-container">\
                                                      <label for="name" class="input-group-label"><strong>'+ingredient+'</strong></label>\
                                                      <div class="input-container">\
                                                        <label for="'+formattedIngredient+'---Description" class="input-label">Description of the ingredient you are able to produce:</label>\
                                                        <input type="text" class="text-input w-input" maxlength="256" name="'+formattedIngredient+'---Description" data-name="'+ingredient+' - Description" placeholder="Your answer" id="'+formattedIngredient+'---Description">\
                                                      </div>\
                                                      <div class="input-container">\
                                                        <label for="'+formattedIngredient+'---Currently-Available-Units" class="input-label">How many units do you currently have available?</label>\
                                                        <input type="text" class="text-input w-input" maxlength="256" name="'+formattedIngredient+'---Currently-Available-Units" data-name="'+ingredient+' - Currently Available Units" placeholder="Your answer" id="'+formattedIngredient+'---Currently-Available-Units">\
                                                      </div>\
                                                      <div class="input-container">\
                                                        <label for="'+formattedIngredient+'---Production-Rate" class="input-label">How many units can be produced per week?</label>\
                                                        <input type="text" class="text-input w-input" maxlength="256" name="'+formattedIngredient+'---Production-Rate" data-name="'+ingredient+' - Production Rate" placeholder="Your answer" id="'+formattedIngredient+'---Production-Rate">\
                                                      </div>\
                                                      <div class="input-container">\
                                                        <label for="'+formattedIngredient+'---Average-Cost" class="input-label">What is the average cost per unit?</label>\
                                                        <input type="text" class="text-input w-input" maxlength="256" name="'+formattedIngredient+'---Average-Cost" data-name="'+ingredient+' - Average Cost" placeholder="Your answer" id="'+formattedIngredient+'---Average-Cost">\
                                                      </div>\
                                                      <div class="input-container">\
                                                        <label for="name" class="input-label">How do you deliver this ingredient?</label>\
                                                        <label class="w-checkbox checkbox-field">\
                                                          <div class="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div>\
                                                          <input type="checkbox" id="ETHANOL (USP OR FOOD GRADE) - Tanker Truck (14,000 kg)" name="'+formattedIngredient+'---Tanker-Truck-14-000-kg" data-name="'+ingredient+' - Tanker Truck (14,000 kg)" style="opacity:0;position:absolute;z-index:-1">\
                                                          <span for="ETHANOL (USP OR FOOD GRADE) - Tanker Truck (14,000 kg)" class="checkbox-label w-form-label">Tanker Truck (14,000 kg)</span>\
                                                        </label>\
                                                        <label class="w-checkbox checkbox-field">\
                                                          <div class="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div>\
                                                          <input type="checkbox" id="ETHANOL (USP OR FOOD GRADE) - Totes (1,000 kg)" name="'+formattedIngredient+'---Totes-1-000-kg" data-name="'+ingredient+' - Totes (1,000 kg)" style="opacity:0;position:absolute;z-index:-1">\
                                                          <span for="ETHANOL (USP OR FOOD GRADE) - Totes (1,000 kg)" class="checkbox-label w-form-label">Totes (1,000 kg)</span>\
                                                        </label>\
                                                        <label class="w-checkbox checkbox-field">\
                                                          <div class="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div>\
                                                          <input type="checkbox" id="ETHANOL (USP OR FOOD GRADE) - Drums (200 kg)" name="'+formattedIngredient+'---Drums-200-kg" data-name="'+ingredient+' - Drums (200 kg)" style="opacity:0;position:absolute;z-index:-1">\
                                                          <span for="ETHANOL (USP OR FOOD GRADE) - Drums (200 kg)" class="checkbox-label w-form-label">Drums (200 kg)</span>\
                                                        </label>\
                                                        <div class="other-checkbox-container">\
                                                          <label class="w-checkbox other">\
                                                            <div class="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div>\
                                                            <input type="checkbox" id="ETHANOL (USP OR FOOD GRADE) - Other Delivery Method" name="'+formattedIngredient+'---Other-Delivery-Method" data-name="'+ingredient+' - Other Delivery Method" style="opacity:0;position:absolute;z-index:-1">\
                                                            <span for="ETHANOL (USP OR FOOD GRADE) - Other Delivery Method" class="checkbox-label w-form-label">Other:</span>\
                                                          </label>\
                                                          <input type="text" class="text-input w-input" maxlength="256" name="'+formattedIngredient+'---Other-Delivery-Method-Description" data-name="'+ingredient+' - Other Delivery Method Description" id="'+formattedIngredient+'---Other-Delivery-Method-Description">\
                                                        </div>\
                                                      </div>\
                                                      <div class="input-container"><label for="Bottles-Description-7" class="input-label">Add Related File</label>\
                                                        <div class="w-file-upload">\
                                                          <div class="w-file-upload-default">\
                                                            <input type="file" id="'+formattedIngredient+'---Related-File" name="'+formattedIngredient+'---Related-File" data-name="'+ingredient+' - Related File" class="w-file-upload-input">\
                                                            <label for="'+formattedIngredient+'---Related-File" class="w-file-upload-label">\
                                                              <div class="w-icon-file-upload-icon"></div>\
                                                              <div class="w-inline-block">Upload File</div>\
                                                            </label>\
                                                            <div class="w-file-upload-info">Max file size 10MB.</div>\
                                                          </div>\
                                                          <div class="w-file-upload-uploading w-hidden">\
                                                            <div class="w-file-upload-uploading-btn">\
                                                              <svg class="w-icon-file-upload-uploading" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 30 30">\
                                                                <path fill="currentColor" opacity=".2" d="M15 30a15 15 0 1 1 0-30 15 15 0 0 1 0 30zm0-3a12 12 0 1 0 0-24 12 12 0 0 0 0 24z"></path>\
                                                                <path fill="currentColor" opacity=".75" d="M0 15A15 15 0 0 1 15 0v3A12 12 0 0 0 3 15H0z"></path>\
                                                                <animatetransform attributename="transform" attributetype="XML" dur="0.6s" from="0 15 15" repeatcount="indefinite" to="360 15 15" type="rotate"></animatetransform>\
                                                              </svg>\
                                                              <div class="w-inline-block">Uploading...</div>\
                                                            </div>\
                                                          </div>\
                                                          <div class="w-file-upload-success w-hidden">\
                                                            <div class="w-file-upload-file">\
                                                              <div class="w-file-upload-file-name">fileuploaded.jpg</div>\
                                                              <div class="w-file-remove-link">\
                                                                <div class="w-icon-file-upload-remove"></div>\
                                                              </div>\
                                                            </div>\
                                                          </div>\
                                                          <div class="w-file-upload-error w-hidden">\
                                                            <div class="w-file-upload-error-msg" data-w-size-error="Upload failed. Max size for files is 10 MB." data-w-type-error="Upload failed. Invalid file type." data-w-generic-error="Upload failed. Something went wrong. Please retry.">Upload failed. Max size for files is 10 MB.</div>\
                                                          </div>\
                                                        </div>\
                                                      </div>\
                                                    </div><br><hr><br>'
          }
        }
        clickPending = false
      }
    })
