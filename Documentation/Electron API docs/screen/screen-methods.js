# <https://www.electronjs.org/docs/api/screen#methods>
// The screen module has the following methods:

screen.getCursorScreenPoint() //, Returns Point The current absolute position of the mouse pointer.
screen.getPrimaryDisplay() //, Returns Display - The primary display.
screen.getAllDisplays() //, Returns Display[] - An array of displays that are currently available.
screen.getDisplayNearestPoint(point) //, point Point Returns Display - The display nearest the specified point.
screen.getDisplayMatching(rect) //, rect Rectangle Returns Display - The display that most closely intersects the provided bounds.
screen.screenToDipPoint(point) //, Windows point Point Returns Point Converts a screen physical point to a screen DIP point. The DPI scale is performed relative to the display containing the physical point.
screen.dipToScreenPoint(point) //, Windows point Point Returns Point Converts a screen DIP point to a screen physical point. The DPI scale is performed relative to the display containing the DIP point.
screen.screenToDipRect(window, rect) //, Windows window BrowserWindow | null rect Rectangle Returns Rectangle Converts a screen physical rect to a screen DIP rect. The DPI scale is performed relative to the display nearest to window. If window is null, scaling will be performed to the display nearest to rect.
screen.dipToScreenRect(window, rect) //, Windows window BrowserWindow | null rect Rectangle Returns Rectangle Converts a screen DIP rect to a screen physical rect. The DPI scale is performed relative to the display nearest to window. If window is null, scaling will be performed to the display nearest to rect.
