"use server";

import { prisma } from "../prisma";

export async function sendMessage(formData) {
  try {
    // Insert the contact message into the database
    const newMessage = await prisma.contactMessage.create({
      data: {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      },
    });

    return { success: true, newMessage };
  } catch (error) {
    console.error("Error saving contact message:", error);
    return { success: false, error: "Mesaj kaydedilirken bir hata oluştu." };
  }
}

// Fetch all messages
export async function fetchMessages() {
  return await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });
}

// Mark message as read
export async function markMessageAsRead(id) {
  return await prisma.contactMessage.update({
    where: { id },
    data: { isRead: true },
  });
}

// Mark message as unread
export async function markMessageAsUnread(id) {
  return await prisma.contactMessage.update({
    where: { id },
    data: { isRead: false },
  });
}

// Delete message
export async function deleteMessage(id) {
  return await prisma.contactMessage.delete({
    where: { id },
  });
}
