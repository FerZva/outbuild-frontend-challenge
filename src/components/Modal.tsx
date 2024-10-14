import React from "react";

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

interface ModalProps {
  comment: Comment;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ comment, onClose }) => {
  return (
    <div className="dashboard-container_modal-container">
      <div className="dashboard-container_modal-container_content">
        <div className="dashboard-container_modal-container_content_header">
          <h2 className="dashboard-container_modal-container_content_header_title">
            Comment Details
          </h2>
          <button
            onClick={onClose}
            className="dashboard-container_modal-container_content_header_button"
          >
            close
          </button>
        </div>
        <table className="dashboard-container_modal-container_content_table">
          <thead className="dashboard-container_modal-container_content_table_head">
            <tr className="dashboard-container_modal-container_content_table_head_row">
              <th className="dashboard-container_modal-container_content_table_head_row_column">
                ID
              </th>
              <th className="dashboard-container_modal-container_content_table_head_row_column">
                Name
              </th>
              <th className="dashboard-container_modal-container_content_table_head_row_column">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{comment.id}</td>
              <td>{comment.name}</td>
              <td>{comment.email}</td>
            </tr>
          </tbody>
        </table>
        <table className="dashboard-container_modal-container_content_table">
          <thead className="dashboard-container_modal-container_content_table_head dashboard-container_modal-container_content_table_head_body">
            <tr className="dashboard-container_modal-container_content_table_head_row dashboard-container_modal-container_content_table_head_body_row">
              <th className="dashboard-container_modal-container_content_table_head-row_column dashboard-container_modal-container_content_table_head_body_row_column">
                Body
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{comment.body}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Modal;
