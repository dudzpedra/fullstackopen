import s from './Notification.module.css'

const Notification = ({ msg }) => {
    if (msg === null) return null
    return (
        <div className={s.notification}>
            {msg}    
        </div>
    )
}

export default Notification