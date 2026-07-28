# -*- coding: utf-8 -*-
"""Shared helpers for blog post builders."""
from __future__ import annotations

import json
from typing import Any


def words(post: dict) -> int:
    total = 0
    for s in post["sections"]:
        total += len(" ".join(s["paragraphs"]).split())
    return total


def section(sid: str, heading: str, *paragraphs: str) -> dict:
    return {"id": sid, "heading": heading, "paragraphs": list(paragraphs)}


def base(**kwargs: Any) -> dict:
    d = {
        "author": "Dan Gage",
        "authorRole": "Founder, Junk Command",
    }
    d.update(kwargs)
    return d


def js_string(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def emit_post(post: dict, indent: str = "  ") -> str:
    keys = [
        "slug",
        "title",
        "metaTitle",
        "metaDescription",
        "category",
        "excerpt",
        "image",
        "imageAlt",
        "author",
        "authorRole",
        "datePublished",
        "dateModified",
        "readTime",
        "relatedSlugs",
        "faqs",
        "sections",
    ]
    lines = ["{"]
    for i, key in enumerate(keys):
        val = post[key]
        comma = "," if i < len(keys) - 1 else ""
        if key == "relatedSlugs":
            arr = ", ".join(js_string(x) for x in val)
            lines.append(f"{indent}{key}: [{arr}]{comma}")
        elif key == "faqs":
            lines.append(f"{indent}{key}: [")
            for j, faq in enumerate(val):
                c = "," if j < len(val) - 1 else ""
                lines.append(f"{indent}  {{")
                lines.append(f"{indent}    question: {js_string(faq['question'])},")
                lines.append(f"{indent}    answer: {js_string(faq['answer'])},")
                lines.append(f"{indent}  }}{c}")
            lines.append(f"{indent}]{comma}")
        elif key == "sections":
            lines.append(f"{indent}{key}: [")
            for j, sec in enumerate(val):
                c = "," if j < len(val) - 1 else ""
                lines.append(f"{indent}  {{")
                lines.append(f"{indent}    id: {js_string(sec['id'])},")
                lines.append(f"{indent}    heading: {js_string(sec['heading'])},")
                lines.append(f"{indent}    paragraphs: [")
                for k, p in enumerate(sec["paragraphs"]):
                    pc = "," if k < len(sec["paragraphs"]) - 1 else ""
                    lines.append(f"{indent}      {js_string(p)}{pc}")
                lines.append(f"{indent}    ],")
                lines.append(f"{indent}  }}{c}")
            lines.append(f"{indent}]")
        else:
            lines.append(f"{indent}{key}: {js_string(val)}{comma}")
    lines.append("}")
    return "\n".join(lines)
