---
title: Представление текста
toc: 'menu'
---

# Представление текста

Текст - единственный объект Web-страницы, который не требует специального определения, т.е. произвольные символы интерпретируются по умолчанию как текстовые данные. Для представления текста существует большое количество элементов.

Но, если вы намерены придерживаться хорошего стиля программирования Web-страниц, то вместо тегов форматирования следует использовать каскадные таблицы стилей (cascading stile sheets = CSS). Вообще по определению Консорциума World Wilde Web, язык (X)HTML необходимо использовать только для индентификации типа информации (текст, его заголовки, таблицы и т.п.), а не для форматирования этой информации.

Форматировать текст можно с помощью традиционных элементов - разбивать на отдельные смысловые части (параграфы, главы) и в этих **текстовых блоках** применять единый способ оформления элементов: выделять фрагменты текста курсивом, полужирным, выбирать шрифт и т.д.

HTML допускает два подхода к шрифтовому выделению фрагментов текста. С одной стороны, можно прямо указать, что шрифт на некотором участке текста должен быть жирным или наклонным, то есть изменить **физический** стиль текста. С другой стороны, можно пометить некоторый фрагмент текста как имеющий некоторый отличный от нормального **логический** стиль, оставив интерпретацию этого стиля браузеру.

## Текстовые блоки

Текст хорошо читается, если он структурирован, то есть, разбит на отдельные смысловые части.

В таблице 1 описаны элементы, разбивающие текст документа на блоки тем или иным способом. Типичными примерами текстовых блоков являются параграфы, абзацы и главы.

**Таблица 1**

| Код HTML                     | Описание                                            |
| ---------------------------- | --------------------------------------------------- |
| `<h1>` , `<h2>` , ... `<h6>` | Используются для создания заголовков текста         |
| `<p>`                        | Используется для разметки параграфов.               |
| `<div>`                      | Отделяет блок HTML-документа от остальной его части |

Если текст уже отформатирован, то для представления текста в заданном формате используется тег-контейнер `<pre>` , позволяющий сохранять имеющиеся переводы строк и пробелы.

**Пример 1. Тег `<pre>` **

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<body>
		<pre>
    Этот текст 
      заранее 
    отформатирован. 
    </pre
		>
	</body>
</html>
```

Результат применения этого тега можно увидеть ниже.

```
Этот текст
	заранее
отформатирован.
```

По умолчанию для отформатирвоанного заранее тектса выбирается моноширинный шрифт. Этот элемент удобно использовать для показа листингов программ и для вывода текстовых документов, переформатирование которых может привести к искажению их смысла.

## Физическое выделение

Под **физическим выделением** принято понимать прямое указание браузеру на модификацию текущего шрифта. Например, все, что находится между метками `<b>` и `</b>` , будет написано жирным шрифтом. Текст между метками `<i>` и `</i>` будет написан наклонным шрифтом.
В таблице. 2 перечислены основные теги, которые задают физический стиль шрифта.Эти теги не относятся к нерекомендованным, но для достижения большего эффекта рекомендуется использовать таблицы стилей.

**Таблица 2**

| Код HTML             | Описание                                  | Пример        |
| -------------------- | ----------------------------------------- | ------------- |
| `<b>` Текст `</b>`   | Отображает текст полужирным шрифтом       | <b>Текст</b>  |
| `<i>` Текст `</i>`   | Отображает текст стилем 'italic' (курсив) | <i>Текст</i>  |
| A `<sub>` 2 `</sub>` | Определяет подстрочный символ             | A<sub>2</sub> |
| A `<sup>` 1 `</sup>` | Определяет надстрочный символ             | A<sup>1</sup> |

Любые теги форматирования текста можно использовать совместно друг с другом. Чтобы сделать текст одновременно жирным и курсивным шрифтом используется сочетание тегов `<b>` и `<i>` (пример 1). Их порядок в данном случае не важен.

**Пример 1. Жирный курсивный текст**

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<body>
		<p>
			<b><i>Нитроглицерин</i></b> используется и как
			<i>лекарственное средство</i>, и как <i>взрывчатое вещество</i>.
		</p>
	</body>
</html>
```

Результат:

<p> <b><i>Нитроглицерин</i></b> используется и как <i>лекарственное средство</i>, и как <i>взрывчатое вещество</i>.</p>

## Логическое выделение

Существует большая группа элементов, которые используются нестолько для форматирования текста, сколько для выделения смысла абзацев и слов.

При использовании **логического выделения** автор документа не может знать заранее, что увидит на экране читатель. Разные браузеры толкуют одни и те же метки логических стилей по-разному. Некоторые браузеры игнорируют некоторые метки вообще и показывают нормальный текст вместо выделенного логическим стилем. Cамые распространенные логические стили представлены в таблице 3.

Перечисленные элементы не относятся к нерекомендованным, но для достижения большего эффекта рекомендуется использовать таблицы стилей.

**Таблица 3**

| Код HTML                     | Описание                                         |
| ---------------------------- | ------------------------------------------------ |
| `<em>` Текст `</em>`         | Обозначает логическое выделение в тексте         |
| `<strong>` Текст `</strong>` | Обозначает сильное логическое выделение в тексте |

Любые теги логического выделения текста можно использовать совместно друг с другом.

**Пример 2. Логическое выделение текста**

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<body>
		<strong><em>Нода</em></strong> - узел компьютерной сети
		<em>Фидонет</em>.
	</body>
</html>
```

Результат:

<strong><em>Нода</em></strong> - узел компьютерной сети <em>Фидонет</em>.

## Специальные символы

В HTML реализована возможность прорисовки символов по их кодам. Символы могут быть общепринятыми, вводимыми с клавиатуры, нестнадрантыми и используемыми в HTML в качестве служебных.

**Спецсимвол** можно ввести двумя способами:

-   указав его чирсловой код;
-   используя мнемоническую кодировку.

Для отделения кода символа от последующего текста надо вводить точку с запятой.

В таблице 4 приводятся наиболее используемые спецсимволы.

**Таблица 4**

| Символ | Числовой код | Мнемонический код | Название                    |
| ------ | ------------ | ----------------- | --------------------------- |
| "      | `&#34`       | `&quot;`          | Прямая ковычка              |
| &      | `&#38`       | `&amp;`           | Амперсанд                   |
| <      | `&#60`       | `&lt;`            | Знак «меньше»               |
| >      | `&#62`       | `&gt;`            | Знак «больше»               |
| ©      | `&#169`      | `&copy;`          | Знак копирайта              |
|        | `&#160`      | `&nbsp;`          | Неразрывный пробел          |
| §      | `&#167`      | `&sect;`          | Знак параграфа              |
| «      | `&#171`      | `&laquo;`         | Левая типографская ковычка  |
| »      | `&#187`      | `&raquo;`         | Правая типографская ковычка |
| ®      | `&#174`      | `&reg;`           | Знак "зарегистрировано"     |
| º      | `&#176`      | `&ordm;`          | Знак градуса                |
| ±      | `&#177`      | `&plusmn;`        | Знак "плюс-минус"           |
| ¥      | `&#165`      | `&yen;`           | Йена                        |
| ×      | `&#215`      | `&times;`         | Знак умножения              |
| ÷      | `&#247`      | `&divide;`        | Знак деления                |

Пример использования спец символов приведен ниже.

**Пример 3. Спецсимволы**

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<body>
		Художественный фильм "Эйфория" &copy; Студия 2ПЛАН2 &reg; 2006 Москва
	</body>
</html>
```

Результат:

Художественный фильм "Эйфория" &copy; Студия 2ПЛАН2 &reg; 2006 Москва
