# <https://www.markdownguide.org/basic-syntax>

Headings
To create a heading, add number signs (#) in front of a word or phrase.
The number of number signs you use should correspond to the heading level.
For example, to create a heading level three (<h3>), use three number signs (e.g., ### My Header).

Paragraphs
To create paragraphs, use a blank line to separate one or more lines of text.

Line Breaks
To create a line break (<br>), end a line with two or more spaces, and then type return.

Emphasis
To bold text, add two asterisks or underscores before and after a word or phrase. To bold the middle of a word for emphasis, add two asterisks without spaces around the letters.
To italicize text, add one asterisk or underscore before and after a word or phrase. To italicize the middle of a word for emphasis, add one asterisk without spaces around the letters.
To emphasize text with bold and italics at the same time, add three asterisks or underscores before and after a word or phrase. To bold and italicize the middle of a word for emphasis, add three asterisks without spaces around the letters.

Blockquotes
To create a blockquote, add a > in front of a paragraph.
Blockquotes can contain multiple paragraphs. Add a > on the blank lines between the paragraphs.
Blockquotes can be nested. Add a >> in front of the paragraph you want to nest.

Lists
To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one.
To create an unordered list, add dashes (-), asterisks (*), or plus signs (+) in front of line items. Indent one or more items to create a nested list.
To add another element in a list while preserving the continuity of the list, indent the element four spaces or one tab, as shown in the following examples.

Code
To create code blocks, indent every line of the block by at least four spaces or one tab.
If the word or phrase you want to denote as code includes one or more backticks, you can escape it by enclosing the word or phrase in double backticks (``).

Horizontal Rules
To create a horizontal rule, use three or more asterisks (***), dashes (---), or underscores (___) on a line by themselves.
For compatibility, put blank lines before and after horizontal rules.

Links
To create a link, enclose the link text in brackets (e.g., [Duck Duck Go]) and then follow it immediately with the URL in parentheses (e.g., (https://duckduckgo.com)).
You can optionally add a title for a link. This will appear as a tooltip when the user hovers over the link. To add a title, enclose it in parentheses after the URL.
To quickly turn a URL or email address into a link, enclose it in angle brackets. <'...'>

Images
To add an image, add an exclamation mark (!), followed by alt text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a title after the URL in the parentheses.
To add a link to an image, enclose the Markdown for the image in brackets, and then add the link in parentheses.

Escaping Characters
To display a literal character that would otherwise be used to format text in a Markdown document, add a backslash (\) in front of the character.
\* Without the backslash, this would be a bullet in an unordered list.

* \\ backslash
* \` backtick (see also escaping backticks in code)
* \* asterisk
* \_ underscore
* { } curly braces
* \[ ] brackets
* \( ) parentheses
* \# pound sign
* \+ plus sign
* \- minus sign (hyphen)
* \. dot
* \! exclamation mark
* \| pipe (see also escaping pipe in tables)

HTML
Many Markdown applications allow you to use HTML tags in Markdown-formatted text. This is helpful if you prefer certain HTML tags to Markdown syntax. For example, some people find it easier to use HTML tags for images. Using HTML is also helpful when you need to change the attributes of an element, like specifying the color of text or changing the width of an image.
To use HTML, place the tags in the text of your Markdown-formatted file.
This **word** is bold. This <em>word</em> is italic.  
