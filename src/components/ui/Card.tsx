"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  href: string;
  flag?: string;
  className?: string;
}

export default function Card({
  title,
  description,
  image,
  href,
  flag,
  className,
}: CardProps) {
  return (
    <Link href={href}>
      <motion.div
        className={cn(
          "group relative rounded-card overflow-hidden bg-white shadow-luxury cursor-pointer",
          className
        )}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {image && (
          <div className="relative h-56 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-800/60 via-transparent to-transparent" />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            {flag && <span className="text-2xl">{flag}</span>}
            <h3 className="font-heading text-xl text-navy-700 group-hover:text-gold-500 transition-colors">
              {title}
            </h3>
          </div>
          {description && (
            <p className="text-navy-400 text-sm leading-relaxed line-clamp-3">
              {description}
            </p>
          )}
        </div>
      </motion.div>
    </Link>
  );
}
