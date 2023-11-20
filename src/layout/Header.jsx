function Header () { //т.к. у header-a нет никаких состояний, то делаем его функциональным компонентом, не классовым
 return   <nav>
 <div className="nav-wrapper">
   <a href="#" className="brand-logo">React Films</a>
   <ul id="nav-mobile" className="right hide-on-med-and-down">
     <li><a href="collapsible.html">JavaScript</a></li>
   </ul>
 </div>
</nav>
}

export {Header}