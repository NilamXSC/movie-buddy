function getUser(){try{return JSON.parse(localStorage.getItem("mb_user")||"null")}catch{return null}}
function setUser(u){localStorage.setItem("mb_user",JSON.stringify(u))}
function syncAuthUI(){
  const user=getUser();
  document.querySelectorAll(".profile-slot").forEach(n=>n?.classList.toggle("hidden",!user));
  document.querySelectorAll(".auth-slot").forEach(n=>n?.classList.toggle("hidden",!!user));
}
document.addEventListener("DOMContentLoaded",()=>{
  syncAuthUI();
  const signupForm=document.getElementById("signup-form");
  const loginForm=document.getElementById("login-form");
  if(signupForm){
    signupForm.addEventListener("submit",e=>{
      e.preventDefault();
      const name=document.getElementById("signup-name").value.trim();
      const email=document.getElementById("signup-email").value.trim().toLowerCase();
      const password=document.getElementById("signup-password").value;
      const user={name,email,hash:btoa(password)};
      setUser(user);
      window.location.href="movies.html";
    });
  }
  if(loginForm){
    loginForm.addEventListener("submit",e=>{
      e.preventDefault();
      const email=document.getElementById("login-email").value.trim().toLowerCase();
      const password=document.getElementById("login-password").value;
      const existing=getUser();
      if(existing&&existing.email===email&&existing.hash===btoa(password)){
        window.location.href="movies.html";
      }else{
        const user={name:email.split("@")[0],email,hash:btoa(password)};
        setUser(user);
        window.location.href="movies.html";
      }
    });
  }
});