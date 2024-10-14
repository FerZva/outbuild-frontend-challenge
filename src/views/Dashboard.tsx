import { useFetch } from "../services/useFetch";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import Modal from "../components/Modal";

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

const Dashboard = () => {
  const { data } = useFetch<Comment[]>(
    "https://jsonplaceholder.typicode.com/comments"
  );

  const [selectedComment, setSelectedComment] = useState<Comment | null>(null);

  const openModal = (comment: Comment) => {
    setSelectedComment(comment);
  };

  const closeModal = () => {
    setSelectedComment(null);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-container_table-section">
        <table className="dashboard-container_table-section_table">
          <thead className="dashboard-container_table-section_table_head">
            <tr className="dashboard-container_table-section_table_head_column-container">
              <th className="dashboard-container_table-section_table_head_column-container_column">
                ID
              </th>
              <th className="dashboard-container_table-section_table_head_column-container_column">
                Name
              </th>
              <th className="dashboard-container_table-section_table_head_column-container_column">
                Email
              </th>
              <th className="dashboard-container_table-section_table_head_column-container_column">
                Body
              </th>
            </tr>
          </thead>
          <tbody className="dashboard-container_table-section_table_body">
            {data?.map((comment) => (
              <tr
                key={comment.id}
                className="dashboard-container_table-section_table_body_row-container"
              >
                <td className="dashboard-container_table-section_table_body_row-container_row">
                  <strong>{comment.id}</strong>
                </td>
                <td className="dashboard-container_table-section_table_body_row-container_row">
                  <strong>{comment.name}</strong>
                </td>
                <td className="dashboard-container_table-section_table_body_row-container_row">
                  <strong>{comment.email}</strong>
                </td>
                <td className="dashboard-container_table-section_table_body_row-container_row">
                  <AiFillEye
                    onClick={() => openModal(comment)}
                    className="dashboard-container_table-section_table_body_row-container_row_show-button"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedComment && (
        <Modal comment={selectedComment} onClose={closeModal} />
      )}
    </div>
  );
};

export default Dashboard;
