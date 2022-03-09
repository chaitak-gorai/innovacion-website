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
  const itemsDiv = document.querySelector('#cards');
  let content = events.map((data) => {
    return `
          <div class='d-flex align-items-center justify-content-center'>
      <br />

      <br />
      <div class='event_cards  ' style={{ width: '80%' }}>
        <div id='cards' class='row'>
          <div class='img_events col-md-3'>
            <img src="./assets/events/${data.image_url}" alt='' />
          </div>
          <br />
          <div class='content_events col-md-9'>
            <div class='event_name'>
              <h1>${data.name}</h1>
            </div>
            <br />
            <div class='abt_event'>
              <p>${data.writeup}</p>
            </div>
            <br />
            <div class='rules'>
              <a href=''>Rules</a>
              <br />
              <br />
              <h4>Event Coordinator</h4>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>`;
  });
  content = content.join(' ');
  itemsDiv.innerHTML = content;
}
showProjectsData();
