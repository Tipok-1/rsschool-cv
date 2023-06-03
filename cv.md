# Chaburko Timofei

### My Contact info:
+ __Phone:__ _+375(29) 553-92-54_
+ __Telegram:__ [@timofei_chaburko](https://t.me/timofei_chaburko)
+ __E-mail:__ _tima.chaburko@mail.ru_
+ __Location:__ Brest Belarus

___
### About Me:

I live and study in Belarus, in the city of Brest. I am a 3rd year student majoring in computer physics. I started learning programming 2.5 years ago. and now, it seems, I finally decided that I would work in the field of web development.

My interest in programming is due to the desire to develop in the field of IT and learn a lot of new things.

My goal is to become a full stack javascript developer in the future. In achieving this goal, my focus and desire to learn new technologies will help me.


___
### Skills:
- HTML5, CSS3
- JS, TS
- Webpack
- React (Redux, MobX)
- Preprocessors SASS/SCSS
- C++ (QT)
- Git, GitHub
- Adobe Photoshop, Figma 

___

### Education:
`Brest State University named after A.S. Pushkin`

### Code example:
```javascript
    let images = document.querySelectorAll(".images");
    images.forEach(
    image=>{
        image.addEventListener("click", ()=>{
            description.innerHTML = '';
            lightbox.classList.add('active');
            while(swiper_wrapper.firstChild)
            {
                swiper_wrapper.removeChild(swiper_wrapper.firstChild);
            }

            let arr = image.querySelectorAll('img');
            for(let i = 0; i <arr.length;i++)
            {
                let swiper_slide= document.createElement('div');
                let swiper_lazy_preloader= document.createElement('div');
                let img =  document.createElement('img');

                img.setAttribute('data-src',arr[i].src);
                img.draggable = false;
                img.classList.add('swiper-lazy');

                swiper_lazy_preloader.classList.add('swiper-lazy-preloader');
                swiper_slide.classList.add('swiper-slide');

                swiper_slide.appendChild(img);
                swiper_slide.appendChild(swiper_lazy_preloader);

                swiper_wrapper.appendChild(swiper_slide);

            }
            info.innerHTML = image.querySelector('.image_info').innerHTML;
            hide_scroll(true);
        })
    }
)
```
___

### Courses:
1. __JavaScript__ Manual on [learnjavascript.ru ](https://learn.javascript.ru/)
2. __CSS, HTML__ video course
3. __Typescript__ video course
4. __RS SCHOOL__ course [сертификат об окончании](https://app.rs.school/certificate/s0fzrtsm)
5. __C++__
    + C++ manual on [ravesli.com](https://ravesli.com/uroki-cpp/)
    + C++(QT) manual on [ravesli.com](https://ravesli.com/uroki-po-qt5/)



### Languages:
+ English - A2
+ Russian - Native
