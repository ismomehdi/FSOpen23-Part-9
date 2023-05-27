import { NotificationComponentProps } from "../types";

const Notification = (props: NotificationComponentProps) => {
    return <p style={{color: 'red'}}>{props.notification}</p>
}

export default Notification;