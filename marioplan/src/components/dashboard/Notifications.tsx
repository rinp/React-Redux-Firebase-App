import React, { FC } from "react";
import moment from "moment";

type Notifications = {
  id: string;
  content: string;
  user: string;
  time: firebase.firestore.Timestamp;
}[];
export const Notifications: FC<{ notifications: Notifications }> = ({
  notifications,
}) => {
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="online-users">
            {notifications &&
              notifications.map(item => {
                return (
                  <li key={item.id}>
                    <span className="pink-text">{item.user} </span>
                    <span>{item.content}</span>
                    <div className="note-date grey-text">
                      {moment(item.time.toDate()).fromNow()}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};
