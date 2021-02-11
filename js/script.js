window.addEventListener("DOMContentLoaded", function () {
  ///modal
  let candidateList = {
    clothes: "",
    hair: "",
    skin: "",
    name: "",
    age: "",
    sex: "",
    viws: "",
    biography: "",
  };
  let overlay = document.querySelector(".overlay");
  let popupBtn = document.querySelector(".popup-btn");
  let custom = document.querySelector(".custom");
  let customInfo = document.querySelector(".custom-info");
  let customChar = document.querySelector(".custom-char");
  let customStyle = document.querySelector(".custom-style");
  let main = document.querySelector(".main");
  const indexesLimit = {
    skin: {
      male: {
        max: 2,
        min: 0,
      },
      female: {
        max: 2,
        min: 0,
      },
    },
    hair: {
      male: {
        max: 2,
        min: 0,
      },
      female: {
        max: 5,
        min: 3,
      },
    },
    clothes: {
      male: {
        max: 2,
        min: 0,
      },
      female: {
        max: 5,
        min: 3,
      },
    },
  };

  popupBtn.addEventListener("click", function () {
    overlay.style.display = "none";
    document.body.style.overflow = "hidden";
    main.classList.add("animate__zoomOut");
    setTimeout(() => {
      main.style.display = "none";
    }, 500);

    function modalChange() {
      //custom.classList.add('bounceInUp');
      customInfo.classList.add("animate__backInDown");
      customChar.classList.add("animate__backInUp");
      customStyle.classList.add("animate__backInDown");
      customInfo.style.display = "block";
      custom.style.display = "flex";
      customChar.style.display = "block";
      customStyle.style.display = "block";
    }
    modalChange();

    const skinSlider = document.querySelector(".skin");
    const hairSlider = document.querySelector(".hair");
    const clothesSlider = document.querySelector(".clothes");
    const person = document.querySelector(".person");
    const personSkin = person.querySelector(".person-skin");
    const personClothes = person.querySelector(".person-clothes");
    const personHair = person.querySelector(".person-hair");
    let gender = "male";
    const female = document.getElementById("female");
    const male = document.getElementById("male");
    let skinIndex = 0;
    let hairIndex = 0;
    // let card = document.querySelector(".main-cards-item");
    // let cardCopy = card.cloneNode(true);
    // let candidateSex = cardCopy.querySelector(".sex");

    // female.addEventListener('click', function() {
    //     personSkin.style.background = `url("../img/skin/skin-4.png") center no-repeat`;
    //     personSkin.style.backgroundSize = "cover";
    //     personSkin.style.background = `url("../img/skin/skin-${currentIndex + 1}.png") center no-repeat`;
    //     personSkin.style.backgroundSize = "cover";
    // });
    // class Slider {
    //     constructor(sliderClass, )
    // }

    const changeSkin = (currentIndex) => {
      const imageNumber = gender === "female" ? skinIndex + 3 : skinIndex;
      personSkin.style.background = `url("../img/skin/skin-${imageNumber}.png") center no-repeat`;
      personSkin.style.backgroundSize = "cover";
    };
    const changeHair = (index) => {
      const background = `url("../img/hair/construct/hair-${
        index + 1
      }.png") center no-repeat`;
      candidateList.hair = background;
      personHair.style.background = background;
      personHair.style.backgroundSize = "cover";
    };
    const changeClothes = (index) => {
      personClothes.style.background = `url("../img/clothes/construct/clothes-${
        index + 1
      }.png") center no-repeat`;
      personClothes.style.backgroundSize = "cover";
    };

    makeSlider(
      skinSlider,
      (currentIndex) => {
        skinIndex = currentIndex + 1;

        changeSkin(currentIndex);
      },
      "skin"
    );

    const heirSlider = makeSlider(
      hairSlider,
      (currentIndex) => {
        hairIndex = currentIndex + 1;

        changeHair(currentIndex);
        // personHair.style.background = `url("../img/hair/construct/hair-${currentIndex + 1}.png") center no-repeat`;
        // personHair.style.backgroundSize = "cover";
      },
      "hair"
    );

    const clothe = makeSlider(
      clothesSlider,
      (currentIndex) => {
        clothesIndex = currentIndex + 1;

        changeClothes(currentIndex);
        // personClothes.style.background = `url("../img/clothes/construct/clothes-${
        //   currentIndex + 1
        // }.png") center no-repeat`;
        // personClothes.style.backgroundSize = "cover";
      },
      "clothes"
    );

    female.addEventListener("click", function () {
      gender = "female";
      changeSkin(indexesLimit.skin[gender].min);
      changeHair(indexesLimit.hair[gender].min);
      heirSlider.setActive(indexesLimit.hair[gender].min);
      changeClothes(indexesLimit.clothes[gender].min);
      clothe.setActive(indexesLimit.clothes[gender].min);
    });
    male.addEventListener("click", function () {
      gender = "male";
      changeSkin(indexesLimit.skin[gender].min);
      changeHair(indexesLimit.hair[gender].min);
      heirSlider.setActive(indexesLimit.hair[gender].min);
      changeClothes(indexesLimit.clothes[gender].min);
      clothe.setActive(indexesLimit.clothes[gender].min);
      // candidateSex.textContent = "мужик";
    });

    function makeSlider(slider, callback = () => {}, type) {
      const sliderWrapper = slider.querySelector(".slides");
      const sliderItem = sliderWrapper.querySelectorAll("div");
      const prev = slider.querySelector(".prev");
      const next = slider.querySelector(".next");

      let slideIndex = indexesLimit[type][gender].min;

      prev.addEventListener("click", function () {
        if (slideIndex <= indexesLimit[type][gender].min) {
          slideIndex = indexesLimit[type][gender].max;
        } else {
          slideIndex--;
        }
        showOnlySlideCurrent(sliderItem, slideIndex);
        callback(slideIndex);
      });

      next.addEventListener("click", function () {
        if (slideIndex >= indexesLimit[type][gender].max) {
          slideIndex = indexesLimit[type][gender].min;
        } else {
          slideIndex++;
        }

        showOnlySlideCurrent(sliderItem, slideIndex);
        callback(slideIndex);
      });
      showOnlySlideCurrent(sliderItem, slideIndex);
      // let n = slideIndex;

      callback(slideIndex);
      return {
        setActive(index) {
          slideIndex = index;
          showOnlySlideCurrent(sliderItem, index);
        },
      };
    }

    function showOnlySlideCurrent(sliderItems, n) {
      sliderItems.forEach((elem, index) => {
        if (n === index) {
          elem.style.display = "block";
        } else {
          elem.style.display = "none";
        }
      });
    }

    // let n = slideIndex;

    //     function showOnlySlideCurrent() {
    //         if (n > sliderItem.length) {
    //             slideIndex = 1;
    //         }
    //         if (n < 1) {
    //             slideIndex = sliderItem.length;
    //         };

    //         for ( let i = 0; i < sliderItem.length; i++) {
    //             sliderItem[i].style.display = 'none';
    //         };

    //         sliderItem[slideIndex - 1].style.display = 'block';
    //     }

    //  showOnlySlideCurrent();
  });

  const ready = document.getElementById("ready");

  ready.addEventListener("click", function () {
    main.classList.remove("animate__zoomOut");
    main.classList.add("animate__zoomIn");

    // custom.classList.add('')
    setTimeout(() => {
      main.style.display = "block";
    }, 500);

    function modalHide() {
      //custom.classList.add('bounceInUp');
      customInfo.classList.add("animate__backOutDown");
      customChar.classList.add("animate__backOutUp");
      customStyle.classList.add("animate__backOutDown");
      customInfo.style.display = "none";
      custom.style.display = "none";
      customChar.style.display = "none";
      customStyle.style.display = "none";
    }
    modalHide();

    let mainCards = document.querySelector(".main-cards");
    //  let newCandidate = document.createElement('div');
    //  newCandidate.classList.add('main-cards-item');

    let card = mainCards.querySelector(".main-cards-item");
    let cardCopy = card.cloneNode(true);
    let writeName = document.getElementById("name");
    let candidateName = cardCopy.querySelector(".name");
    let writeAge = document.getElementById("age");
    let candidateAge = cardCopy.querySelector(".age");
    let writeBio = document.getElementById("bio");
    let candidateBio = cardCopy.querySelector(".bio");
    let candidateSex = cardCopy.querySelector(".sex");
    let radio = document.querySelector(".radio");
    let chooseSex = radio.querySelector("input:checked");
    let person = document.querySelector(".mockup");
    let personPhoto = person.cloneNode(true);
    let candidatePhoto = cardCopy.querySelector(".photo");

    let select = document.getElementById("select");
    let choosePolitic = select.querySelector("option:checked");

    let candidateView = cardCopy.querySelector(".views");
    let progressBar_1 = document.querySelector(".progress-bar-1");
    let progressBar_2 = document.querySelector(".progress-bar-2");
    let candidateResult = cardCopy.querySelector(".result");
    let progress = candidateResult.querySelector(".progress");
    let progressBar_3 = progress.querySelector(".progress-bar-1");
    let resultCount_1 = document.querySelectorAll(".result-count")[0];
    let resultCount_2 = document.querySelectorAll(".result-count")[1];
    let resultCount_3 = candidateResult.querySelector(".result-count");
    let voting = document.getElementById("voting");
    let newElement = mainCards.querySelector(".main-cards-item-new");
    // let reset = document.getElementById("reset");

    console.log(resultCount_1);
    console.log(resultCount_2);

    if (newElement) {
      mainCards.removeChild(newElement);
    }

    cardCopy.classList.add("main-cards-item-new");
    mainCards.appendChild(cardCopy);

    candidateName.textContent = writeName.value;
    candidateAge.textContent = writeAge.value;
    candidateBio.textContent = writeBio.value;
    candidateSex.textContent = chooseSex.value;
    candidateView.textContent = choosePolitic.value;
    personPhoto.classList.remove("mockup");
    candidatePhoto.appendChild(personPhoto);
    candidatePhoto.classList.remove("photo-1");

    // unnesesary.style.display = "none";
    //голосування

    // console.log(progressBar_3);
    resultCount_1.textContent = progressBar_1.style.height = "0";
    resultCount_2.textContent = progressBar_2.style.height = "0";
    resultCount_3.textContent = progressBar_3.style.height = "0";

    voting.addEventListener("click", function () {
      const getRondomPersent = (count) => {
        const data = Array(count)
          .fill(null)
          .map((_) => {
            return Math.floor(Math.random() * 101);
          });
        const sum = data.reduce((acc, elem) => {
          acc = acc + elem;
          return acc;
        }, 0);

        return data.map((elem) => {
          return ((elem * 100) / sum).toFixed(1);
        });
      };
      const persents = getRondomPersent(3);
      resultCount_1.textContent = progressBar_1.style.height = `${persents[0]}%`;
      resultCount_2.textContent = progressBar_2.style.height = `${persents[1]}%`;
      resultCount_3.textContent = progressBar_3.style.height = `${persents[2]}%`;
      const reset = document.getElementById("reset");

      reset.addEventListener("click", function () {
        // overlay.style.display = "none";
        // document.body.style.overflow = "hidden";
        main.classList.add("animate__zoomOut");
        setTimeout(() => {
          main.style.display = "none";
        }, 500);

        function resetChange() {
          //custom.classList.add('bounceInUp');
          customInfo.classList.add("animate__fadeInDown");
          customChar.classList.add("animate__fadeInUp");
          customStyle.classList.add("animate__fadeInDown");
          customInfo.style.display = "block";
          custom.style.display = "flex";
          customChar.style.display = "block";
          customStyle.style.display = "block";
        }
        resetChange();
      });

      let crime = document.getElementById("crime");

      crime.addEventListener("click", function () {
        function inDebates() {
          resultCount_1.textContent = progressBar_1.style.height = `${
            persents[0] - 15
          }%`;

          // // class Rectangle {
          //   constructor(height) {
          //     this.height = `${persents[1] - 10}%`;
          //   }
          // }

          progressBar_2.style.height = `${persents[1] - 10}%`;
          progressBar_3.style.height = `${persents[2] + 25}%`;

          // class Rectangle {
          //   constructor(height) {
          //     this.height = '-10%';
          //   }
          // }
        }
        inDebates();
        //   const cheating = () => {
        //     progressBar_3.style.height = progressBar_3.style.height + "25%";
        //     return progressBar_3.style.height;

        //   };

        //   cheating();

        // const culculate = () => {
        //   progressBar_2.style.height + progressBar_3.style.height - 25% =
        // };
      });
    });

    // resultCount_1.textContent = "0%";
    // resultCount_2.textContent = "0%";
    // resultCount_3.textContent = "0%";
    // const reset = document.getElementById("reset");

    // reset.addEventListener("click", function () {
    //   // overlay.style.display = "none";
    //   // document.body.style.overflow = "hidden";
    //   main.classList.add("animate__zoomOut");
    //   setTimeout(() => {
    //     main.style.display = "none";
    //   }, 500);

    //   function resetChange() {
    //     //custom.classList.add('bounceInUp');
    //     customInfo.classList.add("animate__fadeInDown");
    //     customChar.classList.add("animate__fadeInUp");
    //     customStyle.classList.add("animate__fadeInDown");
    //     customInfo.style.display = "block";
    //     custom.style.display = "flex";
    //     customChar.style.display = "block";
    //     customStyle.style.display = "block";
    //   }
    //   resetChange();

    // });
  });

  // const reset = document.getElementById("reset");

  // reset.addEventListener("click", function () {
  //   // overlay.style.display = "none";
  //   // document.body.style.overflow = "hidden";
  //   main.classList.add("animate__zoomOut");
  //   setTimeout(() => {
  //     main.style.display = "none";
  //   }, 500);

  //   function resetChange() {
  //     //custom.classList.add('bounceInUp');
  //     customInfo.classList.add("animate__fadeInDown");
  //     customChar.classList.add("animate__fadeInUp");
  //     customStyle.classList.add("animate__fadeInDown");
  //     customInfo.style.display = "block";
  //     custom.style.display = "flex";
  //     customChar.style.display = "block";
  //     customStyle.style.display = "block";
  //   }
  //   resetChange();
  // });

  // let crime = document.getElementById("crime");

  // crime.addEventListener("click", function () {
  //   function inDebates() {
  //     resultCount_1.textContent = progressBar_1.style.height = `${persents[0]}% - 10%`;
  //     resultCount_2.textContent = progressBar_2.style.height = `${persents[1]}% - 10%`;
  //     resultCount_3.textContent = progressBar_3.style.height = `${persents[2]}% + 25%`;
  //   }
  //   inDebates();
  //   //   const cheating = () => {
  //   //     progressBar_3.style.height = progressBar_3.style.height + "25%";
  //   //     return progressBar_3.style.height;

  //   //   };

  //   //   cheating();

  //   // const culculate = () => {
  //   //   progressBar_2.style.height + progressBar_3.style.height - 25% =
  //   // };
  // });
});
