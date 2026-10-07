"use client";

import AuthLayout from "@/features/auth/layouts/AuthLayout";

export default function AuthRouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthLayout>{children}</AuthLayout>;
}
