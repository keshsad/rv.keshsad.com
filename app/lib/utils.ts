import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// https://github.com/shadcn-ui/ui/blob/main/apps/v4/lib/utils.ts
//
//export function absoluteUrl(path: string) {
//  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
//}
//
// my attempt
//
//export function absoluteUrl(path: string) {
//  return `${import.meta.env.APP_URL}${path}`
//}
