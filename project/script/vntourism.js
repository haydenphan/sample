function display(place) {
  if (place == 'phuquoc') {
    document.getElementById('tour-screen').innerHTML = `<section id="nhatrang-section">
    <div id="nhatrang-p-container">
      <p id="nhatrang-title">PHU QUOC</p>
      <p>Known as the pearl island in Kien Giang, Phu Quoc is the most favorite destination of both domestic and foreign tourists. Phu Quoc has many beautiful beaches and islands such as Truong beach, Dai beach, Sao beach, Khem beach, Ganh Dau, Vung Bau, Rach Vem, Ba Keo, Cua Can or Ba Keo... Most of these beaches look wild, quiet and bring a strange feeling of peace. Among them is Sao beach, the sea here is blue and clean, highlighted by a white sand beach, running along rows of cool green poplars, and two surrounding mountain ranges creating a peaceful and poetic scene.
      <ul style="padding-left: 15px;">Let's take a look at some suitable times to travel to Phu Quoc
        <li>15/8-16/8 in lunar calendar <br>
          The time of the "Nghinh Ông" Festival
        </li>
        <li>18/1-19/1 in lunar calendar <br>
          The time of the "Dinh Bà Ông Lang" Festival
        </li>
        <li>30/4 Each year <br>
          The time of the "Traditional Boat Racing" Festival
        </li>
      </ul>
    </div>
    
    <div id="nhatrang-img">
      <img src="images/phuquoc.jpg" alt="Da Nang beach">
    </div>
  </section>`;
  } else if (place == 'nhatrang') {
    document.getElementById('tour-screen').innerHTML = `<section id="nhatrang-section">
    <div id="nhatrang-p-container">
      <p id="nhatrang-title">NHA TRANG</p>
      <p >Nha Trang is a place with a long historical culture and many unique ancient festivals. Joining
        the journey to explore this beautiful bay, you will be able to immerse yourself in many festivals in Nha Trang
        such as: Hung Temple Festival, Thap Ba Festival, Cau Ngu Festival, Am Chua Festival...
        Festivals in Nha Trang always attract tourists from all over because of their interesting and attractive
        experiences.
      <ul style="padding-left: 15px;">Let's take a look at some suitable times to travel to Nha Trang
        <li>21/3-23/3 in lunar calendar <br>
          The time of the "Nha Trang Ba tower Ponagar" Festival
        </li>
        <li>10/5 in lunar calendar <br>
          The time of the "Yến Sào" Festival
        </li>
        <li>11-13/2 in lunar calendar <br>
          The time of the "Cầu Ngư" Festival
        </li>
        <li>Held every 2 years, lasting 4-5 days <br>
          The time of the "Nha Trang beach" Festival
        </li>
      </ul>
    </div>
    
    <div id="nhatrang-img">
      <img src="images/Nha Trang.jpg" alt="Nha Trang beach">
    </div>
  </section>`;
  } else {
    document.getElementById('tour-screen').innerHTML = `<section id="nhatrang-section">
    <div id="nhatrang-p-container">
      <p id="nhatrang-title">DA NANG</p>
      <p >Da Nang is the 4th largest city in Vietnam after Ho Chi Minh, Hanoi and Hai Phong city in terms of urbanization and socio-economic development. Located on the coast of the East Sea with the mouth of the Han River, Da Nang is one of the port cities with a strategic location in Central Vietnam and one of 5 cities directly under the Central Government. Da Nang is also the center of three world cultural heritages: Hue Imperial City, Hoi An ancient town and My Son Sanctuary.
      <ul style="padding-left: 15px;">Let's take a look at some suitable times to travel to Da Nang
        <li>27/3 - 28/3 and 30/4 - 1/5 Each year <br>
          The time of the "International Firework Festival"
        </li>
        <li>27/4 - 1/5 Each year <br>
          The time of the "Hot air balloon Festival"
        </li>
        <li>Tháng 4 - tháng 9 Each year <br>
          The time of the "Carnival Festival of Ba Na Hill Da Nang"
        </li>
        <li>19/2 - 21/2 in lunar calendar <br>
          The time of the "Da Nang Avalokitesvara Bodhisattva" Festival
        </li>
      </ul>
    </div>
    
    <div id="nhatrang-img">
      <img src="images/bien-danang.jpg" alt="Da Nang beach">
    </div>
  </section> `;
  }
}