/* eslint-disable no-new */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-delete-var */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
// https://www.w3schools.com/cssref/css_selectors.asp

// Selector ExampleExample descriptionURL
.class // .intro = Selects all elements with class="intro", https://www.w3schools.com/cssref/sel_class.asp
.class1.class2 // .name1.name2 = Selects all elements with both name1 and name2 set     within its class attribute, https://www.w3schools.com/cssref/sel_id.asp
.class1.class2 // .name1 .name2 = Selects all elements with name2 that is a descendant of an     element with name1, https://www.w3schools.com/cssref/sel_all.asp
# id // #firstname = Selects the element with id="firstname", https://www.w3schools.com/cssref/sel_id.asp
* // * = Selects all elements, https://www.w3schools.com/cssref/sel_all.asp
element // p = Selects all <p> elements, https://www.w3schools.com/cssref/sel_element.asp
element.class // p.intro = Selects all <p> elements with class="intro", https://www.w3schools.com/cssref/sel_element_class.asp
element, element // div, p = Selects all <div> elements and all <p> elements, https://www.w3schools.com/cssref/sel_element_comma.asp
element element // div p = Selects all <p> elements inside <div> elements, https://www.w3schools.com/cssref/sel_element_element.asp
element > element // div > p = Selects all <p> elements where the parent is a <div> element, https://www.w3schools.com/cssref/sel_element_gt.asp
element + element // div + p = Selects all <p> elements that are placed immediately after <div> elements, https://www.w3schools.com/cssref/sel_element_pluss.asp
element1~element2 // p ~ ul = Selects every <ul> element that are preceded by a <p> element, https://www.w3schools.com/cssref/sel_gen_sibling.asp
[attribute] // [target] = Selects all elements with a target attribute, https://www.w3schools.com/cssref/sel_attribute.asp
[attribute = value] // [target=_blank] = Selects all elements with target="_blank", https://www.w3schools.com/cssref/sel_attribute_value.asp
[attribute~ = value] // [title~=flower] = Selects all elements with a title attribute containing the word "flower", https://www.w3schools.com/cssref/sel_attribute_value_contains.asp
[attribute |= value] // [lang|=en] = Selects all elements with a lang attribute value starting with "en", https://www.w3schools.com/cssref/sel_attribute_value_lang.asp
[attribute ^= value] // a[href^="https"] = Selects every <a> element whose href attribute value begins with "https", https://www.w3schools.com/cssref/sel_attr_begin.asp
[attribute $ = value] // a[href$=".pdf"] = Selects every <a> element whose href attribute value ends with ".pdf", https://www.w3schools.com/cssref/sel_attr_end.asp
[attribute *= value] // a[href*="w3schools"] = Selects every <a> element whose href attribute value contains the substring "w3schools", https://www.w3schools.com/cssref/sel_attr_contain.asp
:active // a:active = Selects the active link, https://www.w3schools.com/cssref/sel_active.asp
::after // p::after = Insert something after the content of each <p> element, https://www.w3schools.com/cssref/sel_after.asp
::before // p::before = Insert something before the content of each <p> element, https://www.w3schools.com/cssref/sel_before.asp
:checked // input:checked = Selects every checked <input> element, https://www.w3schools.com/cssref/sel_checked.asp
:default // input:default = Selects the default <input> element, https://www.w3schools.com/cssref/sel_default.asp
:disabled // input:disabled = Selects every disabled <input> element, https://www.w3schools.com/cssref/sel_disabled.asp
:empty // p:empty = Selects every <p> element that has no children (including text nodes), https://www.w3schools.com/cssref/sel_empty.asp
:enabled // input:enabled = Selects every enabled <input> element, https://www.w3schools.com/cssref/sel_enabled.asp
:first - child // p:first-child = Selects every <p> element that is the first child of its parent, https://www.w3schools.com/cssref/sel_firstchild.asp
::first - letter // p::first-letter = Selects the first letter of every <p> element, https://www.w3schools.com/cssref/sel_firstletter.asp
::first - line // p::first-line = Selects the first line of every <p> element, https://www.w3schools.com/cssref/sel_firstline.asp
:first - of - type // p:first-of-type = Selects every <p> element that is the first <p> element of its parent, https://www.w3schools.com/cssref/sel_first-of-type.asp
:focus // input:focus = Selects the input element which has focus, https://www.w3schools.com/cssref/sel_focus.asp
:hover // a:hover = Selects links on mouse over, https://www.w3schools.com/cssref/sel_hover.asp
:in -range // input:in-range = Selects input elements with a value within a specified range, https://www.w3schools.com/cssref/sel_in-range.asp
:indeterminate // input:indeterminate = Selects input elements that are in an indeterminate state, https://www.w3schools.com/cssref/sel_indeterminate.asp
:invalid // input:invalid = Selects all input elements with an invalid value, https://www.w3schools.com/cssref/sel_invalid.asp
:lang(language) // p:lang(it) = Selects every <p> element with a lang attribute equal to "it" (Italian), https://www.w3schools.com/cssref/sel_lang.asp
:last - child // p:last-child = Selects every <p> element that is the last child of its parent, https://www.w3schools.com/cssref/sel_last-child.asp
:last - of - type // p:last-of-type = Selects every <p> element that is the last <p> element of its parent, https://www.w3schools.com/cssref/sel_last-of-type.asp
:link // a:link = Selects all unvisited links, https://www.w3schools.com/cssref/sel_link.asp
:not(selector) // :not(p) = Selects every element that is not a <p> element, https://www.w3schools.com/cssref/sel_not.asp
:nth - child(n) // p:nth-child(2) = Selects every <p> element that is the second child of its parent, https://www.w3schools.com/cssref/sel_nth-child.asp
:nth - last - child(n) // p:nth-last-child(2) = Selects every <p> element that is the second child of its parent, counting from the last child, https://www.w3schools.com/cssref/sel_nth-last-child.asp
:nth - last - of - type(n) // p:nth-last-of-type(2) = Selects every <p> element that is the second <p> element of its parent, counting from the last child, https://www.w3schools.com/cssref/sel_nth-last-of-type.asp
:nth - of - type(n) // p:nth-of-type(2) = Selects every <p> element that is the second <p> element of its parent, https://www.w3schools.com/cssref/sel_nth-of-type.asp
:only - of - type // p:only-of-type = Selects every <p> element that is the only <p> element of its parent, https://www.w3schools.com/cssref/sel_only-of-type.asp
:only - child // p:only-child = Selects every <p> element that is the only child of its parent, https://www.w3schools.com/cssref/sel_only-child.asp
:optional // input:optional = Selects input elements with no "required" attribute, https://www.w3schools.com/cssref/sel_optional.asp
:out - of - range // input:out-of-range = Selects input elements with a value outside a specified range, https://www.w3schools.com/cssref/sel_out-of-range.asp
::placeholder // input::placeholder = Selects input elements with the "placeholder" attribute specified, https://www.w3schools.com/cssref/sel_placeholder.asp
:read - only // input:read-only = Selects input elements with the "readonly" attribute specified, https://www.w3schools.com/cssref/sel_read-only.asp
:read - write // input:read-write = Selects input elements with the "readonly" attribute NOT specified, https://www.w3schools.com/cssref/sel_read-write.asp
:required // input:required = Selects input elements with the "required" attribute specified, https://www.w3schools.com/cssref/sel_required.asp
:root // :root = Selects the document's root element, https://www.w3schools.com/cssref/sel_root.asp
::selection // ::selection = Selects the portion of an element that is selected by a user, https://www.w3schools.com/cssref/sel_selection.asp
:target // #news:target = Selects the current active #news element (clicked on a URL containing that anchor name), https://www.w3schools.com/cssref/sel_target.asp
:valid // input:valid = Selects all input elements with a valid value, https://www.w3schools.com/cssref/sel_valid.asp
:visited // a:visited = Selects all visited links, https://www.w3schools.com/cssref/sel_visited.asp