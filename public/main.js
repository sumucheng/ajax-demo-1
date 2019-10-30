//加载CSS
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");

  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement("style"); //创建style标签
        style.innerHTML = request.response; //填写style内容
        document.head.appendChild(style); //插入head
      } else {
        alert("加载失败");
      }
    }
  };
  request.send();
};

//加载JS
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");

  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const script = document.createElement("script"); //创建script标签
        script.innerHTML = request.response; //填写script内容
        document.head.appendChild(script); //插入head
        const div3 = document.createElement("div");
        div3.innerText = "you clicked getJS button";
        div3.setAttribute("style", "color:green");
        document.body.appendChild(div3);
      } else {
        alert("加载失败");
      }
    }
  };
  request.send();
};

//加载HTML
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const div = document.createElement("div"); //创建div标签
        div.innerHTML = request.response; //填写div内容
        div.setAttribute("style", "margin-bottom:10px");
        document.body.appendChild(div); //插入body
      } else {
        alert("加载失败");
      }
    }
  };

  request.send();
};

//加载XML
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");

  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        const div2 = document.createElement("div");
        div2.innerText = text;
        div2.setAttribute("style", "color:red");
        document.body.appendChild(div2);
      } else {
        alert("加载失败");
      }
    }
  };

  request.send();
};

//加载JSON
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");

  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const object = JSON.parse(request.response);
        myName.textContent = object.name;
      } else {
        alert("加载失败");
      }
    }
  };

  request.send();
};

//点击加载分页
let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", `/page${n + 1}.json`);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const array = JSON.parse(request.response);
        array.forEach(element => {
          const li = document.createElement("li");
          li.textContent = element.id;
          xxx.appendChild(li);
        });
        n += 1;
      }
    }
  };
  request.send();
};
