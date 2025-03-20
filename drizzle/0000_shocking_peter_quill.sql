CREATE TYPE "public"."category" AS ENUM('work', 'personal', 'study');--> statement-breakpoint
CREATE TYPE "public"."extension" AS ENUM('pdf', 'docx', 'txt', 'jpg', 'png');--> statement-breakpoint
CREATE TYPE "public"."reading_status" AS ENUM('unread', 'reading', 'completed');--> statement-breakpoint
CREATE TABLE "files" (
	"external_id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"active" boolean NOT NULL,
	"created_at" timestamp NOT NULL,
	"deleted_at" timestamp,
	"created_by" uuid,
	"deleted_by" uuid,
	"folder" uuid,
	"extension" "extension" NOT NULL,
	"category" "category" NOT NULL,
	"size" integer NOT NULL,
	"reading_percentage" integer NOT NULL,
	"reading_status" "reading_status" NOT NULL,
	"link" text NOT NULL,
	CONSTRAINT "files_external_id_unique" UNIQUE("external_id")
);
