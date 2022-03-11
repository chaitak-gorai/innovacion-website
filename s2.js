function sponsorsdata() {
  const itemsDiv1 = document.querySelector('#spon');
  let content1 = sponsors.map((data) => {
    return `<div class="col-lg-3 col-md-4 col-xs-6" style="margin-top:20px">
            <div class="supporter-logo" style="background-color:white">
              <img src="./assets/previous_year_sponsors/${data.imgsrc}" class="img-fluid" alt=""/>
            </div>
          </div>`;
  });
  content1 = content1.join(' ');
  itemsDiv1.innerHTML = content1;
}
sponsorsdata();
