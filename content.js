console.log("Chrome extension go");

let paragraphs = document.getElementsByTagName("p");

for (const elt of paragraphs) {
  elt.style["background-color"] = "#FF00FF";
}

// let buttons = document.getElementsByClassName("e4an5uj0 tiktok-jubmfa-Button-StyledFollowButton ehk74z00");

// for (const button of buttons) {
//    button.click();
// }

(function (host) {
  var interval = 50000,
    i = 0;

  return {
    start: function () {
      let mydocuments = document.getElementsByClassName(
        "tiktok-b4uwjw-DivOneColumnContainer e108hwin0"
      );
      // console.log(videos[0].children[0].children[0].children[1].children[0].children[1]);
      let videos = mydocuments[0].children;
      console.log(videos);
      const element = videos[i];
      //   console.log(element.children[1].children[0]);
      //   console.log(element.children[1].children[0].children[1].textContent);
      if (element) {
        element.scrollIntoView();
        window.scrollBy(0, -50);
        // if (
        //   element.children[1]?.children[0]?.children[1]?.textContent ===
        //   "S'abonner"
        // ) {
          element.children[1].children[0].children[1].click();
          console.log("Abonné 👍");
        // }

        // console.log(
        // element.children[1].children[1].children[1].children[0].firstChild
        //   .childNodes[0].nodeName
        // );

        // if (
        //   element.children[1].children[1].children[1].children[0].firstChild
        //     .childNodes[0].nodeName === "svg"
        // ) {
          element.children[1].children[1].children[1].children[0].click();
          console.log("Like ❤️");
        // }
     
      }
         i++;
        if (i === 10) {
          window.location.reload();
        }
      //   element.children[0].children[0].children[1].children[0].children[1];
      // host.scrollBy(0, -150);

      host.setTimeout(arguments.callee, interval);
    },
  };
})(this).start();
