import { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

function LinkItem({link, icon, iconActive, iconName, path}) {
  const { pathname } = useLocation()
  const imgRef = useRef()

  const hover = () => {
    imgRef.current.src = iconActive;
  }

  const noHover = () => {
    imgRef.current.src = icon;
    
    if(pathname.includes(path)){
      imgRef.current.src = iconActive
    }
  }

  return (
    <Link className={`tool ${pathname.includes(path) ? 'active' : ''}`}
      onMouseOver={hover}
      onMouseOut={noHover}
      to={path}
    >
        <div>
            <img ref={imgRef} src={pathname.includes(path) ? iconActive : icon} alt={iconName} />
        </div>
        <p>
            {link}
        </p>
    </Link>
  )
}

export default LinkItem