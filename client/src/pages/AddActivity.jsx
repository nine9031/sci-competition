import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import activityService from "../services/activity.services";

const AddActivity = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await activityService.createActivity({ title, description, date });
      navigate("/activities");
    } catch (err) {
      setError("เกิดข้อผิดพลาดในการเพิ่มกิจกรรม");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-activity-page">
      <h2>เพิ่มกิจกรรมใหม่</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ชื่อกิจกรรม</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>รายละเอียด</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>วันที่จัดกิจกรรม</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? "กำลังบันทึก..." : "บันทึกกิจกรรม"}
        </button>
      </form>
    </div>
  );
};

export default AddActivity;
