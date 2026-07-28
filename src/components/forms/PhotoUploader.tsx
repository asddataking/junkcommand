"use client";

import { ImagePlus, X } from "lucide-react";
import {
  type ChangeEvent,
  type DragEvent,
  useCallback,
  useState,
} from "react";

type PhotoUploaderProps = {
  files: File[];
  onChange: (files: File[]) => void;
};

export function PhotoUploader({ files, onChange }: PhotoUploaderProps) {
  const [dragging, setDragging] = useState(false);

  const addFiles = useCallback(
    (incoming: FileList | File[]) => {
      const next = Array.from(incoming).filter((f) =>
        f.type.startsWith("image/"),
      );
      onChange([...files, ...next].slice(0, 8));
    },
    [files, onChange],
  );

  const onDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files);
  };

  const onInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) addFiles(e.target.files);
    e.target.value = "";
  };

  const removeAt = (index: number) => {
    onChange(files.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-3">
      <label
        htmlFor="photo-upload"
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        className={`flex cursor-pointer flex-col items-center justify-center rounded-[3px] border border-dashed px-4 py-8 transition-colors ${
          dragging
            ? "border-bright bg-[rgba(7,135,255,0.12)]"
            : "border-[rgba(0,135,255,0.45)] bg-[#020305] hover:border-bright"
        }`}
      >
        <ImagePlus className="size-7 text-bright" aria-hidden />
        <span className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-white">
          Upload Photos — Optional
        </span>
        <span className="mt-1 text-sm text-muted">
          Drag & drop or click to browse
        </span>
        <input
          id="photo-upload"
          type="file"
          accept="image/*"
          multiple
          className="sr-only"
          onChange={onInput}
        />
      </label>

      {files.length > 0 ? (
        <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4">
          {files.map((file, index) => {
            const url = URL.createObjectURL(file);
            return (
              <li
                key={`${file.name}-${index}`}
                className="group relative aspect-square overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.35)]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={url}
                  alt={`Upload preview ${index + 1}`}
                  className="h-full w-full object-cover"
                  onLoad={() => URL.revokeObjectURL(url)}
                />
                <button
                  type="button"
                  onClick={() => removeAt(index)}
                  aria-label={`Remove ${file.name}`}
                  className="absolute right-1 top-1 rounded-[2px] bg-black/70 p-1 text-white hover:bg-black"
                >
                  <X className="size-3.5" />
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
