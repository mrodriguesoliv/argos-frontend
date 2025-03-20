import React from "react";

interface FilePopupProps {
  file: any;
  onClose: () => void;
}

const FilePopup: React.FC<FilePopupProps> = ({ file, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-xl font-bold">{file.name}</h2>
        <p><strong>Created By:</strong> {file.created_by.name}</p>
        <p><strong>Created At:</strong> {new Date(file.created_at).toLocaleString()}</p>
        <p><strong>Size:</strong> {file.size} bytes</p>
        <p><strong>Extension:</strong> {file.extension}</p>
        <p><strong>Status:</strong> {file.reading_status}</p>
        <p><strong>Link:</strong> {file.Link}</p>


        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default FilePopup;
