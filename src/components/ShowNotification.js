import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt, faCheckCircle, faClipboardCheck } from "@fortawesome/free-solid-svg-icons"
 

function ShowNotification() {

  const notification = useSelector(state => state.notification)
  const showNotification = useSelector(state => state.showNotification)

  const [notificationClassName, setNotificationClassName] = useState('hide')
  const [message, setMessage] = useState('Default Messaging')
  const [alertType, setAlertType] = useState('alertWarning')
  const [warningMessage, setWarningMessage] = useState('warningMessage')
  const [images, setImage] = useState(faClipboardCheck)
  const [icons, setIcons] = useState('add')

  const hide = () => {
    setTimeout(() => {
          setNotificationClassName('hide')
        },1500)
  }

  const doesShow = () => {
   
      notification.map(getValue => {
        switch (getValue.value) {
          case 'add':
            setNotificationClassName('show')
            setAlertType('alertWarning')
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
  }

  useEffect(() => {
    doesShow();
    return () => {
      
    }
  }, [notification])
  
  return (
    <div>{showNotification &&
      <div className={`${alertType} ${notificationClassName}`}>
        <div className={`icon${icons}`}><FontAwesomeIcon icon={images} className={icons} /></div>
        <div className={warningMessage}>{message}</div>      
      </div>
    }      
    </div>
  )
}

export default ShowNotification;

