// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";

import { fetchMessages } from "@/lib/actions/messages";

export default async function MessagesPage() {
  const messages = await fetchMessages();

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Messages</h2>

      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <ul className="space-y-4">
          {messages.map((message) => (
            <li
              key={message.id}
              className={`p-4 border rounded-lg ${
                message.isRead ? "bg-gray-100" : "bg-white"
              }`}
            >
              <h3 className="font-bold text-lg">{message.name}</h3>
              <p className="text-gray-600">{message.email}</p>
              <p className="text-gray-600">{message.phone}</p>
              <p className="mt-2">{message.message}</p>
              {/* <div className="flex items-center justify-end space-x-2 mt-4">
                <Button
                  variant="secondary"
                  onClick={async () => {
                    if (message.isRead) {
                      await markMessageAsUnread(message.id);
                    } else {
                      await markMessageAsRead(message.id);
                    }
                    window.location.reload();
                  }}
                >
                  {message.isRead ? "Mark as Unread" : "Mark as Read"}
                </Button>
                <Button
                  variant="destructive"
                  onClick={async () => {
                    await deleteMessage(message.id);
                    window.location.reload();
                  }}
                >
                  Delete
                </Button>
              </div> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
