import { pgTable, text, uuid, timestamp, boolean, integer, pgEnum } from 'drizzle-orm/pg-core';

export const fileExtensionEnum = pgEnum('extension', ['pdf', 'docx', 'txt', 'jpg', 'png']);
export const categoryEnum = pgEnum('category', ['work', 'personal', 'study']);
export const readingStatusEnum = pgEnum('reading_status', ['unread', 'reading', 'completed']);

export const files = pgTable('files', {
    external_id: uuid('external_id').defaultRandom().notNull().unique(),
    name: text('name').notNull(),
    active: boolean('active').notNull(),
    created_at: timestamp('created_at').notNull(),
    deleted_at: timestamp('deleted_at'),
    created_by: uuid('created_by'),
    deleted_by: uuid('deleted_by'),
    folder: uuid('folder'),
    extension: fileExtensionEnum('extension').notNull(),
    category: categoryEnum('category').notNull(),
    size: integer('size').notNull(),
    reading_percentage: integer('reading_percentage').notNull(),
    reading_status: readingStatusEnum('reading_status').notNull(),
    link: text('link').notNull()
});
