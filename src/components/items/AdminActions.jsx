import noPfp from '../../assets/icons/no_pfp.svg'

function AdminActions() {
  return (
    <div className='admin-actions'>
        <div title='Messages' className='msgs'>
            <i className="fa-regular fa-envelope fa-xl"></i>
        </div>
        <div title='Notifications' className='notifs'>
            <i className="fa-regular fa-bell fa-xl"></i>
        </div>
        <div className='user'>
            <div className="pfp">
                <img src={noPfp} alt="no profile pic" />
            </div>
            <div className='info'>
                <div className="users_name">
                    Hanana Lawal
                </div>
                <div className='user_type'>
                    Admin
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminActions