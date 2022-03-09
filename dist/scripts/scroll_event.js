console.log("Is this even working")
var wrapper = document.getElementById('wrapper')
var scroll_btn = document.getElementsByClassName('scroll-btn')[0]
var title_content = document.getElementsByClassName('title-content')[0]

var about_title = document.getElementById('about-title');
var content = document.getElementById('cotnet');

console.log(title_content)

wrapper.onscroll = function() {
    var scroll_top = wrapper.scrollTop
    var scroll_height = wrapper.scrollHeight - wrapper.clientHeight - 100
    var title_height = about_title.offsetHeight;
    var title_top = about_title.offsetTop;
    var content_height = content.offsetHeight || null;
    var content_top = content.offsetTop || null;
    var mobile = false;
    if (wrapper.clientWidth < 600) {mobile = true}
    console.log('-----------------------------');
    console.log(`Scroll Top: ${scroll_top}`);
    console.log(`Scroll Height: ${scroll_height}`);
    console.log(`Title Height: ${title_height}`);
    console.log(`Title Top: ${title_top}`);
    console.log(`Content Height: ${content_height}`);
    console.log(`Contnet Top: ${content_top}`);
    

    if ( title_top - scroll_top < 30 ){
        console.log("Scrolling")
        scroll_btn.classList.add('animated');

        title_content.style.transform = `translateY(${scroll_top - (title_top - 30)}px)`;

        if ( scroll_top > scroll_height || mobile ) {
             //On mobile want this to happen earlier
            console.log("END Scrolling")
            scroll_btn.style.opacity = '0';
            about_title.classList.add('title-msg-md');
            about_title.classList.remove('title-msg-lg');
            //about_title.style.fontSize = "7rem";
            about_title.innerHTML = "about me";
        }
    } else {
        scroll_btn.classList.remove('animated');
        scroll_btn.style.opacity = '1';
        about_title.classList.add('title-msg-lg');
        about_title.classList.remove('title-msg-md');
        about_title.innerHTML = "About me"
        //about_title.style.fontSize = "10rem";
    }
    /*
    if (scroll_top > 290) {
        scroll_btn.classList.add('animated');

        if(scroll_top > scroll_height) {
            scroll_btn.style.opacity = '0';
            about_title.style.fontSize = "7em";
            about_title.innerHTML = "about me";
            title_content.style.transition = 'all 0.05s ease-in-out';
            title_content.style.transform = `translateY(${scroll_top-290}px)`;
        } else {
            title_content.style.transform = `translateY(${scroll_top-290}px)`;
            about_title.innerHTML = "About me";
            title_content.style.transition = 'none';
        }
    } else {
        scroll_btn.style.opacity = '1';
        about_title.style.fontSize = "10em";
        scroll_btn.classList.remove('animated');
    }
    */

}