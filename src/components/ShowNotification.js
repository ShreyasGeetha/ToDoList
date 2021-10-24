import React,{useEffect, useState} from 'react'
import tick from '../images/tick.png';
import error from '../images/error.png';
import Success from '../images/Success.png';
import warning from '../images/warning.png';
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt, faCheckCircle, faClipboardCheck } from "@fortawesome/free-solid-svg-icons"
 

function ShowNotification() {

const notification = useSelector(state => state.notification)

  const [notificationClassName, setNotificationClassName] = useState('hide')
  const [message, setMessage] = useState('Default Messaging')
  const [alertType, setAlertType] = useState('alertWarning')
  const [warningImage, setWarningImage] = useState('warningImage')
  const [warningMessage, setWarningMessage] = useState('warningMessage')
  const [images, setImage] = useState(faClipboardCheck)
  const [icons, setIcons] = useState('add')

  const hide = () => {
    setTimeout(() => {
          setNotificationClassName('hide')
        },1500)
  }

  const doesShow = () => {
    if (notification.length > 0) {
     
      notification.map(getValue => {
        switch (getValue.value) {
          case 'add':
            setNotificationClassName('show')
            setAlertType('alertWarning')
            setWarningImage('warningImage')
            setWarningMessage('warningMessage')
            setImage(faClipboardCheck)
            setIcons('Add')
            var str = `Added: ${getValue.msg} for ${getValue.date}`
            setMessage(str)
            hide();
            return;
          case 'completed':
            setNotificationClassName('show')
            setAlertType('alertCompleted')
            setWarningImage('completedImage')
            setWarningMessage('completedMessage')
            setImage(faCheckCircle)
            setIcons('Completed')
            var str = `Completed: ${getValue.listName} for ${getValue.date}`
            setMessage(str)
            hide();
            return;
          case 'deleted':
            setNotificationClassName('show')
            setAlertType('alertDeleted')
            setWarningImage('deletedImage')
            setWarningMessage('deletedMessage')
            setImage(faTrashAlt)
            setIcons('Deleted')
            console.log("delete item", notification)
            var str = `Deleted: ${getValue.listName} for ${getValue.date}`
            setMessage(str)
            hide();
            return;
          default: return;
        }
      })
    } else {
    document.getElementsByClassName('hide')[0].style.display = 'hidden';
    }
  }

  useEffect(() => {
    doesShow();
    return () => {
      
    }
  }, [notification])
  
  return (
    <div>
      <div className={`${alertType} ${notificationClassName}`}>
        {console.log('the icon is ',images)}
        <div className={`icon${icons}`}><FontAwesomeIcon icon={images} className={icons} /></div>
        <div className={warningMessage}>{message}</div>      
      </div>
    </div>
  )
}

export default ShowNotification;

