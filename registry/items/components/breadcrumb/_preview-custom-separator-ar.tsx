"use client";

import { IconSlash } from "@tabler/icons-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./breadcrumb";

export function Preview() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">الرئيسية</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <IconSlash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/umrah">العمرة</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <IconSlash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>الحجز</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
