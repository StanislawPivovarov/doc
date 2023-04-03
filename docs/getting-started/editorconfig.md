---
title: Editorconfig
---

# Editorconfig

EditorConfig помогает поддерживать согласованные стили кодирования для нескольких разработчиков, работающих над одним и тем же проектом в разных редакторах и IDE.

Создать файл `.editorconfig` в корневом директории, добавить следующий код конфига:

```
root = true

[*]
indent_style = tab
indent_size = 4
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
tab_width = 4
end_of_line = lf
max_line_length = 120

```
