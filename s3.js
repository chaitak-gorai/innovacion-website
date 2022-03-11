function sponsorsdatan() {
  const itemsDiv2 = document.querySelector('#spon2');
  let content2 = spn2.map((data) => {
    return `<div class="col-lg-3 col-md-4 col-xs-6" style="margin-top:20px">
            <div class="supporter-logo" style="background-color:white">
              <img src="./assets/thisyear_sponsors/${data.image_url}" class="img-fluid" alt=""/>
            </div>
          </div>`;
  });
  content2 = content2.join(' ');
  itemsDiv2.innerHTML = content2;
}
sponsorsdatan();