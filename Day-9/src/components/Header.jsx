const Header = () =>{
    <div  classNAme="background">
    < div className="header">
  <nav class="navbar navbar-light bg-light justify-content-between">
  <div class="navbar-brand"><img className="img" src={potatoImage} alt=""/><h1 className="potato">PoTaTo</h1></div>
  <h2 className="head">HI,  {admin.email}! </h2>
  <form class="form-inline">
    <input className="search" type="search" placeholder="Search" aria-label="Search" />
    <button className="searchbtn" type="submit">Search</button>
    <div class="navbar-brand"><img className="img1" src={logOut} /><h1 className="logout">LogOut</h1></div>
  </form>
    </nav>
  </div>
  </div>
}