var e=document.querySelectorAll("li"),t=!0,l=!1,n=void 0;try{for(var r,o=e[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var a=r.value,c=a.childNodes[0];if(c.nodeType===Node.TEXT_NODE){var i=document.createElement("span");i.textContent=c.textContent.trim(),a.replaceChild(i,c)}}}catch(e){l=!0,n=e}finally{try{t||null==o.return||o.return()}finally{if(l)throw n}}document.querySelectorAll("span").forEach(function(e){e.addEventListener("click",function(){var t=e.parentElement.querySelector("ul");t&&("none"===t.style.display?t.style.display="block":t.style.display="none")})});
//# sourceMappingURL=index.6648b07a.js.map
