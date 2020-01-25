import React, { FC } from "react";
import moment from "moment";
import { Panel, Content } from "react-bulma-components";

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
    <Panel backgroundColor="light">
      <Panel.Header>Notifications</Panel.Header>
      {notifications &&
        notifications.map(item => {
          return (
            <Panel.Block key={item.id}>
              <Content>
                <h5>{item.user}</h5>
                <div>{item.content}</div>
                <div className="has-text-danger">
                  {moment(item.time.toDate()).fromNow()}
                </div>
              </Content>
            </Panel.Block>
          );
        })}
    </Panel>
  );
};
