import circle from "../../assets/icons/ellipse.svg";
import dayjs from "dayjs";

function ReminderItem({reminder}) {

    const calculateTimeLeft = (date_created) => {
        const time_params = ['year', 'month', 'day', 'hour', 'minute', 'second']
        const date = new Date(date_created)
        let today = new Date()
        let task_due = dayjs(date)
        today = dayjs(today)

        if (today.day() === task_due.day()){
            return `${date.toLocaleDateString()} (Today)`
        }else if(today.diff(task_due, "day") === 1){
            return `${date.toLocaleDateString()} (Yesterday)`
        }else if(today > task_due){
            for(let i = 0; i < time_params.length; i++){
                let duration = today.diff(task_due, time_params[i])
                if (duration === 0){
                    continue
                }
                else if(duration === 1){
                    return `${date.toLocaleDateString()} (${duration} ${time_params[i]} ago)`
                }else{
                    return `${date.toLocaleDateString()} (${duration} ${time_params[i]}s ago)`
                }
                
            }
        }
    }

  return (
    <div className="reminder-item">
        <div className="icon">
            <img src={circle} alt="circle"/>
            <div className="line"></div>
        </div>
        <div className="content">
            <div className="date">{calculateTimeLeft(reminder?.date)}</div>
            <div className="reminder">{reminder?.reminder}</div>
        </div>
    </div>
  )
}

ReminderItem.defaultProps = {
    reminder: {
        pk: 1,
        reminder: "Get approval for list dropped by the Pharmacy General meeting by 3pm at room 010",
        date: '20/10/2023'        
    }
}

export default ReminderItem