export default function Navbar({isOn}) {

  return (
    <nav className={isOn ? 'active absolute top-0 left-0 w-[100vw] h-[100vh] bg-back z-[800] navbar transition-transform duration-500 ease-in-out' : 'absolute top-0 left-0 w-[100vw] h-[100vh] bg-back z-[800] navbar transition-transform duration-500 ease-in-out'}>
      <ul>
        <li>Ana Sayfa</li>
        <li>Projelerim</li>
        <li>Hakkımda</li>
        <li>İletişim</li>
      </ul>
    </nav>
  )
}
