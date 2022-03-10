(function () {
  // Add event listener
  document.addEventListener('mousemove', parallax);
  const elem = document.querySelector('#parallax');
  // Magic happens here
  function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${
      50 - (_mouseY - _h) * 0.01
    }%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${
      50 - (_mouseY - _h) * 0.02
    }%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${
      50 - (_mouseY - _h) * 0.06
    }%`;
    let _depth4 = `${50 - (_mouseX - _w) * 0.08}% ${
      50 - (_mouseY - _h) * 0.08
    }%`;
    let x = `${_depth4}, ${_depth2}, ${_depth1}`;
    console.log(x);
    elem.style.backgroundPosition = x;
  }
})();

function showProjectsData() {
  const itemsDiv = document.querySelector('#eve');
  let content = events.map((data) => {
    return `
    <article class="postcard dark green">
    <a class="postcard__img_link" href="#">
      <img
        class="postcard__img"
      src="./assets/events/${data.image_url}"
        alt="Image Title"
      />
    </a>
    <div class="postcard__text">
      <h1 class="postcard__title green">
        <a href="#">${data.name}</a>
      </h1>
      <div class="postcard__subtitle small">
        <time datetime="2020-05-25 12:00:00">
          <i class="fas fa-calendar-alt mr-2"></i>
        </time>
      </div>
      <div class="postcard__bar"></div>
      <div class="postcard__preview-txt">
      ${data.writeup}
      </div>
     
      <ul class="postcard__tagbox">
      <button class="btn btn-success" style="margin-right:5px">Rules</button>
     
      </ul>
    </div>
  </article>`;
  });
  content = content.join(' ');
  itemsDiv.innerHTML = content;
}
showProjectsData();
