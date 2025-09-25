import React from "react";

const ActivityCard = ({ activity }) => {
  return (
    <div
      className="activity-card"
      style={{
        border: "1px solid #eee",
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        boxShadow: "0 2px 8px #f0f0f0",
      }}
    >
      <h3 style={{ margin: "0 0 8px 0" }}>{activity.title}</h3>
      <p style={{ color: "#555", marginBottom: 8 }}>{activity.description}</p>
      <div style={{ fontSize: 14, color: "#888", marginBottom: 4 }}>
        <span>วันที่: {activity.date}</span>
        {activity.organizer && <span> | ผู้จัด: {activity.organizer}</span>}
        {activity.location && <span> | สถานที่: {activity.location}</span>}
      </div>
    </div>
  );
};

export default ActivityCard;
