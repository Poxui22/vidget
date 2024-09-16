function Wbb(hash) {
  this.hash = null;
  // this.height = 400;
  // this.height = window.innerHeight;

  this.url_wiget = "https://app.broni.biz/wd/";
  this.url_style = "https://app.broni.biz/widgetbb.css";
  this.init = function init() {
    if (!hash) return;

    this.hash = hash;
    const iframe = document.createElement("iframe");
    iframe.src = this.url_wiget + hash;
    iframe.height = this.height;

    if (document.getElementById(this.hash)) {
      this.addStyle();
      document.getElementById(this.hash).appendChild(iframe);
    }
  };
  this.addStyle = function addStyle() {
    style = document.createElement("link");
    style.rel = "stylesheet";
    style.type = "text/css";
    style.href = this.url_style;
    document.head.appendChild(style);
  };
  // this.setHeightIframe = function setHeightIframe(event) {
  //   const iframe = document.getElementById(this.hash).firstChild;
  //   if (event.data.isForWidget && iframe) {
  //     this.height = event.data.height + 150;
  //     iframe.height = event.data.height + 150;
  //   }
  // };
}

function setHeightIframe(event) {
  console.log("WbbFirst:", event.origin, { document });
  const iframe = document.getElementById(event.data.hash)?.firstChild;
  if (iframe) {
    iframe.height = event.data.height; // + 300;
    // iframe.height = event.data.height + 150;
  }
}

if (window.addEventListener) {
  window.addEventListener("message", setHeightIframe);
} else {
  window.attachEvent("onmessage", setHeightIframe);
}