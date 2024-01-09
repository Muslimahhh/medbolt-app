import AdminActions from "../items/AdminActions"
import BoltCode from "../items/BoltCode"
import SearchBox from "../items/SearchBox"

function Header() {
  return (
    <nav>
        <SearchBox/>
        <div>
          <BoltCode code={'CC1005'}/>
          <AdminActions/>
        </div>
    </nav>
  )
}

export default Header