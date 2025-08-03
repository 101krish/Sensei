import React from "react";

export function ToastNotification({ message, type = "success", onClose }) {
  return (
    <div className={`fixed bottom-4 right-4 p-4 rounded shadow-lg border z-50 flex items-center gap-3 animate-slide-up ${
      type === "error" ? "bg-red-50 border-red-200 text-red-800" : "bg-green-50 border-green-200 text-green-800"
    }`}>
      <span className="text-xs font-semibold">{message}</span>
      <button onClick={onClose} className="hover:opacity-75 text-sm font-bold">×</button>
    </div>
  );
}
