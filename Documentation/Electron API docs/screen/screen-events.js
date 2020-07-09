# <https://www.electronjs.org/docs/api/screen#events>
// Retrieve information about screen size, displays, cursor position, etc.

'display-added' // Returns::  event Event newDisplay Display  Emitted when newDisplay has been added.
'display-removed' // Returns:  event Event oldDisplay Display  Emitted when oldDisplay has been removed.
'display-metrics-changed' // Returns:  event Event display Display changedMetrics String[]  Emitted when one or more metrics change in a display. The changedMetrics is an array of strings that describe the changes. Possible changes are bounds, workArea, scaleFactor and rotation.
