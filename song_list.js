//song list
let All_song = [
   {
     name: "မှီခဲ့ဖူးတဲ့ ပခုံးလေးဘယ်ဆီမှာ",
     path: src="https://drive.google.com/uc?export=download&id=11HkN40vgvtTrmXkHRP8VYHxiP-PGhvPG",
     img: src="https://drive.google.com/uc?export=download&id=1Wy08sCwx0kb7sybu3P8ZRJKW5ZRgo8x6",
     singer: " ေမေၾကးမုံ"
   },
   {
     name: "မလြမ္းပိုေလးမငိုေတာ့ဘူး",
     path: src="https://drive.google.com/uc?export=download&id=11K4rZCtC0RI1gFOeaRkg9idKP3-UK2fy",
     img: src="https://drive.google.com/uc?export=download&id=1Wy08sCwx0kb7sybu3P8ZRJKW5ZRgo8x6",
     singer: " ေမေၾကးမုံ"
   },
   {
     name: "အႏိုင္ယူသူႀကီး",
     path: src="https://drive.google.com/uc?export=download&id=11HCn9_I24zU7PqTwgYkNK9eiF_SuLc9m",
     img: src="https://drive.google.com/uc?export=download&id=1Wy08sCwx0kb7sybu3P8ZRJKW5ZRgo8x6",
     singer: " ေမေၾကးမုံ"
   },
   {
     name: "၅နာရီ",
     path: src="https://drive.google.com/uc?export=download&id=11JSuufUYbMf1L_YqkLljdulkDzb0Giql",
     img: src="https://drive.google.com/uc?export=download&id=1Wy08sCwx0kb7sybu3P8ZRJKW5ZRgo8x6",
     singer: " ေမေၾကးမုံ"
   },
   {
     name: "လုံမေလးတို႔ရြာ",
     path: src="https://drive.google.com/uc?export=download&id=11KNsNX5KlHGQzjf37jU9kTOJhbFc-_0A",
     img: src="https://drive.google.com/uc?export=download&id=1Wy08sCwx0kb7sybu3P8ZRJKW5ZRgo8x6",
     singer: " ေမေၾကးမုံ"
   },
   {
    name: " ေကာက္စိုက္ေတးကဗျာ",
    path: src="https://drive.google.com/uc?export=download&id=11REaRLiQLMpAr2h_wP-YB-Hi8wb_RVYJ",
    img: src="https://drive.google.com/uc?export=download&id=1Wy08sCwx0kb7sybu3P8ZRJKW5ZRgo8x6",
    singer: " ေမေၾကးမုံ"
   },
   {
    name: "နှလုံးသားရှိုက်သံ",
    path: src="https://drive.google.com/uc?export=download&id=11S85OIXDIQIdxWpCfjsgczp7f7wbpU80",
    img: src="https://drive.google.com/uc?export=download&id=1Wy08sCwx0kb7sybu3P8ZRJKW5ZRgo8x6",
    singer: " ေမေၾကးမုံ"
   },
   {
    name: "အခ်ိန္ယူပါဦးမည်",
    path: src="https://drive.google.com/uc?export=download&id=11UfUJny2C0JTY_zDK16k-rL1lOhG79u_",
    img:src= "https://drive.google.com/uc?export=download&id=1Wy08sCwx0kb7sybu3P8ZRJKW5ZRgo8x6",
    singer: " ေမေၾကးမုံ"
   },
  
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/