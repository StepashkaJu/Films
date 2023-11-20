function Footer() {//т.к. у footer-a нет никаких состояний, то делаем его функциональным компонентом, не классовым
  return  <footer className="page-footer deep-purple lighten-1">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Copyright Text
      <a className="grey-text text-lighten-5 right" href="#!">Repo</a>
      </div>
    </div>
  </footer>
}

export {Footer}