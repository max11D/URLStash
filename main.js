var config = {
  logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAAACXBIWXMAAXEYAAFxGAHswbAIAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzYwLCAyMDIwLzAyLzEzLTAxOjA3OjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTEwLTExVDE5OjI5OjI4LTA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNS0zMFQyMzoyMDoxNC0wNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wNS0zMFQyMzoyMDoxNC0wNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpiNWZlNThhYy0wMTU3LTM2NDQtYjMxZC1jYzAzNThiN2ViZDMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2MmQ0ODQyZC03OWY4LWQ5NGQtOTBjMy01MDU2YjgyNDJjMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3Yzc1MGY4Ni1kYzhkLThkNDMtOGNkNS1jMjVhZWJhMzc2M2EiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjdjNzUwZjg2LWRjOGQtOGQ0My04Y2Q1LWMyNWFlYmEzNzYzYSIgc3RFdnQ6d2hlbj0iMjAxOS0xMC0xMVQxOToyOToyOC0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiNWZlNThhYy0wMTU3LTM2NDQtYjMxZC1jYzAzNThiN2ViZDMiIHN0RXZ0OndoZW49IjIwMjAtMDUtMzBUMjM6MjA6MTQtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz40dGvTAAAWr0lEQVR42u2deVRV1dvHD4gyySwIKoqYMl0QwXAgEYf3tRJzSk1XoUvNfjgrCKklpSaSOGGaCAo2sDRQVBRn04B7L1zgojLIZIioJAjKLIO9Rynz/VVOnLPPvvd+P+v+EbVW6+zneT7n7L3P2XszvwOgwjAIAYAAAEAAACAAABAAAAgAAAQAAAIAAAEAgAAAQAAAIAAAEAAACAAABAAAAgAAAQCAAABAAAAgAAAQAAAIAAAEAAACAAABAIAAAEAAACAAABBAVaitrS0oKJBIJBee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",
  logoAlt: "CDS Logo",
  name: "Committee for Disabled Students<br>of Queens&nbsp;College",
  htmlName: true,
  links: [
    {
      title: "Website",
      htmlTitle: true,
      destination: "https://qc-cds.org"
    }, {
      title: "Discord Server",
      htmlTitle: true,
      destination: "https://discord.com/invite/ccm4Xx2"
    }, {
      title: "Nothing is Missing",
      htmlTitle: true,
      destination: "https://nothingismissing.home.blog/"
    }
  ],
  socialLinks: [
    ["instagram", "https://instagram.com/queenscollege.cds"],
    ["facebook", "https://facebook.com/queenscollege.cds"],
    ["twitter", "https://twitter.com/QC_CDS"],
    ["tumblr", "https://blog.qc-cds.org"],
    ["linkedin", "https://www.linkedin.com/company/committee-for-disabled-students-of-queens-college/"]
  ]
}

function setHead(config) {
  if (config.logo && config.logoAlt) {
    var logo = document.getElementById("logo");
    logo.src = config.logo;
    logo.alt = config.logoAlt;    
    logo.classList.remove("hidden")
  } else {
    alert("Please include logo alt text");
  }
  
  if (config.name)
    var name = document.getElementById("name");
    if (config.htmlName)
      name.innerHTML = config.name;
    else
      name.innerText = config.name;
}

function createLinkNode(data) {
  var container = document.createElement("a");
  container.href = data.destination;
  container.target = data.target || "";
  container.classList.add("stash-url")
  
  var par = document.createElement("p");
  if (data.htmlTitle)
    par.innerHTML = data.title;
  else
    par.innerText = data.title;
  
  if (data.src) {
    if (data.alt) {
      var img = document.createElement("img");
      img.classList.add("link-image");
      img.src = data.src;
      img.alt = data.alt;
      container.appendChild(img);
    } else {
      alert("Include image alt text for \"" + data.title + "\"")
    }
  }
  
  container.appendChild(par);
  document.getElementById("link-list").appendChild(container);
}

function createSocialLinks(data) {
  var s = document.getElementById("social-links");
  
  data.forEach(function(data) {
    var a = document.createElement("a");
    a.classList.add("social-icon");
    a.classList.add(data[0].toLowerCase());
    a.href = data[1];
    a.target = data[0];
    a.innerText = " ";
    a.setAttribute("aria-label", data[0])
    s.appendChild(a);
  });
}

setHead(config);

config.links.forEach(function(data) {
  createLinkNode(data);
});

createSocialLinks(config.socialLinks)
